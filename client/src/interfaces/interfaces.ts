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
  label: string;
  images: string[];
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
