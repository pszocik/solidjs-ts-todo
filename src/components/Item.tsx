import { Component } from "solid-js";
import { ITodo } from "../types";
import { Motion } from "@motionone/solid";

interface Props {
  todo: ITodo;
  onCheck: (id: number) => void;
}

const Item: Component<Props> = (props) => {
  const todoStyle = () => ({
    "text-decoration": props.todo.done() ? "line-through" : "none",
  });

  return (
    <Motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      class="flex flex-row gap-2"
    >
      <input
        type="checkbox"
        checked={props.todo.done()}
        onChange={() => props.onCheck(props.todo.id)}
      />
      <p style={todoStyle()}>{props.todo.value}</p>
    </Motion.div>
  );
};

export default Item;
