import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IButton } from "../interfaces/interfaces";

/**
 * This is a functional component that renders a button or a link based on the props passed to
 * it. You can set the content of the button using the `content` property,
 * and the size of the button using the `dimensions` property.
 * Additional styling can be added using the `styling` property.
 * @param props - An object containing the properties passed down to the Button component.
 * @returns The `Button` component is being returned.
 */
const Button: FC<IButton> = (props) => {
  const { content, dimensions, isLink, linkTo, onClick, styling } = props;

  const style = `w-${dimensions.width} h-${dimensions.height} flex items-center justify-center rounded text-primary bg-accent hover:bg-secondAccent hover:text-txtprimary transition-colors duration-300 ${styling}`;

  return isLink ? (
    <Link to={linkTo} className={style}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={style}>
      {content}
    </button>
  );
};

export default Button;
