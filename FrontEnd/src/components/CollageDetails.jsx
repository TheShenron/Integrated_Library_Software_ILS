import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';


function CollageDetails({handleItem}) {
    return (
        <>

            <Heading size={['2xl', '3xl']}>Masai School</Heading>

            <Text color='gray.500' mt={['20px', '30px']}>5th Floor, SJR Primus, 20th Main Rd, next to Siddam Setty Complex, 5th Block, Koramangala, Bengaluru, Karnataka 560034</Text>

            <Flex mt={['40px', '50px']} gap={['10px', '20px']}>
                <Button onClick={()=>handleItem(1)}>Login</Button>
                <Button onClick={()=> handleItem(2)}>Signup</Button>
            </Flex>

        </>
    );
}

export default CollageDetails;