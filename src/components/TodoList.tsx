import { useRecoilValue } from 'recoil'; 
import { filteredTodoListState } from '../recoil/atoms/todoListFilterState';
import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

export function TodoList(){
  const todoList = useRecoilValue(filteredTodoListState);  // recoil hook that we just want to read a state in recoil
  return(
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {
        todoList.map(item => (
          <TodoItem item={item} />
        ))
      }
    </>
  )
}