type FormEntryValue = string | File;

export type Todo = {
  title: string;
  id: string | number;
  description: FormEntryValue;
  type: FormEntryValue;
  completed: boolean;
};
