import AddTasks from "@/components/AddTasks";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "@/lib/api";
import { toast } from "sonner";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data.data || []);
    } catch (error) {
      toast.error("Không thể tải danh sách công việc");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (title) => {
    try {
      const newTask = await createTask(title);
      setTasks([newTask.data, ...tasks]);
      toast.success("Đã thêm công việc mới");
    } catch (error) {
      toast.error("Lỗi khi thêm công việc");
    }
  };

  const handleToggleComplete = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "completed" ? "active" : "completed";
      const updated = await updateTask(id, { status: newStatus });
      setTasks(tasks.map((t) => (t._id === id ? updated.data : t)));
      toast.success(newStatus === "completed" ? "Đã hoàn thành công việc" : "Đã mở lại công việc");
    } catch (error) {
      toast.error("Lỗi khi cập nhật trạng thái");
    }
  };

  const handleEditTask = async (id, data) => {
    try {
      const updated = await updateTask(id, data);
      setTasks(tasks.map((t) => (t._id === id ? updated.data : t)));
      toast.success("Đã cập nhật công việc");
    } catch (error) {
      toast.error("Lỗi khi cập nhật công việc");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
      toast.success("Đã xóa công việc");
    } catch (error) {
      toast.error("Lỗi khi xóa công việc");
    }
  };

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return task.status === "active";
    if (filter === "completed") return task.status === "completed";
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const paginatedTasks = filteredTasks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Stats
  const stats = {
    active: tasks.filter((t) => t.status === "active").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Aurora Dream Soft Harmony */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
        radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
        }}
      />
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/*Header */}
          <Header />

          {/* Tạo nhiệm vụ */}
          <AddTasks onAddTask={handleAddTask} />

          {/* Thống kê và bộ lọc*/}
          <StatsAndFilters
            stats={stats}
            currentFilter={filter}
            onFilterChange={(f) => {
              setFilter(f);
              setCurrentPage(1);
            }}
          />

          {/* Danh sách công việc*/}
          <TaskList tasks={paginatedTasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} currentFilter={filter} />

          <div className="flex flex-col items-center justify-between gap-6 sm-flex-row">
            <TaskListPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            <DateTimeFilter />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
