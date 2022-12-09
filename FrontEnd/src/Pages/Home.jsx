import { Flex } from '@chakra-ui/react';
import React from 'react';
import coverimg from '../img/coverimg.jpeg'
import Login from '../components/Login';
import Singup from '../components/Singup';
import CollageDetails from '../components/CollageDetails';

function Home({item = 0}) {

    let itemList = [
        <CollageDetails />,
        <Login  />,
        <Singup />]

    return (
        <Flex width='100%' height='100vh' backgroundImage={coverimg} justifyContent='center' alignItems='center'>

            <Flex
                background='rgba(255,255,255,.8)'
                width={['95%', '500px', '650px', '700px']}
                height={['55%', '400px', '450px']}
                borderRadius='5px'
                mt={['0px','30px']}
                flexDirection='column'
                textAlign='center'
                justifyContent='center'
                alignItems='center'
                p={['20px','30px','50px']}
            >

                {itemList[item]}

            </Flex>

        </Flex>
    );
}

export default Home;