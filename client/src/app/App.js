import React, { useEffect, useState } from 'react';

// import './App.css'
import { Users } from '../../users'
import Table from '../Table/Table';

const App = () => {
    const [query, setQuery] = useState("");
    // const updateDebounceText =(t, foo) =>{
    //     foo(() => {
    //         setQuery(t);
    //     }, 500)
    // };
    const updateDebounceText = debounce(text => {
        setQuery(text);
    }, 500);
    function debounce(cd, delay) {
        let timer;
        return (...arg) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                cd(arg);
            }, delay)
        }
    }
    
    // useEffect(()=>{
    //     const searchFun = () => Users.filter(user => user.first_name.toLowerCase().includes(query));
    // },[query]);
    return (
        <div className='app'>
            <input type='text' placeholder='Search...' className='search' onChange={e => updateDebounceText(e.target.value)} />
            <Table data={Users.filter(user => user.first_name.toLowerCase().includes(query))} />
        </div>
    )
}

export default App;