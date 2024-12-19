"use client";
import { useState, useEffect } from "react";

export const DailyStreak = () => {
  const [completedDays, setCompletedDays] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    // Cargar los días completados desde localStorage o una API
    const storedDays = JSON.parse(localStorage.getItem("completedDays")) || [];
    setCompletedDays(storedDays);
  }, []);

  const markAsCompleted = (date) => {
    if (!completedDays.includes(date)) {
      const updatedDays = [...completedDays, date];
      setCompletedDays(updatedDays);
      localStorage.setItem("completedDays", JSON.stringify(updatedDays));
    }
  };

  const renderCalendar = () => {
    const daysInYear = Array.from({ length: 365 }, (_, index) => {
      const date = new Date(year, 0, index + 1);
      const formattedDate = date.toISOString().split("T")[0];
      return (
        <div
          key={formattedDate}
          onClick={() => markAsCompleted(formattedDate)}
          style={{
            width: "8px",
            height: "8px",
            margin: "1px",
            borderRadius: "20%",
            backgroundColor: completedDays.includes(formattedDate)
              ? "green"
              : "lightgray",
            cursor: "pointer",
          }}
        />
      );
    });
    return (
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {daysInYear}
      </div>
    );
  };

  return (
    <div>
      <h1>Streak Diario - {year}</h1>
      {renderCalendar()}
    </div>
  );
};
