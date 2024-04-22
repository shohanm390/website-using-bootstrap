import React from "react";
import me from "@/Images/me.png"
import Image from "next/image";
const Hero = () => {
  return (
    <div className="gap-5 d-flex flex-md-row flex-col justify-content-center align-items-center px-5">
      <div>
        <h1 className="fs-1 mb-3">Nice To Meet You!</h1>
        <h1 className="mb-4">
          I am <span className="fw-bolder shohan">shohan</span>
        </h1>
        <p className="w-50 fs-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          odit neque veniam ea vero minus iure quos voluptatem? Provident,
          fugit.
        </p>
        <button className="mt-4 btn-outline-info btn">
            Contact me
        </button>
      </div>
        <div>
            <Image className="" width={550} height={700} src={me} style={{objectFit:"cover"}}></Image>
        </div>
    </div>
  );
};

export default Hero;
