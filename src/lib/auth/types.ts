export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type: "Bearer";
  expires_in: number;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthError {
  error: string;
}
