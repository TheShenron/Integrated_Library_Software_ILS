import { Button, Flex, FormControl, FormLabel, Icon, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
// import jwtDecode from 'jwt-decode'
import axios from 'axios'

function Login() {

    const loginWithGoogle = useGoogleLogin({
        onSuccess: async tokenResponse => {

            try {
                const getdata = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                })
                console.log(getdata)
            } catch (error) {
                console.log(error)
            }


        }
    });

    return (
        <Flex flexDirection='column' w={['90%', '80%']} textAlign='start' gap={['10px']}>
            <Text fontSize={['3xl']} textAlign='center' display={['none', 'block']} fontWeight='500'> Welcome to Login</Text>
            <Text fontSize={['3xl']} textAlign='center' display={['block', 'none']} fontWeight='500'> Login</Text>
            <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type='email' borderColor='blue' _hover={{borderColor:'blue'}}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' borderColor='blue' _hover={{borderColor:'blue'}} />
            </FormControl>


            <Flex gap={['10px']} mt={['10px']}>
                <Button as={Link} to='/' colorScheme='blackAlpha' size={['sm', 'md']}>Back</Button>
                <Button colorScheme='linkedin' size={['sm', 'md']}>Next</Button>

            </Flex>

            <Button size={['md', 'lg']} mt={['15px']} bg='white' _hover='white' onClick={() => loginWithGoogle()}> Continue with  <Icon as={FcGoogle} fontSize='xl' mx={['5px']} /> </Button>

        </Flex>
    );
}

export default Login;