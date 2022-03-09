import React, {useEffect, useState, lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../components/Header"
import HomePage from '../pages/HomePage';

//import { store } from '../store/store'


const AppRoutes = () => {
    
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes