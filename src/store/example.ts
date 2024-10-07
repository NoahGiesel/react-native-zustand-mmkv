import { create } from "zustand";

interface ExampleStore {
  count: number;
  setCount: (n: number) => void;
}

/* min 48: https://www.youtube.com/watch?v=ypCcLxqX314 */
const exampleStore = create<ExampleStore>((set) => ({
  count: 0,
  setCount: (count) => set(() => ({ count: count })),
}));

export { exampleStore };
