import MyButton from "./components/Button";
import ShoppingList from "./components/ShoppingCart";
import { useState } from "react";
import "./styles/App.css";

const user = {
  name: "Dário",
  age: 25,
  email: "dario.c.alves@hotmail.com",
  imageSize: 90,
};

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("Clicou no botão");
  }
  return (
    <div>
      <h1>Bem vindos à minha aplicação</h1>
      <h2>{user.name}</h2>
      <p>
        1. Exercício para criação de um botão num componente, contagem com
        useState e uso de alertas:
      </p>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>

      <p>
        2. Exercício com condições compactadas e renderização de listas com o
        map para transformar o array de produtos num array de listas. Cada lista
        tem de ter uma key única, que neste caso é o id.
      </p>
      <ShoppingList></ShoppingList>
    </div>
  );
}
