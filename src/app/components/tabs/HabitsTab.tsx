"use client";
import { PlusCircle } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { CreateHabitForm } from "../forms/CreateHabitForm";
import { Modal } from "../ui/Modal";
import { useForm } from "react-hook-form";
import { useHabits } from "../../stores/habits/habits.store";
import { type HabitType } from "../../types/Habits.type";
import { HabitItem } from "../HabitItem";

export const HabitsTab = () => {
  const createHabitFormModal = useModal();
  // const { isOpen, openModal, closeModal, modalRef } = useModal();

  const habits = useHabits((state) => state.habits);
  const addHabit = useHabits((state) => state.addHabit);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    addHabit({
      id: self.crypto.randomUUID(),
      title: data.title,
      description: data?.description,
      completedDays: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    } as HabitType);
    createHabitFormModal.closeModal();
    reset();
  });

  return (
    <>
      <section
        className="text-c-snow p-4 w-full h-full
      flex flex-col gap-4"
      >
        <header className="flex items-center justify-between">
          <h3 className="text-md font-bold">Habits</h3>
          <button
            aria-label="Create Habit"
            onClick={createHabitFormModal.openModal}
          >
            <PlusCircle />
          </button>
        </header>
        <div className="flex flex-col gap-4 w-full h-full overflow-auto pr-2">
          {habits &&
            habits?.map((habit) => (
              <HabitItem
                key={habit.id}
                title={habit.title}
                description={habit.description}
                completedDays={habit.completedDays}
                id={habit.id}
              />
            ))}
        </div>
      </section>
      {/* Form to create habit */}
      {createHabitFormModal.isOpen && (
        <Modal
          onClose={createHabitFormModal.closeModal}
          modalRef={createHabitFormModal.modalRef}
          blur
          size="lg"
        >
          <CreateHabitForm
            register={register}
            errors={errors}
            onSubmit={onSubmit}
          />
        </Modal>
      )}
    </>
  );
};
