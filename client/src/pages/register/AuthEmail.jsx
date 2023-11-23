import React, { useRef } from "react";
import Modal from "../../components/ui/modal/Modal";
import Button from "../../components/ui/button/SquareButton";

import {
  AuthTitle,
  AuthItems,
  AuthForm,
  AuthBox,
  AuthInput,
} from "./AuthEmail.style";

function AuthEmail(props) {
  const emailRef = useRef(null);
  const authRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const authNum = authRef.current.value;

    console.log("auth email", email);
    console.log("auth num", authNum);
  };

  const handleAuthMail = (props) => {
    const email = props;

    console.log("auth email", email);
  };

  return (
    <div>
      <AuthItems>
        <Modal onClose={props.onClose}>
          
        </Modal>
      </AuthItems>
    </div>
  );
}

export default AuthEmail;
