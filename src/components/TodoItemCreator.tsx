import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListState";

export function TodoItemCreator(){
  const [inputValue, setInputValue] = useState(''); 
  const setTodoList = useSetRecoilState(todoListState);  // this is a way of setting a state using recoil

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList, 
      {
        id: Math.random(), 
        text: inputValue, 
        isComplete: false
      }
    ])
  }; 

  return (
    <div>
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>Add</button>
    </div>
  )

}