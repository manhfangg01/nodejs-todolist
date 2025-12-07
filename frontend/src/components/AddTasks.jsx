import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddTasks = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input type="text" placeholder="Bạn muốn làm gì nào ?" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button type="submit">+ Thêm</Button>
      </form>
    </Card>
  );
};

export default AddTasks;
