import React from "react";
import Button from "./Button";
import Search from "./Search";
// To-Do input form which include ->(Who add, when added,whats job, remove button,)
function InputForm() {
  const addEventHandler = () => {};
  const resetEventHandler = () => {};
  return (
    <form action="">
      <div className="max-w-4xl mx-auto  ">
        <div className="flex flex-col m-12 bg-slate-600  p-20  pb-32 rounded-xl ">
          <div className="flex flex-col text-center p-4 gap-2">
            <label htmlFor="who">Who add</label>
            <input
              type="text"
              placeholder="Who add"
              className=" border-4 border-gray w-4/5 mx-auto  "
            />
          </div>
          <div className="flex flex-col text-center  p-4 gap-2 ">
            <label htmlFor="who"> What we are doing </label>
            <input
              type="text"
              placeholder="Write To-do"
              className=" border-4 border-gray w-4/5 mx-auto"
            />
          </div>
          <div className="flex flex-col text-center  p-4 gap-2">
            <label htmlFor="who">When Added</label>
            <input
              type="date"
              placeholder="Who add"
              className=" border-4 border-gray w-4/5 mx-auto"
            />
          </div>
          <div className="flex flex-col text-center p-4 gap-2">
            <label htmlFor="who">What is due date?</label>
            <input
              type="date"
              placeholder="Who add"
              className=" border-4 border-gray w-4/5 mx-auto"
            />
          </div>

          <div className=" flex justify-center gap-3 w-3/5 mx-auto mt-10 border-b-8 p-5">
            <div className="  flex-1">
              <Button type="Add" onClick={addEventHandler} />
            </div>
            <div className=" flex-1">
              <Button type="Reset" onClick={resetEventHandler} />
            </div>
          </div>

            <div>
                <Search />
            </div>
        </div>
      </div>
    </form>
  );
}

export default InputForm;
