//HomeSection Component
type homeContent = {
  title: string;
  paragraph: string;
};

export interface IHomeSection {
  content: homeContent;
  image: string;
  direction: boolean;
}

//Button Component
interface INotLink {
  isLink: false;
  linkTo?: string;
  styling?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  content: string;
  dimensions: {
    width: number;
    height: number;
  };
}
interface ILink {
  isLink: true;
  linkTo: string;
  styling?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  content: string;
  dimensions: {
    width: number;
    height: number;
  };
}
export type IButton = ILink | INotLink;

//ContactForm Component
type selectObj = {
  [key: string]: {
    placeholder?: string;
    options: string[];
  };
};

type inputs = {
  [key: string]: {
    value: string;
    required?: boolean;
  };
};

export interface IContactForm {
  inputs: inputs;
  selects?: selectObj;
  textarea?: boolean;
  setAlert: React.Dispatch<React.SetStateAction<object>>;
}

//ContactInfo Component
interface contactTextItems {
  message: string;
  svgElement: React.ReactNode;
}

interface contactLinkItems extends contactTextItems {
  link: string;
}

type contactText = {
  [key: string]: {
    title: string;
    items: Array<contactTextItems>;
  };
};

type contactLinks = {
  [key: string]: {
    title: string;
    items: Array<contactLinkItems>;
  };
};

export interface IContactInfo {
  text: contactText;
  links: contactLinks;
}

//KitchenCard Component
export interface IKitchenCard {
  title: string;
  description: string;
  images: string[];
}

//InfoCircle Component
export interface IInfoCircle {
  title: string;
  description: string;
  image: string;
}

//NavLink Component
export interface INavLink {
  PATH: string;
  Name: string;
}

//SEO Component
export interface ISEO {
  title: string;
  description: string;
  type: string;
}

//Alert Component
type Alerts = {
  [key: string]: {
    message: string;
    state: boolean;
  };
};

export interface IAlert {
  alerts: Alerts;
  clearAlert: React.Dispatch<React.SetStateAction<object>>;
}
