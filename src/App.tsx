import { Component, createSignal, JSX, Show } from "solid-js";
import AddItemForm from "./components/AddItemForm";
import List from "./components/List";
import ShowInput from "./components/ShowInput";
import { ITodo } from "./types";

const App: Component = () => {
  const [todos, setTodos] = createSignal<Array<ITodo>>([]);

  const [hideDone, setHideDone] = createSignal<boolean>(false);

  const handleSubmit = (value: string) => {
    const [done, setDone] = createSignal(false);
    setTodos([...todos(), { id: todos().length + 1, value, done, setDone }]);
  };

  const onCheck = (id: number) => {
    const todo = todos().find((todo) => todo.id === id);
    if (todo) todo.setDone(!todo.done());
  };

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    setHideDone(event.currentTarget.checked);
  };

  const filteredTodos = () =>
    hideDone() ? [...todos()].filter((item) => !item.done()) : todos();

  return (
    <div class="mt-5 flex items-center h-screen flex-col">
      <div class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <AddItemForm handleSubmit={handleSubmit} />
        <Show when={todos().length}>
          <ShowInput
            onInput={onInput}
            filteredTodosLen={filteredTodos().length}
          />
        </Show>
        <List todos={filteredTodos()} onCheck={onCheck} />
      </div>
    </div>
  );
};

export default App;
