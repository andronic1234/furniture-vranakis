import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

import type { ISEO } from "../interfaces/interfaces";

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
