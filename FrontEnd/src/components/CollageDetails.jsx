import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link} from 'react-router-dom'

function CollageDetails({handleItem}) {
    return (
        <>

            <Heading size={['3xl', '3xl']} textShadow='1px 1px pink'> Masai School</Heading>

            <Text mt={['10px','20px', '30px']}>5th Floor, SJR Primus, 20th Main Rd, next to Siddam Setty Complex, 5th Block, Koramangala, Bengaluru, Karnataka 560034</Text>

            <Flex mt={['40px', '50px']} gap={['10px', '20px']}>
                <Button as={Link} to='/u/login' size={['md','lg']} colorScheme='blue' >Login</Button>
                <Button as={Link} to='/u/signup' size={['md','lg']} colorScheme='pink'>Signup</Button>
            </Flex>

        </>
    );
}

export default CollageDetails;