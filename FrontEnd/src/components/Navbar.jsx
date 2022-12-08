import React from 'react';
import { Avatar, Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import Drower from './Drower';

function Navbar(props) {
    return (
        <Box shadow='sm'>

            <Flex alignItems='center' gap='2' py={['10px', '13px', '15px']} w={['90%', '95%']} m='auto'>

                <Box>
                    <Heading size='md' display={['none', 'block']}>Library Management System</Heading>
                    <Heading size='md' display={['block', 'none']}>Lib_System</Heading>
                </Box>

                <Spacer />

                <Flex alignItems='center' gap={['20px', '30px']} fontWeight='bold' pr={['0px','0xp', '5px', '20px']} display={['none', 'none', 'flex']}>

                    <Link as={NavLink} to='/' _activeLink={{ color: "red", textDecoration: 'none' }}>Home</Link>
                    <Link as={NavLink} to='/books' _activeLink={{ color: "red", textDecoration: 'none' }}>Books</Link>
                    <Link as={NavLink} to='/about' _activeLink={{ color: "red", textDecoration: 'none' }}>About</Link>
                    <Link as={NavLink} to='/career' _activeLink={{ color: "red", textDecoration: 'none' }}>Career</Link>

                    <Link as={NavLink} to='/user' style={{ textDecoration: 'none' }}>
                        <Avatar src='#' name='Goku' size='md' bg='gray.100'> </Avatar>
                    </Link>

                </Flex>


                <Drower />


            </Flex>

        </Box>
    );
}

export default Navbar;