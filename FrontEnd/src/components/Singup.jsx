import { Button } from '@chakra-ui/react';
import React from 'react';

function Singup({handleItem}) {
    return (
        <div>
            signup
            <Button onClick={()=>handleItem(0)}>Back to home</Button>
        </div>
    );
}

export default Singup;