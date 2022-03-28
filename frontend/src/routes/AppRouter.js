import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
//Pages
import CadenceLabs from '../components/pages/CadenceLabs/CadenceLabs';


const AppRouter = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
            <Routes>
                <Route path="/" element={<CadenceLabs />} >
                    <Route path=":search" element={<CadenceLabs />} />
                </Route>
            </Routes>
        </>
    );
}

export default AppRouter;