const SERVER_IP = "localhost:3977";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    USER_ME: "user/me",
    USER: "user",
    ENGINEER: "user/edit",
    USERS: "users",
    COUNTRY: "country",
    COUNTRIES: "countries",
    TICKET: "ticket",
    TICKETS: "tickets",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
