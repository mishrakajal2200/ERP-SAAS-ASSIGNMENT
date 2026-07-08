import {
  loginAPI,
  registerAPI,
  getMeAPI,
  forgotPasswordAPI,
  resetPasswordAPI,
} from "./authAPI";

export const loginService =
  async (data) => {
    const res =
      await loginAPI(data);

    return res.data;
  };

export const registerService =
  async (data) => {
    const res =
      await registerAPI(data);

    return res.data;
  };

export const getMeService =
  async () => {
    const res =
      await getMeAPI();

    return res.data;
  };

  export const forgotPasswordService = async (data) => {
  const res = await forgotPasswordAPI(data);
  return res.data;
};

export const resetPasswordService = async (token, data) => {
  const res = await resetPasswordAPI(token, data);
  return res.data;
};