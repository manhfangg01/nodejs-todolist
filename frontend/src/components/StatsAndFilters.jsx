import React from "react";
import { FaFilter } from "react-icons/fa";
import { cn } from "@/lib/utils";

const StatsAndFilters = ({ stats, currentFilter, onFilterChange }) => {
  return (
    <div className="flex flex-col justify-between items-start sm:flex-row sm:items-center space-y-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        <span className="text-center text-sm text-blue-700 font-semibold text bg-white border-2 border-black rounded-xl p-1">{stats.active} đang làm</span>
        <span className="text-center text-sm text-green-700 font-semibold text bg-white border-2 border-black rounded-xl p-1">{stats.completed} hoàn thành</span>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row text-md text-white font-semibold">
        <button
          onClick={() => onFilterChange("all")}
          className={cn(
            "flex items-center gap-1 rounded-2xl px-5 py-1 transition-all",
            currentFilter === "all" ? "bg-indigo-500 text-white shadow-md" : "text-black hover:bg-indigo-500 hover:text-white hover:shadow-md"
          )}
        >
          <FaFilter /> <span>Tất cả</span>
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={cn(
            "flex items-center gap-1 rounded-2xl px-5 py-1 transition-all",
            currentFilter === "active" ? "bg-indigo-500 text-white shadow-md" : "text-black hover:bg-indigo-500 hover:text-white hover:shadow-md"
          )}
        >
          <FaFilter /> <span>Đang làm</span>
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={cn(
            "flex items-center gap-1 rounded-2xl px-5 py-1 transition-all",
            currentFilter === "completed" ? "bg-indigo-500 text-white shadow-md" : "text-black hover:bg-indigo-500 hover:text-white hover:shadow-md"
          )}
        >
          <FaFilter /> <span>Hoàn thành</span>
        </button>
      </div>
    </div>
  );
};

export default StatsAndFilters;
