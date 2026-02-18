import { AuthRequestError, getAccessToken, getRefreshToken, refreshAccessToken } from "./client";

type RequestInitWithAuth = RequestInit & {
  skipAuth?: boolean;
  retryOnAuthError?: boolean;
};

const shouldTryRefresh = async (response: Response) => {
  if (response.status !== 401) return false;

  try {
    const payload = (await response.clone().json()) as { error?: string };
    return payload?.error === "invalid or expired token" || payload?.error === "invalid authorization token";
  } catch {
    return false;
  }
};

export const authFetch = async (input: RequestInfo | URL, init: RequestInitWithAuth = {}) => {
  const { skipAuth = false, retryOnAuthError = true, headers, ...rest } = init;
  const token = !skipAuth ? getAccessToken() : undefined;
  const requestHeaders = new Headers(headers);

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(input, {
    ...rest,
    headers: requestHeaders,
  });

  if (!retryOnAuthError || skipAuth) {
    return response;
  }

  if (!(await shouldTryRefresh(response))) {
    return response;
  }

  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    return response;
  }

  try {
    const newTokens = await refreshAccessToken(refreshToken);
    const retryHeaders = new Headers(headers);
    retryHeaders.set("Authorization", `Bearer ${newTokens.access_token}`);

    return await fetch(input, {
      ...rest,
      headers: retryHeaders,
    });
  } catch (error) {
    if (error instanceof AuthRequestError) {
      return response;
    }
    return response;
  }
};
