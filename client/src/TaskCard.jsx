import React from "react";
import { Bookmark } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";

export function TaskCard({
  status = "In Progress",
  count = 2,
  title = "Test Management App",
  description = "This is a task management app description to check the text width. we need more text",
  progress = 65,
  dueDate = "24th February",
}) {
  return (
    <Card className="w-full max-w-md border-none shadow-none p-2 bg-white rounded-[32px]">
      <CardHeader className="flex-row gap-3 space-y-0 pb-6">
        {/* Status Badge */}
        <Badge
          variant="secondary"
          className="bg-[#D1E4FF] text-[#1E3A8A] hover:bg-[#D1E4FF] border-none px-4 py-1 text-sm font-medium rounded-full"
        >
          {status}
        </Badge>

        {/* Count Badge */}
        <Badge className="bg-[#FFEDD5] text-[#431407] hover:bg-[#FFEDD5] border-none px-3 py-1 text-sm font-medium rounded-full flex items-center gap-1">
          <Bookmark size={14} fill="currentColor" />
          {count}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A]">
            {title}
          </h2>
          <p className="text-[#64748B] text-lg leading-snug">{description}</p>
        </div>

        {/* shadcn Progress component */}
        <Progress
          value={progress}
          className="h-1.5 bg-[#F1F5F9] [&>div]:bg-[#1E293B]"
        />
      </CardContent>

      <CardFooter className="flex justify-between items-end pt-2">
        <div className="space-y-0.5">
          <p className="text-[#94A3B8] text-sm font-medium">
            Est. completion date
          </p>
          <p className="text-[#1E293B] font-bold text-lg">{dueDate}</p>
        </div>

        {/* Avatar Stack */}
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#FFB366] border-[3px] border-white" />
          <div className="w-10 h-10 rounded-full bg-[#BEF264] border-[3px] border-white" />
          <div className="w-10 h-10 rounded-full bg-[#22C55E] border-[3px] border-white" />
        </div>
      </CardFooter>
    </Card>
  );
}
