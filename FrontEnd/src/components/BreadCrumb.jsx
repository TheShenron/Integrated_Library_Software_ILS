import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuList, Button, Box } from '@chakra-ui/react';
import React from 'react';
import {NavLink ,useLocation } from 'react-router-dom'



const Bcrumb = ({ paths }) => {

    const splitPath = paths.split('/')

    let pathArr = []
    let genURL = '/'

    for (let x = 1; x < splitPath.length; x++) {

        if (splitPath[x] === "") {
            pathArr.push(
                <BreadcrumbItem key={x+"crumb"}>
                    <BreadcrumbLink as={NavLink} to={genURL}>Home</BreadcrumbLink>
                </BreadcrumbItem>
            )
        } else if (x === splitPath.length - 1) {
            genURL += splitPath[x]
            pathArr.push(
                <BreadcrumbItem isCurrentPage key={x+"crumb"}> 
                    <BreadcrumbLink as={NavLink} to={genURL}> {splitPath[x].split("").map((el,ind)=> ind === 0 ? el.toUpperCase() : el).join("")} </BreadcrumbLink>
                </BreadcrumbItem>
            )

        } else {
            genURL += splitPath[x]
            pathArr.push(
                <BreadcrumbItem key={x+"crumb"}>
                    <BreadcrumbLink as={NavLink} to={genURL}> {splitPath[x].split("").map((el,ind)=> ind === 0 ? el.toUpperCase() : el).join("")} </BreadcrumbLink>
                </BreadcrumbItem>
            )
        }

    }


    return <>
        <Breadcrumb border='1px solid' borderColor='gray.100' w='min-content' p='5px 10px' background='white'>
            
            {pathArr}

        </Breadcrumb>
    </>
}



function BreadCrumb(props) {

    return (
        <Box position='fixed' bottom='20px' left='20px'>
            <Menu>
                <MenuButton as={Button} size={['sm' , 'md']}>
                    BreadCrumb
                </MenuButton>
                <MenuList p='10px' border='none' shadow='none' background='transparent'>
                    <Bcrumb paths={useLocation().pathname} />
                </MenuList>
            </Menu>
        </Box>
    );
}

export default BreadCrumb;