import React, { PropsWithChildren } from "react";

const  Button: React.FC<{type:string, onClick:()=> void}> = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-extrabold  rounded w-full py-4 px-10  text-xl font-mono ">
        {props.type}
      </button>
    </div>
  );
}

export default Button;
