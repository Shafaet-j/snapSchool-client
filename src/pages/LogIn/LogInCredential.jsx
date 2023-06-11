import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import CredentialModal from "./CredentialModal";

const LogInCredential = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setSelectedClass(null);
  };
  const handleCredential = () => {};
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-1">
        <button
          onClick={() => {
            setIsOpen(true);
            setSelectedClass(singleClass);
          }}
          className="btn btn-primary btn-outline w-full"
        >
          LOGIN CREDENTIAL
        </button>
      </div>
      <CredentialModal
        closeModal={closeModal}
        isOpen={isOpen}
      ></CredentialModal>
    </div>
  );
};

export default LogInCredential;
