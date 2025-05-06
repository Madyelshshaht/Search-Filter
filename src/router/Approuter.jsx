import React from 'react'
import App from '../App'
import { Route, Routes } from 'react-router-dom'
import Courses from '../Components/Courses'
import Home from '../pages/Home'

const Approuter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/courses' element={<Courses />} />
            </Routes>
        </>
    )
}

export default Approuter;