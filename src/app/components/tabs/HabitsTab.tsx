import { PlusCircle } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { CreateHabitForm } from "../forms/CreateHabitForm";
import { Modal } from "../ui/Modal";

export const HabitsTab = () => {
  const createHabitFormModal = useModal();
  // const { isOpen, openModal, closeModal, modalRef } = useModal();

  return (
    <>
      <section className="text-c-snow p-4 w-full h-full">
        <header className="flex items-center justify-between">
          <h3 className="text-md font-bold">Habits</h3>
          <button
            aria-label="Create Habit"
            onClick={createHabitFormModal.openModal}
          >
            <PlusCircle />
          </button>
        </header>
      </section>
      {/* Form to create habit */}
      {createHabitFormModal.isOpen && (
        <Modal
          onClose={createHabitFormModal.closeModal}
          modalRef={createHabitFormModal.modalRef}
          blur
          size="lg"
        >
          <CreateHabitForm />
        </Modal>
      )}
    </>
  );
};
