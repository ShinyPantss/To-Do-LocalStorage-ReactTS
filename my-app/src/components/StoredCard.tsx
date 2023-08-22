import React, { useContext, useEffect, useState } from 'react';
import { ContextToDo, ToDo } from '../store/Context'; // Make sure to import the correct path and types
import Card from './Card';

function StoredCard() {
  const ctx = useContext(ContextToDo);

  return (
    <div className='max-w-3xl bg-slate-400 mx-auto p-5'> 
      {ctx.filteredList.map((item) => (
        <Card key={item.id} who={item.who} job={item.job} when={item.when} daysToComplete={item.daysToComplete} />
      ))}
    </div>
  );
}

export default StoredCard;
