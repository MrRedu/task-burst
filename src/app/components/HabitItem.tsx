import { Check, User } from "lucide-react";
import { DailyStreak } from "./DailyStreak";
import { Card } from "./Card";

export const HabitItem = ({ title, description, completedDays, id }) => {
  return (
    <Card className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <User className="w-8 h-8 p-2 bg-gray-300/20 rounded-xl" />
        <div>
          <h4 className="font-semi-bold">{title}</h4>
          <p className="text-c-silver text-sm">{description}</p>
        </div>
        <button className="ml-auto">
          <Check className="w-8 h-8 p-2 bg-gray-300/20 rounded-xl" />
        </button>
      </header>
      <DailyStreak completedDays={completedDays} habitId={id} />
    </Card>
  );
};
