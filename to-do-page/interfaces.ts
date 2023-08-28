interface tasksFormat {
  title: string;
  description: string;
  completed: boolean;
}
interface displayContainer {
  [key: string]: boolean;
  containerCreate: boolean;
  containerModified: boolean;
}
export type { tasksFormat, displayContainer };
