import React, { useState } from "react";
import "./Courses.css";

import { IoMdSearch } from "react-icons/io";

const Courses = () => {
    const Courses = [
        {
            id: 1,
            name: "React for Beginners",
            desc: "Learn the basics of React including components, props, and hooks.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
            type: "Frontend",
            price: "20",
        },
        {
            id: 2,
            name: "Advanced Vue.js",
            desc: "Dive into Vue 3 composition API and Vue Router.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExunAqhxmfg796XH0iQ4PfqL06pWZZkgFyg&s",
            type: "Frontend",
            price: "20",
        },
        {
            id: 3,
            name: "Node.js Essentials",
            desc: "Build backend services using Node.js and Express.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQsBxR2eqTbxgqPC_Fv7jEij81XV2vHLpyQ&s",
            type: "Backend",
            price: "60",
        },
        {
            id: 4,
            name: "TypeScript Crash Course",
            desc: "Add static types to your JavaScript with TypeScript.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_979C0CYjHp3QH53N8pLqEI2Ku6g5fLTwA&s",
            type: "Language",
            price: "23",
        },
        {
            id: 5,
            name: "CSS Grid & Flexbox",
            desc: "Master modern CSS layout techniques.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s",
            type: "Frontend",
            price: "30",
        },
        {
            id: 6,
            name: "MongoDB Basics",
            desc: "Learn how to store and query data using MongoDB.",
            img: "https://www.svgrepo.com/show/331488/mongodb.svg",
            type: "Database",
            price: "50",
        },
        {
            id: 7,
            name: "REST APIs with Express",
            desc: "Create RESTful APIs with Express.js framework.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s",
            type: "Backend",
            price: "40",
        },
        {
            id: 8,
            name: "Tailwind CSS Mastery",
            desc: "Style your apps rapidly with utility-first Tailwind CSS.",
            img: "https://www.svgrepo.com/show/374118/tailwind.svg",
            type: "Frontend",
            price: "50",
        },
        {
            id: 9,
            name: "JWT Authentication",
            desc: "Secure your app with JSON Web Tokens (JWT).",
            img: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
            type: "Security",
            price: "30",
        },
        {
            id: 10,
            name: "React Query & TanStack",
            desc: "Manage server state like a pro with TanStack Query.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLwA5E3EdH8WO5MjMN4MTp5PEE6SacERvnQ&s",
            type: "Frontend",
            price: "25",
        },
        {
            id: 11,
            name: "Docker for Developers",
            desc: "Containerize your apps and run them anywhere with Docker.",
            img: "https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png",
            type: "DevOps",
            price: "55",
        },
        {
            id: 12,
            name: "GraphQL Fundamentals",
            desc: "Query your APIs in style using GraphQL and Apollo Client.",
            img: "data:image/jpeg;base64,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",
            type: "Backend",
            price: "45",
        },
        {
            id: 13,
            name: "Next.js Complete Guide",
            desc: "Build production-ready React apps with Next.js and SSR.",
            img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
            type: "Frontend",
            price: "60",
        },
        {
            id: 14,
            name: "Git & GitHub Mastery",
            desc: "Master version control and team collaboration using Git.",
            img: "https://www.svgrepo.com/show/439171/github.svg",
            type: "Tools",
            price: "20",
        },
        {
            id: 15,
            name: "SQL for Data Analysis",
            desc: "Use SQL to extract and analyze data from databases.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Fx-7SheKaSyij3Ykw4fh4w3tvTDSLRWlw&s",
            type: "Database",
            price: "35",
        },
        {
            id: 16,
            name: "Advanced JavaScript Patterns",
            desc: "Improve your JavaScript code with modern design patterns.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9W_ZoKrXymhaGRx0Wq1URlskW6FlR3XERQ&s",
            type: "Language",
            price: "40",
        },
        {
            id: 17,
            name: "Firebase for Web Apps",
            desc: "Add real-time database and authentication using Firebase.",
            img: "https://www.svgrepo.com/show/353735/firebase.svg",
            type: "Backend",
            price: "38",
        },
        {
            id: 18,
            name: "SASS & SCSS Deep Dive",
            desc: "Write better, reusable CSS with SASS and SCSS.",
            img: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
            type: "Frontend",
            price: "28",
        },
        {
            id: 19,
            name: "Clean Code in JavaScript",
            desc: "Write maintainable and readable JavaScript code.",
            img: "https://img.icons8.com/?size=512&id=108784&format=png",
            type: "Language",
            price: "32",
        },
        {
            id: 20,
            name: "Intro to Cybersecurity",
            desc: "Learn the basics of ethical hacking and securing apps.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIgZ3-9apF2CTf91pLjs6k5om_0nKqF_gYg&s",
            type: "Security",
            price: "70",
        },
    ];

    const [search, setsearch] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);

    const [isFocused, setIsFocused] = useState(false);

    const uniqueTypes = ["All", ...new Set(Courses.map((course) => course.type))];

    const filterCourses = Courses.filter((course) => {
        const matchName = course.name.toLowerCase().includes(search.toLowerCase());
        const matchType = selectedType === "All" || course.type === selectedType;

        const numericPrice = Number(course.price);
        const matchPrice =
            (minPrice === 0 || numericPrice >= minPrice) &&
            (maxPrice === 0 || numericPrice <= maxPrice);
        return matchName && matchType && matchPrice;
    });

    return (
        <>
            <div className="coursesUp ">
                <div className="top mb-5 pt-3">
                    <h1 className="text-center">Courses</h1>
                    <h4 className="text-center text-black-50">Search & Filter Courses</h4>
                </div>

                {/* Search Filter */}
                <div className="selectany d-flex  justify-content-center align-items-center px-5  my-1 position-relative">
                    <div className="d-flex search-icon align-items-center gap-1">

                        <span className=""
                            style={{ display: isFocused ? "none" : "block" }}>
                            <IoMdSearch />
                        </span>
                        <span className="search-text" style={{ display: isFocused ? "none" : "block" }}>Search</span>
                    </div>

                    <div className="search  w-100 d-flex justify-content-center align-items-start flex-column  ">
                        <label htmlFor="Search text-start">Search: </label>
                        <input
                            type="text"
                            // placeholder="    Search"
                            className="Search border rounded-1  w-100 p-1"
                            id="Search"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setsearch(e.target.value)}
                        />
                    </div>
                </div>

                {/*  Category and Price Filter */}
                <div className="selectany d-flex flex-md-row flex-column justify-content- align-items-center  gap-md-5 gap-3 px-5  my-3">
                    <div className="select  w-100 d-flex  justify-content-center align-items-start flex-column ">
                        <label htmlFor="type">Filter by Category: </label>
                        <select
                            id="type"
                            className="form-select w-100 border rounded-1"
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            {uniqueTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-100 d-flex justify-content-center align-items-start flex-column  ">
                        <label>Min Price:</label>
                        <input
                            type="number"
                            className="p-1 w-100 border rounded-1"
                            placeholder="Enter price"
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            min={0}
                        />
                    </div>

                    <div className=" w-100 d-flex justify-content-center align-items-start flex-column  ">
                        <label>Max Price:</label>
                        <input
                            type="number"
                            className="p-1 w-100 border rounded-1"
                            placeholder="Enter price"
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            min={0}
                        />
                    </div>
                </div>

                {/* Course Cards */}
                <div className="courses container">
                    <div className="row">
                        {filterCourses.length > 0 ? (
                            filterCourses.map((course) => (
                                <div
                                    className="card-box col-lg-4 col-md-6 col-sm-12 mt-4  "
                                    key={course.id}
                                >
                                    <div className="card pt-4 ">
                                        <img
                                            src={course.img}
                                            alt={course.name}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h3 className="card-title">{course.name}</h3>
                                            <h6>{course.type}</h6>
                                            <p className="card-text">{course.desc}</p>
                                            <h5 className="card-text">price: {course.price}$</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No courses found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
