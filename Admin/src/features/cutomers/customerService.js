import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getUsers = async () => {
  try {
    const response = await axios.get(`${base_url}user/all-users`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

const blockUser = async (Id) => {
  try {
    const response = await axios.put(`${base_url}user/block-user/${Id}`);
    return response.data;
  } catch (error) {
    console.error("Error in blockUser:", error.response || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
};

const unblockUser = async (Id) => {
  try {
    const response = await axios.put(`${base_url}user/unblock-user/${Id}`);
    return response.data;
  } catch (error) {
    console.error("Error in unblockUser:", error.response || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
};

const updateUser = async (data, token) => {
  try {
    const response = await axios.put(
      `${base_url}user/edit-user`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the headers are included
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in updateUser:", error.response || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
};

const customerService = {
  getUsers,
  blockUser,
  unblockUser,
  updateUser,
};

export default customerService;
