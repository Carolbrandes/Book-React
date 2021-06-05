import axios from "axios";

const base_url = "https://segware-book-api.segware.io/api";

export async function sign_up_func(user) {
  return await axios.post(`${base_url}/sign-up`, user);
}

export async function sign_in_func(user) {
  const response = await axios.post(`${base_url}/sign-in`, user);
  return response;
}
