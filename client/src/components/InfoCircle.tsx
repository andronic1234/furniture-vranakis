import React, { FC } from "react";
import { IInfoCircle } from "../interfaces/interfaces";

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
