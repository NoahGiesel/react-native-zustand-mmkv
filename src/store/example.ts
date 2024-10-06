import { create } from "zustand";

interface ExampleStore {
  count: number;
  setCount: (n: number) => void;
}

const exampleStore = create<ExampleStore>((set) => ({
  count: 0,
  setCount: (count) => set(() => ({ count: count })),
}));

export { exampleStore };
