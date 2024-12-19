"use client";

import { useHabits } from "../stores/habits/habits.store";
export const DailyStreak = ({ completedDays, habitId }) => {
  const year = new Date().getFullYear();
  const completeHabitDay = useHabits((state) => state.completeHabitDay); // Obtener la función del store

  const markAsCompleted = (date) => {
    completeHabitDay(habitId, date); // Llamar a la función para completar el día
  };

  const renderCalendar = () => {
    const daysInYear = Array.from({ length: 365 }, (_, index) => {
      const date = new Date(year, 0, index + 1);
      const formattedDate = date.toISOString().split("T")[0];
      return (
        <div
          key={formattedDate}
          onClick={() => markAsCompleted(formattedDate)} // Permitir marcar como completado
          className={`relative w-[8px] h-[8px] m-[1px] rounded-[20%] bg-[lightgray] cursor-pointer ${
            completedDays?.includes(formattedDate) && "bg-green-500"
          }`}
        />
      );
    });

    return <div className="flex flex-wrap w-full">{daysInYear}</div>;
  };

  return (
    <div className="relative overflow-auto h-[86px] w-full">
      {renderCalendar()}
    </div>
  );
};
