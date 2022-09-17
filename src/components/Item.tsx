import { Component } from "solid-js";
import { ITodo } from "../types";

interface Props {
  todo: ITodo;
  onCheck: (id: number) => void;
}

const Item: Component<Props> = (props) => {
  return (
    <div class="flex flex-row gap-2">
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={() => props.onCheck(props.todo.id)}
      />
      <p>{props.todo.value}</p>
    </div>
  );
};

export default Item;
