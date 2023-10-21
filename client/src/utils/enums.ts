const API_ENDPOINT_V1 = "clone/api/v1";

const API_ENDPOINT = API_ENDPOINT_V1;

export const URL = "https://flow-chat-backend.onrender.com"

const USERS_API = {
  SIGNUP: `${API_ENDPOINT}/signup`,
  LOGIN: `${API_ENDPOINT}/login`,
};

const STATISTICS_API = {
  GET_ALL_USERS: `${API_ENDPOINT}/getAllUsers`,
  CREATE_MESSAGE: `${API_ENDPOINT}/createMessage`,
  GET_SINGLE_USER: `${API_ENDPOINT}/singleUser`,
  GET_MATCHED_MESSAGES: `${API_ENDPOINT}/matchedMessages`,
};

export const API_ROUTES = {
  ...USERS_API,
  ...STATISTICS_API,
};
