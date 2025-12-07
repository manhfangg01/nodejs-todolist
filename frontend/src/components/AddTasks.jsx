import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddTasks = () => {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input type="text" placeholder="Bạn muốn làm gì nào ?" />
        <Button>+ Thêm</Button>
      </div>
    </Card>
  );
};

export default AddTasks;
