import React from "react";

const Footer = () => {
  return (
    <div className="fixed h-8 bottom-0 px-2 py-1 flex items-center justify-center w-full text-xs text-gray-500 bg-white border-t border-gray-200">
      <span>
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/jatingupta09/"
          target="__blank"
          className="text-gray-700 hover:bg-red-500 hover:text-white font-medium"
        >
          Jatin Gupta
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/durgesh-gupta-130644288"
          target="__blank"
          className="text-gray-700 hover:bg-red-500 hover:text-white font-medium"
        >
          Durgesh Gupta
        </a>
        {" "} | Department of Computer Application Lab Code Editor. Feel free to code it.
      </span>
    </div>
  );
};

export default Footer;