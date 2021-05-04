import { atom, selector} from 'recoil'; 
import { todoListState } from './todoListState';

 export const todoListFilterState = atom({
   key:'todoListFilterState', 
   default: 'Show All'
 }); 

 export const filteredTodoListState = selector({
   key: "filteredTodoState", 
   get: ({get}) => {
     const filter = get(todoListFilterState); 
     const list = get(todoListState); 

     switch(filter){
      case 'Show Comleted': 
        return list.filter(item => item.isComplete); 
      case 'Show Uncompleted': 
        return list.filter(item => !item.isComplete); 
      default:
        return list; 
       
     }
   }
 }) 