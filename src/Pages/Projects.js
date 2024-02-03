import React, { useEffect, useState } from "react";
import Aos from "aos";
import Loader from "../Components/Loader";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      delay: 50,
      duration: 1000,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Projects</h1>
        </div>
      )}
    </>
  );
};

export default Projects;
