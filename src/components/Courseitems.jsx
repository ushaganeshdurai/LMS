import React from "react";
import "/src/App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Courseitems = ({ searchTerm }) => {
  const courses = [
    {
      id: 1,
      name: "Bootstrap",
      image: "https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg",
      description:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development",
      path: "/bootstrap",
    },
    {
      id: 2,
      name: "React js",
      image: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
      description: "This is a crash course on React fundamentals",
      path: "/react",
    },
    {
      id: 3,
      name: "HTML",
      image: "https://ik.imagekit.io/tpkbnlhpp/asset%202.png?updatedAt=1711195091595",
      description: "This is where you begin your journey in html",
      path: "/react",
    },
    {
      id: 4,
      name: "Angular js",
      image: "https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png",
      description: "Angular js lecture courses available",
      path: "/angular",
    },
    {
      id: 5,
      name: "Node js",
      image: "https://ik.imagekit.io/tpkbnlhpp/asset%203.jpeg?updatedAt=1711195091601",
      description: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more",
      path: "/node"
    },
    {
      id: 6,
      name: "Tailwind",
      image: "https://ik.imagekit.io/tpkbnlhpp/asset%204.png?updatedAt=1711195093750",
      description: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML",
      path: "/tailwind",
    }
  ];

  const filteredCourses = courses.filter((course) =>
  course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <div class="row m-3 row-cols-1 row-cols-md-3 g-4">
        {filteredCourses.map((course) => (
          <div key={course.id} class="col">
            <Link to={course.path}>
              <div class="card h-100">
                <img
                  src={course.image}
                  class="card-img-top w-100"
                  alt={course.name}
                />
                <div class="card-body">
                  <h5 class="card-title">{course.name}</h5>
                  <p class="card-text">{course.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courseitems;
