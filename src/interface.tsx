type FormEntryValue = null | FormDataEntryValue;

export interface Todo {
  id: string | FormEntryValue;
  title: string | FormEntryValue;
  describtion: string | FormEntryValue;
  complated: boolean | FormEntryValue;
  type: "easy" | "normal" | "hard" | FormEntryValue;
}
