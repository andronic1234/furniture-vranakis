import React from "react";

/**
 * The function returns a loading spinner component with specific styling.
 * @returns A functional component that renders a spinning loading animation in the center of the
 * screen.
 */
function Loading() {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-accent border-8 h-32 w-32"></div>
    </div>
  );
}

export default Loading;
