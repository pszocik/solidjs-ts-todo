import { Component, JSX } from "solid-js";

interface Props {
  handleSubmit: (value: string) => void;
}

const AddItemForm: Component<Props> = (props) => {
  let item: HTMLInputElement | undefined;

  const onSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (event) => {
    event.preventDefault();
    if (item) {
      props.handleSubmit(item.value);
      item.value = "";
    }
  };

  return (
    <form onSubmit={onSubmit} class="">
      <input class="py-1" type="text" ref={item} placeholder="Name..." />
      <button
        class="py-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4"
        type="submit"
      >
        Add item
      </button>
    </form>
  );
};

export default AddItemForm;
