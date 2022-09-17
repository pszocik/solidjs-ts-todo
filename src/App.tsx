import { Component, createSignal, JSX } from "solid-js";
import AddItemForm from "./components/AddItemForm";
import List from "./components/List";
import { ITodo } from "./types";

const App: Component = () => {
  const [todos, setTodos] = createSignal<Array<ITodo>>([]);

  const [hideDone, setHideDone] = createSignal<boolean>(false);

  const handleSubmit = (value: string) => {
    setTodos([...todos(), { id: todos().length + 1, value, done: false }]);
  };

  const onCheck = (id: number) => {
    const updatedTodos = [...todos()].map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    setHideDone(event.currentTarget.checked);
  };

  const filteredTodos = () => {
    if (hideDone()) {
      return [...todos()].filter((item) => !item.done);
    } else {
      return todos();
    }
  };

  return (
    <div class="mt-5 flex items-center h-screen flex-col">
      <div class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <AddItemForm handleSubmit={handleSubmit} />
        <List todos={filteredTodos()} onCheck={onCheck} />
        <div class="flex flex-row self gap-2 mt-10">
          <input type="checkbox" id="hide-done" onInput={onInput} />
          <label for="hide-done">Hide done</label>
        </div>
      </div>
    </div>
  );
};

export default App;
