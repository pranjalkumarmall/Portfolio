import bannerImage from "../assets/profilebanner.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "DSA Developer"], 
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="main-container flex items-center py-10 px-5"
    >
      {/* First Section */}
      <div className="w-full flex items-center justify-center text-white">
        <div className="w-2/3 space-y-4 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Pranjal Kumar Mall</h1>
          <h2 className="text-3xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p>
          I am passionate about problem-solving and thrive on creating efficient solutions.
           My expertise spans diverse algorithms and data structures, empowering me to tackle challenges with precision and innovation.
           I continuously seek to enhance my skills and contribute to meaningful projects.
          </p>

          <div className="icons-container flex space-x-5">
            <a  href="https://www.facebook.com/pranjal.mall.39/"   className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"  >
              <i className="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/pranjal.mall/" className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl fa-instagram"></i>
            </a>
            <a className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/impranjalmall/" className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className="text-2xl px-5 py-3 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex justify-center">
        {/* Image */}
        <img
          className="rounded-full my-2 shadow-lg"
          style={{
            width: "300px", 
            height: "300px", 
            objectFit: "cover", 
          }}
          src={bannerImage}
          alt="Profile Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
