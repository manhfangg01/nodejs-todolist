import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onEditTask, currentFilter }) => {
  if (tasks.length === 0) {
    const emptyMessage =
      currentFilter === "active"
        ? "Tuyệt vời! Bạn không còn nhiệm vụ đang làm nào."
        : currentFilter === "completed"
        ? "Bạn chưa hoàn thành nhiệm vụ nào."
        : currentFilter === "uncompleted"
        ? "Bạn không có nhiệm vụ nào cần làm"
        : "Chưa có nhiệm vụ. Thêm nhiệm vụ đầu tiên vào để bắt đầu!";

    return (
      <div className="text-center p-12 bg-white rounded-xl shadow-inner mt-8">
        <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-gray-700">Chưa có nhiệm vụ.</p>
        <p className="text-sm text-gray-500 mt-1">{emptyMessage}</p>
      </div>
    );
  }
  return (
    <div className="mt-8 space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
      ))}
    </div>
  );
};

export default TaskList;
