import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import Books from '../Pages/Books';
import Career from '../Pages/Career';
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';
import User from '../Pages/User';
import G1 from '../Pages/G1';

function AllRoute(props) {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/u'>
                <Route index element={<PageNotFound/>}/>
                <Route path='login' element={<Home item={1}/>}/>
                <Route path='signup' element={<Home item={2}/>}/>
            </Route>
            <Route path='/books'>
                <Route index element={<Books />} />
                <Route path='g' element={<G1 />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/career' element={<Career />} />
            <Route path='/user' element={<User />} />
            <Route path='*' element={<PageNotFound />} />

        </Routes>
    );
}

export default AllRoute;