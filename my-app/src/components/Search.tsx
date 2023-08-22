import React, { useState } from "react";

function Search() {
  const [selectedOption, setSelectedOption] = useState<string>();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value)
    setSelectedOption(value);
  };

  return (
  
      <div className="text-center">
        <select className="bg-blue-400 mx-auto text-center p-3 m-5 border-blue-400" onChange={selectChange}>
          <option value="add">Who Add</option>
          <option value="job">What we are doing</option>
          <option value="when">When Added</option>
          <option value="due">What is due date?</option>
        </select>
      </div>
    
    
  );
}

export default Search;
