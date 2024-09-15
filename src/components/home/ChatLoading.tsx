import Image from "next/image";
import React from "react";
// import { FaLock } from "react-icons/fa";

function LoadingScreen() {
  return (
    <div className="flex flex-col justify-center items-center bg-panel-header-background w-screen h-screen">
      {/* WhatsApp Icon */}
      <span className="text-[#3d464a] text-6xl my-12 ">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />{" "}
      </span>

      {/* Loading bar and text */}
      <div className="flex flex-col justify-evenly items-center h-[150px]">
        {/* Loading bar */}
        {/* <ProgressBar
          variant="success"
          now={progress}
          className="bg-[#243138] rounded-md w-[320px]"
        /> */}

        {/* Text section */}
        <div className="flex flex-col items-center">
          {/* WhatsApp name */}
          <h1 className="text-[#c1c6c9] text-lg font-medium">WhatsApp</h1>

          {/* Text */}
          <div className="flex items-center text-[#687782]">
            {/* Lock */}
            <span className="text-sm text-center mr-3">{/* <FaLock /> */}</span>

            {/* Text */}
            <p>End-to-end encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
