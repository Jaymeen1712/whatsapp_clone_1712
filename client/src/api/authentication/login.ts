import axios from "axios";
import Cookies from "js-cookie";

import { API_ROUTES } from "../../utils";
import apiClient from "../api-client";

const handleLoginAPI = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  let errors = null;
  let response = null;
  try {
    response = await apiClient.post(API_ROUTES.LOGIN, {
      username,
      password,
    });

    if (response) {
      if (response?.data?.is_user_valid) {
        Cookies.set("user_id", response?.data?.uuid);
        return [response, errors];
      } else {
        errors = response?.data?.message;
        return [response, errors];
      }
    }
  } catch (error) {
    if (axios?.isAxiosError(error)) {
      if (
        error?.response &&
        error?.response.status === 400 &&
        error?.response?.data?.detail
      ) {
        errors = error?.response?.data?.detail;
        return [response, errors];
      }
    }
  }
};

export default handleLoginAPI;
