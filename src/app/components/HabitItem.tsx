import { Check, User } from "lucide-react";
import { DailyStreak } from "./DailyStreak";

export const HabitItem = ({ title, description, completedDays, id }) => {
  return (
    <section className="flex flex-col gap-2 p-2 border border-c-silver rounded-lg">
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
    </section>
  );
};
