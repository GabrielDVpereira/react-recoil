import { atom, selector } from 'recoil'

export interface Item {
  id:number; 
  text: string;  
  isComplete: boolean;
}
export const todoListState = atom({
  key: 'todoListState',
  default: [] as Item[]
});

export const todoListStatsState = selector({
  key: "todoListStasState", 
  get: ({get}) => {
    const todoList = get(todoListState); 
    const totalNum = todoList.length; 
    const totalCompletedNum = todoList.filter(item => item.isComplete).length; 
    const totalUncompletedNum = totalNum - totalCompletedNum; 
    const percentCompleted =  totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100; 

    return {
      totalNum, 
      totalCompletedNum, 
      totalUncompletedNum, 
      percentCompleted
    }
  }
})
