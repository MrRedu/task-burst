'use client'

import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { CreateHabitForm } from '@/components/forms/CreateHabitForm'
import { HabitItem } from '@/components/HabitItem'
import { Modal } from '@/components/ui/Modal'
import { useModal } from '@/hooks/useModal'
import { useHabits } from '@/stores/habits/habits.store'
import { type HabitType } from '@/types/Habits.type'

export interface HabitFormInputs {
  title: string
  description?: string
}

export const HabitsTab = () => {
  const createHabitFormModal = useModal()
  // const { isOpen, openModal, closeModal, modalRef } = useModal();

  const habits = useHabits(state => state.habits)
  const addHabit = useHabits(state => state.addHabit)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HabitFormInputs>()

  const onSubmit = handleSubmit(data => {
    addHabit({
      id: globalThis.crypto.randomUUID(),
      title: data.title,
      description: data?.description,
      completedDays: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    } as HabitType)
    createHabitFormModal.closeModal()
    reset()
  })

  return (
    <>
      <section className="flex h-full w-full flex-col gap-4 p-4 text-c-snow">
        <header className="flex items-center justify-between">
          <h3 className="text-md font-bold">Habits</h3>
          <button
            aria-label="Create Habit"
            onClick={createHabitFormModal.openModal}
          >
            <PlusCircle />
          </button>
        </header>
        <div className="flex h-full w-full flex-col gap-4 overflow-auto pr-2">
          {habits &&
            habits?.map(habit => (
              <HabitItem
                key={habit.id}
                title={habit.title}
                description={habit?.description}
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
  )
}
