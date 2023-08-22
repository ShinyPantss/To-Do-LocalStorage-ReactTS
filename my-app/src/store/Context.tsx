import React, { PropsWithChildren, useEffect, useState } from "react";

export type ToDo = {
  id: number;
  who: string;
  job: string;
  when: string;
  daysToComplete: number;
};

type ContextTypeObj = {
  toDoList: ToDo[];
  addTodo: (todo: ToDo) => void;
  resetTodo: () => void;
  removeTodo: (todoId: number) => void;
  selectChange?: (selectedOption: string, input: string) => void;
};

export const ContextToDo = React.createContext<ContextTypeObj>({
  toDoList: [],
  addTodo: (todo: ToDo) => {},
  resetTodo: () => {},
  removeTodo: (todoId: number) => {},
  selectChange: (selectedOption?: string, input?: string) => {},
});

const myItems = JSON.parse(localStorage.getItem("storedInfos") || "[]");

const ContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [storedInfos, setStoredInfos] = useState<ToDo[]>(myItems);
  const [filteredToDoList, setFilteredToDoList] = useState<ToDo[]>([]);

  const addTodoHandler = (object: ToDo) => {
    setStoredInfos((prev) => {
      return [...prev, object];
    });
  };

  const searchHandler = (selectedOption: string, input: string) => {
    if (input === undefined) return;

    if (selectedOption === "who") {
      const filteredData = storedInfos.filter((data) =>
        data.who.includes(input)
      );
      setFilteredToDoList(filteredData);
      console.log(filteredData);
    }
  };

  localStorage.setItem("storedInfos", JSON.stringify(storedInfos));

  const contextValues: ContextTypeObj = {
    toDoList: storedInfos,
    addTodo: addTodoHandler,
    resetTodo: () => {},
    removeTodo: (todoId: number) => {},
    selectChange: searchHandler,
  };

  return (
    <ContextToDo.Provider value={contextValues}>
      {props.children}
    </ContextToDo.Provider>
  );
};

export default ContextProvider;
