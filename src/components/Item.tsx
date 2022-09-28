import { Component, Show } from "solid-js";
import { ITodo } from "../types";

interface Props {
  todo: ITodo;
  onCheck: (id: number) => void;
  showAll: () => boolean;
}

const Item: Component<Props> = (props) => {
  return (
    <Show when={props.showAll() || props.todo.done() === false}>
      <div class="flex flex-row gap-2">
        <input
          type="checkbox"
          checked={props.todo.done()}
          onChange={() => props.onCheck(props.todo.id)}
        />
        <p>{props.todo.value}</p>
      </div>
    </Show>
  );
};

export default Item;
