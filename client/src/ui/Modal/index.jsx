import React from "react";
import { NewAccountForm } from "./components/NewAccountForm";
import { NewCategoryForm } from "./components/NewCategoryForm";
import "./modal.css";

export const Modal = ({ type }) => {
  const selectModal = () => {
    switch (type) {
      case "modal-new-account":
        return <NewAccountForm />;
      case "modal-new-category":
        return <NewCategoryForm />;
    }
  };

  const element = selectModal();

  return <div className="modal">{element}</div>;
};
