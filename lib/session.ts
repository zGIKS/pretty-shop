import Cookies from "js-cookie";

const USER_SESSION_KEY = "user_session";

export const setUserSession = (session: object) => {
  Cookies.set(USER_SESSION_KEY, JSON.stringify(session), { expires: 7 });
};

export const getUserSession = () => {
  const session = Cookies.get(USER_SESSION_KEY);
  return session ? JSON.parse(session) : null;
};

export const removeUserSession = () => {
  Cookies.remove(USER_SESSION_KEY);
};
