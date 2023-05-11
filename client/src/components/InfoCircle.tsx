import React, { FC } from "react";
import { IInfoCircle } from "../interfaces/interfaces";

/**
 * This is a functional component that renders an circular image with a title and description, under it.
 * @param props - The properties `title`, `description`, and `image` need to be provided, which are destructured
 * from the props object using object destructuring syntax.
 * @returns The InfoCircle component is being returned, which is a section element containing an image,
 * a title, and a description. The values for these elements are passed as props to the component.
 */
const InfoCircle: FC<IInfoCircle> = (props) => {
  const { title, description, image } = props;

  return (
    <section className="flex items-center justify-center flex-col py-5 my-14 bgPrimary">
      <img src={image} className="rounded-full w-48 h-48" />

      <h1 className="text-3xl text-accent my-2">{title}</h1>
      <h4 className="textPrimary">{description}</h4>
    </section>
  );
};

export default InfoCircle;
