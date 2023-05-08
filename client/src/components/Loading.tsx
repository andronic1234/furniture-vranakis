import React from "react";

function Loading() {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-accent border-8 h-32 w-32"></div>
    </div>
  );
}

export default Loading;
