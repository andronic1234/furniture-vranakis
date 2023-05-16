import { FC } from "react";

import type { IContactInfo } from "../interfaces/interfaces";

/** This code defines a functional component called `ContactInfo` that takes in props of type
 * `IContactInfo`. The component then destructures the `text` and `links` properties from the props
 * object. The text property contains contact information, while the links property contains social media links.
 */
const ContactInfo: FC<IContactInfo> = (props) => {
  const { text, links } = props;

  const contactText = Object.keys(text).map((item, i) => (
    <div key={i}>
      <h1 className="mb-5 sm:text-2xl text-xl">{text[item].title}</h1>

      {/*Maps through all items of current text object*/}

      {text[item].items.map((item, i) => (
        <div className="flex gap-4 mb-1" key={i}>
          {item.svgElement}
          <p className="sm:text-lg text-base">{item.message}</p>
        </div>
      ))}
    </div>
  ));

  const contactLinks = Object.keys(links).map((item, i) => (
    <div key={i}>
      <h1 className="mt-3 mb-5 sm:text-2xl text-xl">{links[item].title}</h1>

      {/*Maps through all items of current link object*/}

      {links[item].items.map((item, i) => (
        <div className="group w-min" key={i}>
          <a className="flex gap-4 mb-4" href={item.link} target="_blank">
            <div className="bg-accent group-hover:border-2 border-black rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-secondAccent transition-colors duration-500">
              {item.svgElement}
            </div>
            <p className="sm:text-lg text-base underline">{item.message}</p>
          </a>
        </div>
      ))}
    </div>
  ));
  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4">
        {contactText}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4">
        {contactLinks}
      </div>
    </section>
  );
};

export default ContactInfo;
