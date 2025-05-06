import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="overlay"></div>
                <div className="content">
                    <div className="top text-center py-5 ">
                        <h1 >Welcome to Our Courses Platform</h1>
                        <p>Explore a wide variety of high-quality online courses.</p>
                    </div>
                    <Link to="/courses" className='btn btn-outline-info d-flex justify-content-center align-items-center w-md-50 w-25 m-auto btn-courses py-2' >
                        Courses
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home