import { Component, For } from "solid-js";
import { ITodo } from "../types";
import Item from "./Item";

interface Props {
  todos: Array<ITodo>;
  onCheck: (id: number) => void;
  showAll: () => boolean;
}

const List: Component<Props> = (props) => {
  return (
    <div class="mt-5 flex flex-col">
      <For each={props.todos}>
        {(todo) => (
          <Item todo={todo} onCheck={props.onCheck} showAll={props.showAll} />
        )}
      </For>
    </div>
  );
};

export default List;
