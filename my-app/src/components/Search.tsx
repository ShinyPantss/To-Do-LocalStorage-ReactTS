import React, { useState, useContext, useRef } from "react";
import { ContextToDo, ToDo } from "../store/Context";
import Button from "./Button";

function Search() {
  const [selectedOption, setSelectedOption] = useState<string>();

  const [filteredToDoList, setFilteredToDoList] = useState<ToDo[]>([]);
 
  const ctx = useContext(ContextToDo);
  const whoOrJob = useRef<HTMLInputElement>(null);
  const daysToComplete = useRef<HTMLInputElement>(null);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value);
    setSelectedOption(value);
  };

 

  console.log(whoOrJob.current?.value);
  const searchHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
     ctx.selectChange(selectedOption!, whoOrJob.current!.value);
    }
  
  return (
    <div className="text-center">
      <select
        className="bg-blue-400 mx-auto text-center p-3 m-5 border-blue-400"
        onChange={selectChange}
      >
        <option value="Select">Select</option>
        <option value="who">Who Add</option>
        <option value="job">What we are doing</option>

        <option value="daysToComplete">How many days to complete</option>
      </select>
      <div>
        {selectedOption === "who" || selectedOption === "job" ? (
          <input type="text" className="w-4/5 mb-5" ref={whoOrJob} />
        ) : null}

        {selectedOption === "daysToComplete" ? (
          <input type="number" className="w-4/5" ref={daysToComplete} />
        ) : null}
      </div>

      <div>
        <Button type="Search" buttonType="button" onClick={searchHandler} />
      </div>
    </div>
  );
}

export default Search;
