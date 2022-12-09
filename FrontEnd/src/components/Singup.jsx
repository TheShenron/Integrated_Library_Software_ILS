import { Button, Flex, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import { Link} from 'react-router-dom'
import React from 'react';

function Singup() {
    return (
        <>
            <Flex flexDirection='column' w={['90%' , '80%']} textAlign='start' gap={['10px']}>
            <Text fontSize={['3xl']} textAlign='center' display={['none' , 'block']} fontWeight='500'> Welcome to SignUp</Text>
            <Text fontSize={['3xl']} textAlign='center' display={['block' , 'none']} fontWeight='500'> SignUp</Text>
            <FormControl isRequired>
                <FormLabel>Student ID</FormLabel>
                <Input type='email' borderColor='blue' _hover={{borderColor:'blue'}} />
                <FormHelperText>We'll never share your Student ID.</FormHelperText>
            </FormControl>

            {/* <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' borderColor='black' _hover={{ borderColor: 'black' }} placeholder='Enter Your new Password'/>
            </FormControl> */}

            <Flex gap={['10px']} mt={['10px']}>
                <Button as={Link} to='/' colorScheme='blackAlpha' size={['sm' , 'md']}>Back</Button>
                <Button colorScheme='linkedin' size={['sm' , 'md']}>Next</Button>
            </Flex>

            {/* <Flex width='100%' mt={['20px' , '50px']}>
                <Button width='100%' maxW='380px' m='auto'>Login with Google</Button>
            </Flex> */}
        </Flex>
        </>
    );
}

export default Singup;