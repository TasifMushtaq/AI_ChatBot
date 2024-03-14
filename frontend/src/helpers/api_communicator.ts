// import axios from "axios";
// import { IoMdRestaurant } from "react-icons/io";
// export const loginUser = async (email: string, password: string) => {
//   const res = await axios.post("/user/login", { email, password });
//   if (res.status !== 200) {
//     throw new Error("Unable to login");
//   }
//   const data = await res.data;
//   return data;
//   IoMdRestaurant;
  
// };

// export const signupUser = async (
//   name: string,
//   email: string,
//   password: string
// ) => {
//   const res = await axios.post("/user/signup", { name, email, password });
//   if (res.status !== 201) {
//     throw new Error("Unable to Signup");
//   }
//   const data = await res.data;
//   return data;
// };

// export const checkAuthStatus = async () => {
//   const res = await axios.get("/user/auth-status");
//   if (res.status !== 200) {
//     throw new Error("Unable to authenticate");
//   }
//   const data = await res.data;
//   return data;
// };

// export const sendChatRequest = async (message: string) => {
//   const res = await axios.post("/chat/new", { message });
//   if (res.status !== 200) {
//     throw new Error("Unable to send chat");
//   }
//   const data = await res.data;
//   return data;
// };

// export const getUserChats = async () => {
//   const res = await axios.get("/chat/all-chats");
//   if (res.status !== 200) {
//     throw new Error("Unable to send chat");
//   }
//   const data = await res.data;
//   return data;
// };

// export const deleteUserChats = async () => {
//   const res = await axios.delete("/chat/delete");
//   if (res.status !== 200) {
//     throw new Error("Unable to delete chats");
//   }
//   const data = await res.data;
//   return data;
// };

// export const logoutUser = async () => {
//   const res = await axios.get("/user/logout");
//   if (res.status !== 200) {
//     throw new Error("Unable to delete chats");
//   }
//   const data = await res.data;
//   return data;
// };

import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

// Function to get authentication token
const getAuthToken = () => {
  return localStorage.getItem("authToken"); // Assuming you're storing the token in localStorage
};

// export const checkAuthStatus = async () => {
//   const authToken = getAuthToken();
//   const res = await axios.get("/user/auth-status", {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });
//   if (res.status !== 200) {
//     throw new Error("Unable to authenticate");
//   }
//   const data = await res.data;
//   return data;
// };

// export const sendChatRequest = async (message: string) => {
//   const authToken = getAuthToken();
//   const res = await axios.post("/chat/new", { message }, {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });
//   if (res.status !== 200) {
//     throw new Error("Unable to send chat");
//   }
//   const data = await res.data;
//   return data;
// };
export const sendChatRequest = async (message:string) => {
  const res = await axios.post("/chat/new", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};
export const getUserChats = async () => {
  const res = await axios.get("/chat/all-chats");
  if (res.status !== 200) {
    throw new Error("Unable to get user chats");
  }
  const data = await res.data;
  return data;
};
export const deleteUserChats = async () => {
  const res = await axios.delete("/chat/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
// export const getUserChats = async () => {
//   const authToken = getAuthToken();
//   const res = await axios.get("/chat/all-chats", {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });
//   if (res.status !== 200) {
//     throw new Error("Unable to get user chats");
//   }
//   const data = await res.data;
//   return data;
// };

// export const deleteUserChats = async () => {
//   const authToken = getAuthToken();
//   const res = await axios.delete("/chat/delete", {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });
//   if (res.status !== 200) {
//     throw new Error("Unable to delete chats");
//   }
//   const data = await res.data;
//   return data;
// };

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};