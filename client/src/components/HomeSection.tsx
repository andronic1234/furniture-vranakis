import React, { FC } from "react";

import type { IHomeSection } from "../interfaces/interfaces";

/**
 * The HomeSection function is a component that renders a section with an image and content, with
 * the option to choose the direction of the image.
 * @param props - An object containing the properties passed to the HomeSection component.
 * @returns The HomeSection component is being returned.
 * @todo Make this responsive on all screens
 */
const HomeSection: FC<IHomeSection> = (props) => {
  const { content, image, direction } = props;

  const imgElement = (
    <img
      src={image}
      className={`w-2/3 my-8 rounded-3xl ${direction ? "ml-8" : "mr-8"}`}
    ></img>
  );
  const contentElement = (
    <div
      className={`flex ${
        direction ? "items-end" : "items-start"
      } flex-col h-96 gap-4 w-full ${direction ? "mr-7" : "ml-7"}`}
    >
      <h1 className="text-6xl font-bold">{content.title}</h1>
      <p className="text-center">{content.paragraph}</p>
    </div>
  );

  return (
    <section className="bgSecondary flex">
      <div className="flex items-center justify-end gap-5 border m-5 rounded textPrimary">
        {direction ? imgElement : <></>}
        {contentElement}
        {direction ? <></> : imgElement}
      </div>
    </section>
  );
};

export default HomeSection;
