import { Avatar, Link, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Text, useDisclosure, Box } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Drower(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div>
            <Avatar display={['block', 'block', 'none', 'none']} src='#' onClick={onOpen} name='Goku' size='md' bg='gray.100'> </Avatar>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex alignItems='center' gap={['10px']}>
                            <Avatar src='#' onClick={onOpen} name='Goku' size='md' bg='gray.100'> </Avatar>
                            <Text>Gourav</Text>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody p='0'>

                        <Flex flexDirection='column'>
                            <Link _activeLink={{color:"red"}} as={NavLink} onClick={onClose} to='/'><Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Home </Box> </Link> 
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/books' > <Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Books </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/about' > <Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  About </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/career' > <Box borderTop='1px solid' borderColor="gray.100" p='15px 30px'>  Career </Box> </Link>
                            <Link as={NavLink} _activeLink={{color:"red"}} onClick={onClose} to='/user' > <Box border='1px solid' borderColor='gray.100' p='15px 30px'>  User </Box> </Link>
                        </Flex>

                    </DrawerBody>

                    <DrawerFooter>
                        <Text fontWeight='bold'>Library Management</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default Drower;