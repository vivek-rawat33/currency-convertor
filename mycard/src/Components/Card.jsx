import React from "react";

function Card({ username, email, id }) {
  return (
    
    <>
      <div
        className="bg-slate-600 p-4 rounded-lg flex shadow-lg hover:bg-gray-400 transition 
        duration-500 ease-in-out md:h-110 md:w-70 md:flex-col md:items-center md:justify-center my-4 w-120 md:overflow-hidden md:p-0 md: mx-10"
      >
        <div className="md:w-full md:h-full">
          <img
            className="mr-4 h-30 rounded-full
              md:rounded-sm   md:h-full md:w-full  "
            src="mypic.jpg"
            alt=""
          />
        </div>
        <div className="text-sky-900 font-bold text-base text-center flex flex-col justify-center  w-80 bg-gray-400 p-4 rounded-lg md:rounded-sm md:my-5 md:w-30 md:px-3 ">
          <p>
            Hello my name is{" : "}
            <span className="bg-slate-500 p-[3px] rounded-2xl">{username}</span>
          </p>
          <p>My Mail is : {email}</p>
          <p>My ID is : {id}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
