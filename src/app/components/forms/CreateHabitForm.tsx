import { Input } from "../ui/forms/Input";
import { Button } from "../Button";

// Hacerle una interface a los formularios #TODO
interface CreateHabitFormProps {
  register: any;
  errors: any;
  onSubmit: any;
}

export const CreateHabitForm = ({
  register,
  errors,
  onSubmit,
}: CreateHabitFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        label="Title"
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters",
          },
          maxLength: {
            value: 20,
            message: "Title must be at most 20 characters",
          },
        })}
        error={errors?.title}
        spellCheck={false}
      />
      <Input {...register("description")} error={errors?.description} />
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </form>
  );
};
