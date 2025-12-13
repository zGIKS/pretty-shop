export const redirectToGoogleOAuth = () => {
  const googleOauthEndpoint = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ENDPOINT;

  if (!googleOauthEndpoint) {
    console.error("NEXT_PUBLIC_GOOGLE_OAUTH_ENDPOINT is not defined");
    return;
  }

  window.location.href = googleOauthEndpoint;
};

export const getCurrentUser = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    console.error("NEXT_PUBLIC_BACKEND_URL is not defined");
    return null;
  }

  try {
    const response = await fetch(`${backendUrl}/api/v1/auth/user`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const logoutUser = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    console.error("NEXT_PUBLIC_BACKEND_URL is not defined");
    return;
  }

  try {
    await fetch(`${backendUrl}/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
