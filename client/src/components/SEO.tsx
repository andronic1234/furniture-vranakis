import { FC } from "react";
import { Helmet } from "react-helmet-async";

import type { ISEO } from "../interfaces/interfaces";

/**
 * This is a functional component that generates SEO meta tags for a webpage.
 * @param props - An object containing the properties passed to the component.
 * @returns The `SEO` component is being returned, which is a functional component that renders a
 * `Helmet` component from the `react-helmet-async` library. The `Helmet` component sets various meta
 * tags for search engine optimization (SEO) purposes, including the page title, description, and
 * Facebook tags. The values for these tags are passed as props to the `SEO` component.
 */

const SEO: FC<ISEO> = (props) => {
  const { title, description, type } = props;
  return (
    <Helmet>
      {/* Encoding */}
      <meta charSet="utf-8" />
      {/* Standard Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Facebook Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;
