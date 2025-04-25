import React, { useState } from "react";

import "./App.css"
function App() {

  const Courses = [
    {
      id: 1,
      name: "React for Beginners",
      desc: "Learn the basics of React including components, props, and hooks.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
      type: "Frontend"
    },
    {
      id: 2,
      name: "Advanced Vue.js",
      desc: "Dive into Vue 3 composition API and Vue Router.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExunAqhxmfg796XH0iQ4PfqL06pWZZkgFyg&s",
      type: "Frontend"
    },
    {
      id: 3,
      name: "Node.js Essentials",
      desc: "Build backend services using Node.js and Express.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQsBxR2eqTbxgqPC_Fv7jEij81XV2vHLpyQ&s",
      type: "Backend"
    },
    {
      id: 4,
      name: "TypeScript Crash Course",
      desc: "Add static types to your JavaScript with TypeScript.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_979C0CYjHp3QH53N8pLqEI2Ku6g5fLTwA&s",
      type: "Language"
    },
    {
      id: 5,
      name: "CSS Grid & Flexbox",
      desc: "Master modern CSS layout techniques.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s",
      type: "Frontend"
    },
    {
      id: 6,
      name: "MongoDB Basics",
      desc: "Learn how to store and query data using MongoDB.",
      img: "https://www.svgrepo.com/show/331488/mongodb.svg",
      type: "Database"
    },
    {
      id: 7,
      name: "REST APIs with Express",
      desc: "Create RESTful APIs with Express.js framework.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s",
      type: "Backend"
    },
    {
      id: 8,
      name: "Tailwind CSS Mastery",
      desc: "Style your apps rapidly with utility-first Tailwind CSS.",
      img: "https://www.svgrepo.com/show/374118/tailwind.svg",
      type: "Frontend"
    },
    {
      id: 9,
      name: "JWT Authentication",
      desc: "Secure your app with JSON Web Tokens (JWT).",
      img: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png",
      type: "Security"
    },
    {
      id: 10,
      name: "React Query & TanStack",
      desc: "Manage server state like a pro with TanStack Query.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLwA5E3EdH8WO5MjMN4MTp5PEE6SacERvnQ&s",
      type: "Frontend"
    }
  ];

  const [search, setsearch] = useState("")
  const [selectedType, setSelectedType] = useState("All");

  const uniqueTypes = ["All", ...new Set(Courses.map((course) => course.type))];



  const filterCourses = Courses.filter((course) => {
    const matchName = course.name.toLowerCase().includes(search.toLowerCase());
    const matchType = selectedType === "All" || course.type === selectedType;
    return matchName && matchType;
  }
  );

  return (
    <>
      <h1 className='text-center'>Search & Filter Courses</h1>

      <div className="selectany d-flex flex-md-row flex-column justify-content-center align-items-center ">

        <div className="search w-md-50 w-100 d-flex justify-content-center align-items-center flex-column  ">
          <label for="Search">Search: </label>
          <input type="text" placeholder="Search" className="border rounded-1 w-75 p-1" id="Search" onChange={((e) => setsearch(e.target.value))} />
        </div>

        <div className="select w-md-50 w-100 d-flex m-auto justify-content-center align-items-center flex-column ">
          <label htmlFor="type">Filter by Type: </label>
          <select
            id="type"
            className="form-select w-75 border rounded-1"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>



      {/* Course Cards */}
      <div className="container">
        <div className="row">
          {filterCourses.length > 0 ? (
            filterCourses.map((course) => (
              <div
                className="card-box col-lg-4 col-md-6 col-sm-12 mt-4"
                key={course.id}
              >
                <div className="card pt-4">
                  <img
                    src={course.img}
                    alt={course.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{course.name}</h3>
                    <h6>{course.type}</h6>
                    <p className="card-text">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No courses found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
