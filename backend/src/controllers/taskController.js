import Task from "../models/Task.js";

export const getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    response.status(200).json({ data: tasks });
  } catch (error) {
    console.log("Lỗi xảy ra với getAllTasks");
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createTask = async (request, response) => {
  try {
    const { title } = request.body;
    const task = new Task({ title });
    const newTask = await task.save();
    console.log(newTask);
    response.status(200).json({ data: newTask });
  } catch (error) {
    console.log("Lỗi xảy ra với createTask");
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const updateTask = async (request, response) => {
  try {
    const { title, status, completedAt } = request.body;
    const updatedTask = await Task.findByIdAndUpdate(
      request.params.id,
      {
        title,
        status,
        completedAt,
      },
      {
        new: true,
      }
    );
    if (!updatedTask) {
      return response.status(404).json({ message: "Không tìm thấy công việc cần sửa" });
    }
    response.status(200).json({ message: "Đã chỉnh sửa công việc thành công", data: updatedTask });
  } catch (error) {
    console.log("Lỗi xảy ra với updateTask");
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const deleteTask = async (request, response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(request.params.id);
    if (!deleteTask) {
      return response.status(404).json({ message: "Không tìm thấy công việc cần xóa" });
    }

    response.status(200).json({ message: "Đã xóa công việc thành công", data: deletedTask });
  } catch (error) {
    console.log("Lỗi xảy ra với deleteTask");
    response.status(500).json({ message: "Lỗi hệ thống" });
  }
};
