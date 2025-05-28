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
import LightDarkToggle from "./Practice/StatePractice/LightDarkToggle";
import Quiz from "./Practice/StatePractice/Quiz";
import TextCounter from "./Practice/StatePractice/TextCounter";
import Greeting from "./Practice/PropsPractice/Greeting";
import ProfileCard from "./Practice/PropsPractice/ProfileCard";
import Button from "./Practice/PropsPractice/Button";
import Message from "./Practice/PropsPractice/Message";
import Product from "./Practice/PropsPractice/Product";

const messages = [
  {
    imgLink:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    msg: "hello world",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    msg: "Hi Rahul, I hope this msg finds you well...",
  },

  {
    imgLink:
      "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    msg: "Hi Ankit, I hope this msg finds you well...",
  },
  {
    imgLink:
      "https://plus.unsplash.com/premium_photo-1708110770188-3e4216b93119?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    msg: "Hi Ramjan, I hope this msg finds you well...",
  },
];
const products = [
  {
    imgLink:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    imgAlt: "wiredHeadphone",
    title: "Wired Headphone",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quas totam aliquid cum ad at corrupti, .",
    price: "$650",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    imgAlt: "LipsTick",
    title: "LipsTick",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quas totam aliquid cum ad at corrupti, .",
    price: "$150",
  },

  {
    imgLink:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    imgAlt: "SunGlases",
    title: "SunGlases",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quas totam aliquid cum ad at corrupti, .",
    price: "$253",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    imgAlt: "Nike Shoe",
    title: "Nike Shoe",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quas totam aliquid cum ad at corrupti, .",
    price: "$2053",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    imgAlt: "Nike Shoe",
    title: "Nike Shoe",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quas totam aliquid cum ad at corrupti, .",
    price: "$2053",
  },
];

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
      <hr />
      Qno 8. <h2>Light/Dark Mode Toggle</h2> Use a toggle button to switch the
      theme of a box or whole component between light and dark.
      <LightDarkToggle />
      <hr />
      Qno 9. <h2>Simple Quiz (Single Question)</h2> Show one question with
      options. Store the selected option using useState Show a message like
      “Correct!” or “Try Again”
      <Quiz />
      <hr />
      Qno 10. <h2>Character Counter</h2> Make a textarea that shows a live count
      of the number of characters typed.
      <TextCounter />
      <h2
        style={{
          text: "bold",
          color: "darkblue",
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "20px",
        }}
      >
        🎉 Congratulations on successfully completing all{" "}
        <span style={{ color: "green", fontSize: "34px" }}>
          10 React useState practice questions!
        </span>{" "}
        You've taken a solid step toward mastering state management in React.
        Your dedication and hands-on approach show real progress. Keep building,
        keep exploring — this foundation will empower you to create amazing
        interactive web apps. Great job, coder! 🚀
      </h2>
      <h2>Now lets Begin</h2>
      <h1>Props practice Question And Answer</h1>
      Qno 1. <h2>Greeting Component</h2> Create a Greeting component that takes
      a name prop and displays: Hello,...!
      <Greeting name="Giyas" age="34" />
      <Greeting name="Rahul" age="32" />
      <hr />
      Qno 2. <h2>Profile Card</h2> Build a ProfileCard component that takes
      props like: name age imageUrl Display a styled card with that information.
      <ProfileCard
        imgUrl="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        imgAlt="ProfileImage"
        name="Mrs Angelina Joley"
        age="24"
      />
      <ProfileCard
        imgUrl="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        imgAlt="ProfileImage"
        name="MD Giyas uddin ahmed"
        age="34"
      />
      <hr />
      Qno 3. <h2>Button with Custom Text</h2> Create a CustomButton component
      that takes a label prop. When clicked, it logs the label to the console.
      <Button label="Hello Coders" />
      <hr />
      Qno 4. <h2>Message List</h2> Make a Message component that displays a
      message text passed via props. Render it multiple times in a parent with
      different messages.
      {messages.map((msg, ind) => {
        return <Message key={ind} msgText={msg.msg} imgLink={msg.imgLink} />;
      })}
      <hr />
      Qno 5. <h2>Product Display</h2> Create a Product component that takes:
      title price description Display them nicely styled. Try passing different
      products from a parent.
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((pro, ind) => {
          return (
            <Product
              key={ind}
              imgUrl={pro.imgLink}
              imgAlt={pro.imgAlt}
              title={pro.title}
              des={pro.description}
              price={pro.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
