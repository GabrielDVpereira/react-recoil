import { ChangeEvent } from 'react'
import { useRecoilState } from "recoil";
import { Item, todoListState } from "../recoil/atoms/todoListState";

interface TodoItemProps {
  item: Item
}

export function TodoItem({ item } :TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState); // when we want to get the state and a method to set values to it
  const index = todoList.findIndex(listItem => listItem === item); 

  const editItemText = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item, 
      text: value
    });
    setTodoList(newList); 
  }; 

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item, 
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index); 
    setTodoList(newList); 
  }

  return(
    <div>
      <input type="text" value={item.text} onChange={editItemText}/>
      <input 
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

function replaceItemAtIndex(arr: Item[], index: number, newValue: Item){
  return [...arr.slice(0, index), newValue, ...arr.slice(index+1)]; 
}

function removeItemAtIndex(arr: Item[], index: number){
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}