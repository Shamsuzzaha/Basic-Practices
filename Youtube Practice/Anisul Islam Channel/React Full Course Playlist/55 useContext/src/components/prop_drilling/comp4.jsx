import React, {useContext} from 'react';
import {userContext} from '../userContext.js';

const Comp4 = () => {
    const user = useContext(userContext)
    return (
        <div>
            components 4
            {user.id}
            {user.name}
        </div>
    );
};

export default Comp4;