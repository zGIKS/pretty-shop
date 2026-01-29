"use client";

import { useSyncExternalStore } from "react";
import type { Product } from "@/lib/products";

const STORAGE_KEY = "pretty_cart_items";

interface CartRecord {
  product: Product;
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartSnapshot {
  records: CartRecord[];
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "hydrate"; payload: CartRecord[] }
  | { type: "add"; payload: CartRecord }
  | { type: "update"; payload: { productId: string; quantity: number } }
  | { type: "remove"; payload: { productId: string } }
  | { type: "clear" };

let storedRecords: CartRecord[] = [];
const listeners = new Set<() => void>();
let initialized = false;

const cartReducer = (state: CartRecord[], action: CartAction): CartRecord[] => {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "add": {
      const existing = state.find((item) => item.product.id === action.payload.product.id);
      const max = action.payload.product.quantity ?? Infinity;

      if (!existing) {
        const qty = Math.max(0, Math.min(action.payload.quantity, max));
        if (qty <= 0) return state;
        return [...state, { product: action.payload.product, quantity: qty }];
      }

      const newQty = Math.max(0, Math.min(existing.quantity + action.payload.quantity, max));
      return state.map((item) =>
        item.product.id === action.payload.product.id
          ? { ...item, quantity: newQty, product: action.payload.product }
          : item
      );
    }
    case "update": {
      const existing = state.find((item) => item.product.id === action.payload.productId);
      if (!existing) return state;

      const max = existing.product.quantity ?? Infinity;
      const qty = Math.max(0, Math.min(action.payload.quantity, max));
      if (qty <= 0) {
        return state.filter((item) => item.product.id !== action.payload.productId);
      }

      return state.map((item) =>
        item.product.id === action.payload.productId ? { ...item, quantity: qty } : item
      );
    }
    case "remove":
      return state.filter((item) => item.product.id !== action.payload.productId);
    case "clear":
      return [];
    default:
      return state;
  }
};

const computeSnapshot = (records: CartRecord[]): CartSnapshot => {
  const items = records.map((record) => ({
    product: record.product,
    quantity: record.quantity,
  }));

  const totalItems = records.reduce((sum, record) => sum + record.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return { records, items, totalItems, totalPrice };
};

const persistRecords = () => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedRecords));
  } catch {
    // ignore
  }
};

const ensureInitialized = () => {
  if (initialized) return;
  if (typeof window === "undefined") {
    initialized = true;
    return;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        storedRecords = parsed;
      }
    }
  } catch {
    // ignore invalid JSON
  }

  initialized = true;
};

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

const dispatch = (action: CartAction) => {
  const nextRecords = cartReducer(storedRecords, action);
  if (nextRecords === storedRecords) {
    return;
  }
  storedRecords = nextRecords;
  lastSnapshot = null;
  persistRecords();
  notifyListeners();
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

let lastSnapshot: CartSnapshot | null = null;

const getSnapshot = (): CartSnapshot => {
  ensureInitialized();
  if (lastSnapshot && lastSnapshot.records === storedRecords) {
    return lastSnapshot;
  }
  lastSnapshot = computeSnapshot(storedRecords);
  return lastSnapshot;
};

const SERVER_SNAPSHOT: CartSnapshot = computeSnapshot([]);

const getServerSnapshot = (): CartSnapshot => SERVER_SNAPSHOT;

const addCartItem = (product: Product, quantity = 1) => {
  dispatch({
    type: "add",
    payload: {
      product,
      quantity: Math.max(1, Math.floor(quantity)),
    },
  });
};

const updateCartItemQuantity = (productId: string, quantity: number) => {
  dispatch({
    type: "update",
    payload: {
      productId,
      quantity: Math.max(0, Math.floor(quantity)),
    },
  });
};

const removeCartItem = (productId: string) => {
  dispatch({
    type: "remove",
    payload: { productId },
  });
};

const clearCartItems = () => {
  dispatch({ type: "clear" });
};

export function useCart() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { items, totalItems, totalPrice } = snapshot;

  return {
    items,
    totalItems,
    totalPrice,
    addItem: addCartItem,
    updateItemQuantity: updateCartItemQuantity,
    removeItem: removeCartItem,
    clearCart: clearCartItems,
  };
}
