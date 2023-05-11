import React, { FC, useState } from "react";

import { validateEmail, validatePhone } from "../utils";

import type { IContactForm } from "../interfaces/interfaces";
import Button from "./Button";

/** This is a functional component that renders a contact form. It takes in props of
 * type `IContactForm` which includes inputs, selects, textarea, and setAlert. It uses the `useState`
 * hook to manage the state of the input values, select values, textarea value, error state, and phone
 * error state. It also includes functions to handle input change, select change, and textarea change.
 * The component maps through the inputs and selects to render the appropriate form elements and
 * includes validation for email and phone inputs. Finally, it includes a submit handler that sends the
 * form data to an API endpoint and displays an alert message based on the response.
 */
const ContactForm: FC<IContactForm> = (props) => {
  const { inputs, selects, textarea, setAlert } = props;
  const [inputValues, setInputValues] = useState({});
  const [selectsValues, setSelectsValues] = useState({});
  const [textareaValues, setTextareaValues] = useState("");
  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    {
      /*Email validation event*/
    }
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setError(true);
      } else {
        setError(false);
      }
    }
    if (e.target.name === "phone") {
      if (!validatePhone(e.target.value)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }
  };
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectsValues({ ...selectsValues, [e.target.name]: e.target.value });
  };
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(e.target.value);
  };
  {
    /*Maps through string array of inputs*/
  }
  const formInputs = Object.keys(inputs).map((item, i) => (
    <div key={i}>
      <input
        className="w-full h-9 border-2 text-black placeholder:p-3 placeholder:text-accent placeholder:opacity-80 placeholder:font-semibold border-borderOutline"
        placeholder={inputs[item].value}
        required={inputs[item].required || false}
        name={item}
        onChange={onInputChange}
      ></input>
      {/* If email validation fails show this element */}
      {item === "email" ? (
        error ? (
          <h2 className="text-danger">{"Το email δεν είναι έγκυρο."}</h2>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {item === "phone" ? (
        phoneError ? (
          <h2 className="text-danger">{"Ο αριθμός δεν είναι έγκυρος."}</h2>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  ));
  let formSelects;
  {
    /*If selects is not undefined map it*/
  }
  if (typeof selects !== "undefined") {
    formSelects = Object.keys(selects).map((item, i) => (
      <select
        defaultValue="default"
        className="h-9 border-2 placeholder:font-semibold border-borderOutline text-accent bg-white font-semibold"
        key={i}
        name={item}
        onChange={onSelectChange}
      >
        {/*If there is a placeholder (disabled select  as default value, use it)*/}
        {typeof selects[item].placeholder !== "undefined" ? (
          <option className="text-accent" disabled={true} value="default">
            {selects[item].placeholder}
          </option>
        ) : (
          <></>
        )}
        {/*Maps through options*/}
        {selects[item].options.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    ));
  }
  let textArea;
  if (textarea) {
    textArea = (
      <textarea
        className="max-h-36 text-txtprimary placeholder:text-accent placeholder:p-2 placeholder:font-semibold placeholder:opacity-80 border-2 border-borderOutline"
        placeholder="Επιπλέον πληροφορίες"
        onChange={onTextareaChange}
      ></textarea>
    );
  }

  const FinalInfo = {
    formInputs: inputValues,
    formSelects: typeof selects !== "undefined" ? selectsValues : undefined,
    textArea: textarea ? textareaValues : undefined,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) {
      return setAlert({
        alert: {
          message: "Σφάλμα. Το email δεν είναι έγκυρο.",
          state: false,
        },
      });
    }
    if (phoneError) {
      return setAlert({
        alert: {
          message: "Σφάλμα. Ο αριθμός δεν είναι έγκυρος.",
          state: false,
        },
      });
    }
    (e.target as HTMLFormElement).reset();
    await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FinalInfo),
    }).then((response) => {
      if (response.ok) {
        return setAlert({
          alert: { message: "Η φόρμα στάλθηκε επιτυχώς.", state: true },
        });
      } else {
        return setAlert({
          alert: {
            message: "Σφάλμα. Προέκυψε πρόβλημα στην αποστολή.",
            state: false,
          },
        });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 sm:w-[45vw] w-[82vw]"
    >
      {formInputs}
      {typeof formSelects === "undefined" ? <></> : formSelects}
      {typeof textArea === "undefined" ? <></> : textArea}
      <Button
        content="Αποστολή"
        isLink={false}
        dimensions={{ width: 28, height: 8 }}
      />
    </form>
  );
};

export default ContactForm;
