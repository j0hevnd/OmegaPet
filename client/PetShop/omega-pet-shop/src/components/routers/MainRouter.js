import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //
import Footer from '../Footer';
import HeaderNav from '../HeaderNav';
import MainPage from '../Index';
import Login from '../Login';
import Register from '../Register';
import Weus from '../Weus';

const MainRouter = () => {
    return (
        <BrowserRouter>
            {/* Header y nav */}
            <HeaderNav />

            {/*Contenido principal*/}
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/us' element={<Weus />} />
            </Routes>

            {/* Footer */}
            <Footer />
            {/* Fin Footer */}

        </BrowserRouter>
    );
};

export default MainRouter;
