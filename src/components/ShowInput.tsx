import { Component, JSX } from "solid-js";

interface Props {
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
}

const ShowInput: Component<Props> = (props) => {
  const countText = (singular: string, len: number) =>
    len > 1 ? `${singular}s` : singular;

  return (
    <div class="flex flex-row self gap-2">
      <input type="checkbox" id="hide-done" onInput={props.onInput} />
      <label for="hide-done">Show all</label>
    </div>
  );
};

export default ShowInput;
