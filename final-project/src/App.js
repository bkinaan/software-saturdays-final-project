import PokeList from './components/PokeList';
import Team from './components/Team';
import React, { useState } from 'react';
import './index.css';
function App() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const addToList = (name) => {
    setList([...list, name]);
  }

  const removeFromList = (name) => {
    setList(list.filter(item => item !== name));
    setCount(count - 1);
  }

  const updateCount = (count) => {
    setCount(count);
  }

  const updateList = (list) => {
    setList(list);
  }
  
  return (
    <>
    <div
      style={{
        backgroundColor: "#52A4B1",
        height: "100vh",
        width: "100vw",
      }}
    >
    <div className='box-border p-20 bg-pokemon-landscape bg-center'>
      <h1 className='flex justify-center font-bold text-9xl text-title'>Pokemon Database</h1>
    </div>
    <div className='bg-gradient-to-br from-light-light-green to-blue'>
    <Team count={count} list={list} removeFromList={removeFromList} updateCount={updateCount} updateList={updateList}/>
    <PokeList count={count} list={list} addToList={addToList} />
    <div
        className='text-right pr-4 pb-4'
      >Source Code on <a className='underline' href='https://github.com/bkinaan/software-saturdays-final-project'>GitHub</a></div>
    </div>
    </div>
    
    </>
  );
}

export default App;
