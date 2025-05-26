import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Test/Test";
import Counter from "./Practice/StatePractice/Counter";
import Toggle from "./Practice/StatePractice/Toggle";
import TextInput from "./Practice/StatePractice/TextInput";
import ChangeBg from "./Practice/StatePractice/ChangeBg";
import TodoList from "./Practice/StatePractice/TodoList";
import LikeButton from "./Practice/StatePractice/LikeButton";
import TogglePasword from "./Practice/StatePractice/TogglePasword";

function App() {
  return (
    <>
      <h1>I am App .jsx</h1>
      {/* <Test /> */}
      Qno 1. <h2>Counter App</h2> Create a simple counter with: A number
      displayed + and - buttons to increment/decrement the count A Reset button
      to set the count back to 0
      <Counter />
      <hr />
      Qno 2. <h2>Toggle Visibility</h2> Build a component that shows/hides a
      paragraph when a button is clicked. Button text should toggle between
      “Show” and “Hide”
      <Toggle />
      <hr />
      Qno 3. <h2>Text Input Binding</h2> Create a form with a text input.
      Display the text below the input in real time Add a clear button that
      resets the input
      <TextInput />
      <hr />
      Qno 4. <h2>Change Background Color</h2> Create a few buttons like "Red",
      "Green", "Blue" Clicking a button changes the background color of a box
      <ChangeBg />
      <hr />
      Qno 5. <h2>Simple Todo List</h2> Build a todo app with: Input field to add
      a task Button to add the task List of tasks displayed below Optional: Add
      a delete button for each task
      <TodoList />
      Qno 6. <h2>Like Button</h2> Make a Like button that toggles between "Liked
      ❤️" and "Like 🤍" using state.
      <LikeButton />
      <hr />
      Qno 7. <h2>Show Password Toggle</h2> Create an input field of type
      password. Add a checkbox or button to toggle visibility (change type to
      text)
      <TogglePasword />
    </>
  );
}

export default App;
