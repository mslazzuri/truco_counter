// import { useState } from "react";

function DialogBox({ isOpen, onClose, buttonText, children }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        {children}
        {buttonText ? <button onClick={onClose}>{buttonText}</button> : <button onClick={onClose}>Ok</button>}
      </div>
    </div>
  );
}

export default DialogBox;