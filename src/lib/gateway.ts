/**
 * Returns the configured API gateway base URL, or null if not set.
 * Trailing slashes are stripped.
 */
export const getGateway = (): string | null => {
  const value = process.env.NEXT_PUBLIC_API_GATEWAY?.trim();
  return value ? value.replace(/\/+$/, "") : null;
};
