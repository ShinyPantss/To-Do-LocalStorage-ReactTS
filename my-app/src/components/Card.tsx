import React from 'react'

    const Card: React.FC<{who:string,job:string,when:string,daysToComplete:number}> = (props) => {
  return (
    <div>
        <div className="bg-blue-400 mx-auto text-center p-3 m-5 border-blue-400">
            <div className="flex flex-col text-center p-4 gap-2">
              <h1>{props.who}</h1>
                <h1>{props.job}</h1>
                <h1>{props.when}</h1>
                <h1>{props.daysToComplete}</h1>
               </div>
               </div> 
    </div>
  )
}

export default Card