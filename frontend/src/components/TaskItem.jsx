import React, { useState } from "react";
import { FaTrash, FaPen, FaCheck, FaTimes } from "react-icons/fa"; // Icons

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleSaveEdit = () => {
    if (editTitle.trim() && editTitle !== task.title) {
      onEditTask(task._id, { title: editTitle.trim() });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
    if (e.key === "Escape") {
      setEditTitle(task.title);
      setIsEditing(false);
    }
  };

  const isCompleted = task.status === "completed";
  const textStyle = isCompleted ? "line-through text-gray-500 italic" : "text-gray-800";
  const borderStyle = isCompleted ? "border-l-green-400" : "border-l-indigo-500";

  return (
    <div className={`flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${borderStyle} border-l-4`}>
      <button
        onClick={() => onToggleComplete(task._id, task.status)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors mr-4
          ${isCompleted ? "bg-green-500 border-green-500 text-white" : "border-gray-400 hover:bg-gray-100"}`}
        aria-label={isCompleted ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã hoàn thành"}
      >
        {isCompleted && <FaCheck className="w-3 h-3" />}
      </button>

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleSaveEdit}
            onKeyDown={handleKeyDown}
            className="w-full text-lg font-medium p-1 border-b-2 border-indigo-400 focus:outline-none"
            autoFocus
          />
        ) : (
          <p className={`text-lg font-medium truncate ${textStyle}`}>{task.title}</p>
        )}
      </div>

      <div className="flex items-center gap-2 ml-4">
        {!isEditing && (
          <>
            <button onClick={() => setIsEditing(true)} className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors" aria-label="Chỉnh sửa">
              <FaPen className="w-4 h-4" />
            </button>
            <button onClick={() => onDeleteTask(task._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" aria-label="Xóa">
              <FaTrash className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
