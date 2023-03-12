import logo from "./logo.svg";
import "./App.css";
import { MyButton } from "./components/Mybutton";
import { Counter } from "./components/Counter";
import "./style.css";
import { Movies } from "./components/Movies";
import { InputItem } from "./components/InputItem";
import { useState } from "react";

const buttonLabels = ["hey", "hoy", "hallo", "dag"];

const App = () => {
  const [text, setText] = useState();
  return (
    <div>
      <h1 className="title" style={{ fontSize: 100, color: "black" }}>
        Hello
      </h1>
      <InputItem setText={setText} text={text} />
      {buttonLabels.map((label) => {
        return <MyButton label={label} heyLabel={text} setText={setText} />;
      })}
      <Counter />
      <Movies />
    </div>
  );
};

export default App;
