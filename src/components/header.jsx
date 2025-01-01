import {useState} from "react";
const Header = () => {
    const [brandName,setBrandname]=useState("Pranjal Kumar Mall");
   const[menulinks,setMenulinks] =useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"About",
            link:"/About",
            id:2,
        },
        {
            title:"Skills",
            link:"/Skills",
            id:3,
        },
        {
            title:"Portfolio",
            link:"/Portfolio",
            id:4,
        },
        {
            title:"Contact",
            link:"/Contact",
            id:5,
        },
    ]);
    const [actionButton, setActionButton] = useState({
        title: "Download CV",
        link: "/hire-me",
      });
    return (
    
      <>
        <div className="h-20 main flex justify-between items-center px-16 bg-gray-100">
          {/* Brand logo */}
          <div>
            <h1 className="text-2xl font-bold">{brandName}</h1>
          </div>
          {/* Menu links */}
          <div className="space-x-6">
          {menulinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}

          { /*  <a href="#" className="hover:text-orange-600">
              Home
            </a>
          <a href="#" className="hover:text-orange-600">
              About
            </a>
            <a href="#" className="hover:text-orange-600">
              Skills
            </a>
            <a href="#" className="hover:text-orange-600">
              Portfolio
            </a>
            <a href="#" className="hover:text-orange-600">
              Contact
            </a> */}
          </div>
          {/* Hire Me button */}
          <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
        </div>
      </>
    );
  };
  
  export default Header;
  