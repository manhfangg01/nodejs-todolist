import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const createTask = async (title) => {
  const response = await api.post("/tasks", { title });
  return response.data;
};

export const updateTask = async (id, data) => {
  const response = await api.put("/tasks", { id, ...data });
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

export default api;
