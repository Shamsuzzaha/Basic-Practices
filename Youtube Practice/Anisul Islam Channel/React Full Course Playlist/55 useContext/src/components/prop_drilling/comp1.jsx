import React, {useState} from 'react';
import Comp2 from "./comp2.jsx";
import {userContext} from '../userContext.js';

const Comp1 = () => {
   const [user, setUser] = useState({id:101, name:"Shamsuzzaha"});
    return (
        <userContext.Provider value={user}>
            comp1
            <p>{user.id}</p>
            <Comp2/>
        </userContext.Provider>
    );
};

export default Comp1;
