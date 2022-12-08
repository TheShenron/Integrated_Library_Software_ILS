import { Button } from '@chakra-ui/react';
import React from 'react';

function Login({handleItem}) {

    return (
        <div>
            login
            <Button onClick={()=>handleItem(0)}>Back to home</Button>
        </div>
    );
}

export default Login;