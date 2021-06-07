import axios from "axios";

const base_url = "https://segware-book-api.segware.io/api";

export async function sign_up_func(user) {
  return await axios.post(`${base_url}/sign-up`, user);
}

export async function sign_in_func(user) {
  const response = await axios.post(`${base_url}/sign-in`, user);
  return response;
}

export async function recover_password(username) {
  const response = await axios.get(`${base_url}/forgot-password/${username}`);
  return response;
}

export async function post_message(message) {
  return await axios.post(`${base_url}/feed`, message, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });
}

export async function get_posts() {
  const response = await axios.get(`${base_url}/feeds`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });
  return response;
}

export async function post_reaction(reaction) {
  await axios.post(`${base_url}/reaction`, reaction);
}
