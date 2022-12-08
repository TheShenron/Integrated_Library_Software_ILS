import React from 'react';
import { Outlet} from 'react-router-dom'

function Books(props) {
    return (
        <div>
            Books!!
            <Outlet />
        </div>
    );
}

export default Books;