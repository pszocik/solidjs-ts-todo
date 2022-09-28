import autoAnimate from "@formkit/auto-animate";
import { Component, For, onMount, Ref } from "solid-js";
import { ITodo } from "../types";
import Item from "./Item";

interface Props {
  todos: Array<ITodo>;
  onCheck: (id: number) => void;
  showAll: () => boolean;
}

const List: Component<Props> = (props) => {
  let itemsDivRef: HTMLDivElement | undefined;
  onMount(() => {
    autoAnimate(itemsDivRef!);
  });

  return (
    <div class="mt-5 flex flex-col" ref={itemsDivRef}>
      <For each={props.todos}>
        {(todo) => (
          <Item todo={todo} onCheck={props.onCheck} showAll={props.showAll} />
        )}
      </For>
    </div>
  );
};

export default List;
