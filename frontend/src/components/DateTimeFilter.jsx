import React from "react";
import { Button } from "./ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const DateTimeFilter = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="flex items-center gap-2">
      <Button variant={"outline"} className={cn("w-60 justify-start text-left font-normal bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white/80", !date && "text-muted-foreground")}>
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? dayjs(date).format("DD/MM/YYYY") : <span>Pick a date</span>}
      </Button>
    </div>
  );
};

export default DateTimeFilter;
