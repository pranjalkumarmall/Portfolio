import { useState } from "react";
import bannerImage from "../assets/dppp2.jpg";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Full-Stack Developer & Data Structures and Algorithms Enthusiast",
    desc1: `I am a passionate Full-Stack Developer with a strong foundation in Data Structures and Algorithms. My expertise lies in creating scalable, efficient, and user-friendly applications while solving complex computational problems.

I am dedicated to continuous learning and innovation, ensuring that I stay ahead in the ever-evolving tech landscape. With a focus on delivering quality solutions, I bring a blend of technical expertise and creativity to every project.`,
  });

  return (
    <div className="main-container bg-gray-100 border py-16">
      <h1 className="text-center pb-16 text-5xl underline font-bold">
        About Me
      </h1>

      <div className="flex items-center">
        {/* Image container */}
        <div className="w-full flex justify-center">
          <img
            className="w-64 h-64 object-cover rounded-full"
            src={data.image}
            alt="Pranjal Kumar Mall"
          />
        </div>

        {/* Text container */}
        <div className="w-full flex justify-center">
          <div className="space-y-5 w-2/3">
            <h1 className="text-5xl font-semibold">{data.title}</h1>
            <p>{data.desc1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
