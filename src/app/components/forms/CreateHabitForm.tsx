// import { FieldError, UseFormRegister } from 'react-hook-form'

import { Button } from '../Button'
import { HabitFormInputs } from '../tabs/HabitsTab'
import { Input } from '../ui/forms/Input'

interface Props {
  // register: UseFormRegister<HabitFormInputs>
  // errors: Record<keyof HabitFormInputs, FieldError | undefined>
  register: any
  errors: any
  onSubmit: () => void
}

export const CreateHabitForm = ({ register, errors, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        label="Title"
        {...register('title', {
          required: 'Title is required',
          minLength: {
            value: 3,
            message: 'Title must be at least 3 characters',
          },
          maxLength: {
            value: 20,
            message: 'Title must be at most 20 characters',
          },
        })}
        error={errors?.title}
        spellCheck={false}
      />
      <Input {...register('description')} error={errors?.description} />
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </form>
  )
}
