import React from 'react';
import { Avatar, Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import Drower from './Drower';
import favicon from '../img/favicon.png'

function Navbar(props) {
    return (
        <Box shadow='sm' position='fixed' width='100%' backgroundColor='white'>

            <Flex alignItems='center' gap='2' py={['10px', '13px', '15px']} w='95%' m='auto' >

                <Flex alignItems='center' gap={'10px'}>
                    <Avatar src={favicon} size='md'> </Avatar>
                    <Heading size='md' display={['none', 'block']}> Library Management System</Heading>
                    <Heading size='md' display={['block', 'none']}>Library Manager</Heading>
                </Flex>

                <Spacer />

                <Flex alignItems='center' gap={['20px', '30px']} fontWeight='bold' pr={['0px','0xp', '5px', '20px']} display={['none', 'none', 'flex']}>

                    <Link as={NavLink} to='/' _activeLink={{ color: "red", textDecoration: 'none' }}>Home</Link>
                    <Link as={NavLink} to='/books' _activeLink={{ color: "red", textDecoration: 'none' }}>Books</Link>
                    <Link as={NavLink} to='/about' _activeLink={{ color: "red", textDecoration: 'none' }}>About</Link>
                    <Link as={NavLink} to='/career' _activeLink={{ color: "red", textDecoration: 'none' }}>Career</Link>

                    <Link as={NavLink} to='/user' style={{ textDecoration: 'none' }}>
                        <Avatar src='#' size='md' bg='gray.200'> </Avatar>
                    </Link>

                </Flex>


                <Drower />


            </Flex>

        </Box>
    );
}

export default Navbar;