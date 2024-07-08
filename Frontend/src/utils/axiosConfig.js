export const base_url = "https://855c-1-53-82-77.ngrok-free.app/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
    "ngrok-skip-browser-warning": "69420"
  },
};
