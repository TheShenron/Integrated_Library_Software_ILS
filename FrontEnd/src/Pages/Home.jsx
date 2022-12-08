import { Flex } from '@chakra-ui/react';
import React from 'react';
import coverIMG from '../img/coverIMG.png'
import Login from '../components/Login';
import Singup from '../components/Singup';
import CollageDetails from '../components/CollageDetails';
import { useState } from 'react';


function Home(props) {

    const [Itemindex, setItemIndex] = useState(0)

    const handleItem = (ind) => {
        setItemIndex(ind)
    }

    let itemList = [
        <CollageDetails handleItem={handleItem} />,
        <Login handleItem={handleItem} />,
        <Singup handleItem={handleItem} />]

    return (
        <Flex width='100%' height='100vh' backgroundImage={coverIMG} justifyContent='center' alignItems='center'>

            <Flex
                background='white'
                width={['95%', '500px', '650px', '700px']}
                height={['60%', '450px', '450px', '500px']}
                borderRadius='5px'
                mt={['30px']}
                flexDirection='column'
                textAlign='center'
                justifyContent='center'
                alignItems='center'
                p={['20px','30px','50px']}
            >

                {itemList[Itemindex]}

            </Flex>

        </Flex>
    );
}

export default Home;