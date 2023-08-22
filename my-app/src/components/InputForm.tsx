import React,{useRef,useContext, useEffect} from "react";
import Button from "./Button";
import Search from "./Search";
import { ContextToDo } from "../store/Context";
// To-Do input form which include ->(Who add, when added,whats job, remove button,)

function InputForm() {
    const ctx = useContext(ContextToDo);
    
    const whoDid = useRef<HTMLInputElement>(null)
    const whatToDo = useRef<HTMLInputElement>(null)
    const whenAdd = useRef<HTMLInputElement>(null)
    const dayToComplete = useRef<HTMLInputElement>(null)

    const addSubmitHandler = (event: React.MouseEvent<HTMLButtonElement> )=>{
      event.preventDefault();
      ctx.addTodo({
        id: Math.random(),
        who: whoDid.current!.value,
        job: whatToDo.current!.value,
        when: whenAdd.current!.value,
        daysToComplete: +dayToComplete.current!.value,
      })
    }
   
 
  return (
    <form >
      <div className="max-w-4xl mx-auto  ">
        <div className="flex flex-col m-12 bg-slate-600  p-20  pb-32 rounded-xl ">
          <div className="flex flex-col text-center p-4 gap-2">
            <label htmlFor="who">Who add?</label>
            <input
              type="text"
              placeholder="Who add"
              className=" border-4 border-gray w-4/5 mx-auto"
              ref={whoDid}
            />
          </div>
          <div className="flex flex-col text-center  p-4 gap-2 ">
            <label htmlFor="who"> What we are doing? </label>
            <input
              type="text"
              placeholder="Write To-do"
              className=" border-4 border-gray w-4/5 mx-auto"
              ref={whatToDo}
            />
          </div>
          <div className="flex flex-col text-center  p-4 gap-2">
            <label htmlFor="who">When Added?</label>
            <input
              type="date"
              placeholder="Who add"
              className=" border-4 border-gray w-4/5 mx-auto"
              ref={whenAdd}
            />
          </div>
          <div className="flex flex-col text-center p-4 gap-2">
            <label htmlFor="who">How many days to complete</label>
            <input
              type="number"
              placeholder="Who add"
              className=" border-4 border-gray w-4/5 mx-auto"
              ref={dayToComplete}
            />
          </div>

          <div className=" flex justify-center gap-3 w-3/5 mx-auto mt-10 border-b-8 p-5">
            <div className="  flex-1">
              <Button type="Add" buttonType="submit" onClick={addSubmitHandler}/>
            </div>
            <div className=" flex-1">
              <Button type="Reset" buttonType="delete" />
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
