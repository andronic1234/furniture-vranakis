import React, { FC } from "react";

import type { IAlert } from "../interfaces/interfaces";

import ClearIcon from "@mui/icons-material/Clear";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ErrorIcon from "@mui/icons-material/Error";

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
