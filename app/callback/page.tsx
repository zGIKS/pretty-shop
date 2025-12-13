"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { setUserSession, getUserSession } from "@/lib/session";

function Welcome() {
  const searchParams = useSearchParams();
  const nameFromQuery = searchParams.get("name");
  const session = getUserSession();
  const name = nameFromQuery || session?.name;

  useEffect(() => {
    if (nameFromQuery) {
      setUserSession({ name: nameFromQuery });
    }
  }, [nameFromQuery]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Bienvenido, {name}</h1>
    </div>
  );
}

export default function Callback() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Welcome />
    </Suspense>
  );
}
