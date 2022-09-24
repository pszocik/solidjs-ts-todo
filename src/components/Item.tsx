import { Component, Show } from "solid-js";
import { ITodo } from "../types";
import { Motion, Presence } from "@motionone/solid";

interface Props {
  todo: ITodo;
  onCheck: (id: number) => void;
  showAll: () => boolean;
}

const Item: Component<Props> = (props) => {
  return (
    <Presence exitBeforeEnter>
      <Show when={props.showAll() || props.todo.done() === false}>
        <Motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{
            x: 1000,
            transition: { duration: 0.5 },
          }}
          class="flex flex-row gap-2"
        >
          <input
            type="checkbox"
            checked={props.todo.done()}
            onChange={() => props.onCheck(props.todo.id)}
          />
          <p>{props.todo.value}</p>
        </Motion.div>
      </Show>
    </Presence>
  );
};

export default Item;
