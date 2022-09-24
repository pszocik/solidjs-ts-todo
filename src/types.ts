export interface ITodo {
  id: number;
  value: string;
  done: () => boolean;
  setDone: (val: boolean) => {};
}
