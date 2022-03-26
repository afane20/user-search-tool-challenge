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
                <Route exact path="/" element={<CadenceLabs />} />
            </Routes>
        </>
    );
}

export default AppRouter;