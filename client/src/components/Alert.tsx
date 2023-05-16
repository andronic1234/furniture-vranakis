import { FC } from "react";

import type { IAlert } from "../interfaces/interfaces";

import ClearIcon from "@mui/icons-material/Clear";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ErrorIcon from "@mui/icons-material/Error";

/**
 * This is a component that displays alerts with icons and messages, and allows the user to clear
 * them.
 * @param props - The `props` parameter in this code is an object that contains the properties passed
 * down to the `Alert` component from its parent component. These properties include `alerts` and
 * `clearAlert`, which are destructured from the `props` object in the first line of the component
 * function.
 * @returns The `Alert` component is being returned, which is a functional component that takes in
 * props of type `IAlert`. It maps over the `alerts` object in the props and generates a div for each
 * alert with appropriate styling and icons based on the `state` property of the alert. It also
 * includes a button to clear the alert.
 */
const Alert: FC<IAlert> = (props) => {
  const { alerts, clearAlert } = props;

  const output = Object.keys(alerts).map((item, i) => (
    <div
      className={`${
        alerts[item].state ? "animate-bounce2" : "animate-shake"
      } sm:w-2/4 w-[82vw] relative p-3 bgPrimary flex items-center justify-center rounded z-20 border-borderOutline border dark:border-0`}
      key={i}
    >
      <div className="mr-4">
        {alerts[item].state ? (
          <DoneOutlineIcon className="text-success" />
        ) : (
          <ErrorIcon className="text-danger" />
        )}
      </div>
      <span className="textPrimary mr-3">{alerts[item].message}</span>
      <button
        onClick={() => clearAlert({})}
        className="absolute top-0 right-0 text-accent hover:text-secondAccent transition-colors"
      >
        <ClearIcon />
      </button>
    </div>
  ));
  return <div className="mt-6 ">{output}</div>;
};

export default Alert;
