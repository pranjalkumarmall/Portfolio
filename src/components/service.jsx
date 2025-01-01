import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i className="text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Web development creates dynamic, user-friendly websites with
              seamless functionality. It combines front-end design and back-end
              systems to deliver fast, scalable online experiences.
            </p>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className="text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Data Structure and Algorithm</h1>
            <p>
              Data structures and algorithms cover a wide range of topics,
              including Linked List, Binary Tree, Graph, Hash Table, Heap, Stack,
              Queue, Sorting Algorithms, Dynamic Programming, and Recursion.
              These concepts form the backbone of efficient computing, enabling
              optimized solutions for various problems.
            </p>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className="text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Backend development focuses on server-side logic, databases, and
              APIs to ensure robust, secure, and scalable web applications. It
              powers the functionality behind seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
