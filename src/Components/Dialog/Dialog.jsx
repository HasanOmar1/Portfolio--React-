import React, { forwardRef } from "react";
import "./dialog.css";

const dialogModal = forwardRef(function Dialog({ name }, ref) {
  return (
    <dialog ref={ref}>
      <h3>
        Thank you <span id="span-name">{name}</span> for contacting me!
      </h3>
      <h3>Will get back to you as soon as possible.</h3>
      <form className="dialog-form" method="dialog">
        <button className="close-dialog">Close</button>
      </form>
    </dialog>
  );
});

export default dialogModal;
