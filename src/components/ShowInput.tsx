import { Component, JSX } from "solid-js";

interface Props {
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  filteredTodosLen: number;
}

const ShowInput: Component<Props> = (props) => {
  const countText = (singular: string, len: number) =>
    len > 1 ? `${singular}s` : singular;

  return (
    <div class="flex flex-row items-end justify-between">
      <div class="flex flex-row self gap-2">
        <input type="checkbox" id="hide-done" onInput={props.onInput} />
        <label for="hide-done">Hide done</label>
      </div>
      <p>
        Showing {props.filteredTodosLen}{" "}
        {countText("item", props.filteredTodosLen)}
      </p>
    </div>
  );
};

export default ShowInput;
