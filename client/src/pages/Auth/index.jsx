import React, { useState } from "react";
import "./styles/enter-form.css";
import "./styles/auth-profile.css";
import "./styles/create-profile.css";

import { Input } from "../../components/shared/Input";
import { Button } from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { authorization, requestOfNewUser } from "../../api/authApi";
import { validation } from "../../helpers/validation/validation";

export const Auth = () => {
  const [createNewProfile, setCreateNewProfile] = useState(false);
  const [name, setName] = useState("");
  const [errorValidationName, setErrorValidationName] = useState(false);
  const [email, setEmail] = useState("");
  const [errorValidationEmail, setErrorValidationEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorValidationPassword, setErrorValidationPassword] = useState(false);
  const navigate = useNavigate();

  const changeName = (string) => {
    const validationTest = validation("name", string);
    setName(string);

    if (validationTest) {
      setErrorValidationName(false);
      return;
    }

    setErrorValidationName(true);
  };

  const changeEmail = (string) => {
    const validationTest = validation("email", string);
    setEmail(string);

    if (validationTest) {
      setErrorValidationEmail(false);
      return;
    }

    setErrorValidationEmail(true);
  };

  const changePassword = (string) => {
    const validationTest = validation("password", string);
    setPassword(string);

    if (validationTest) {
      setErrorValidationPassword(false);
      return;
    }

    setErrorValidationPassword(true);
  };

  const changeForm = () => {
    setPassword("");
    setCreateNewProfile(!createNewProfile);
  };

  const getUserId = async () => {
    const userInfo = {
      email: email,
      password: password,
    };

    if (email && password) {
      const securityCheck = await authorization(userInfo);

      if (securityCheck) {
        navigate("/main");
      }
    }
  };

  const createUser = async () => {
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };

    console.log("name", !errorValidationName)
    console.log("email", !errorValidationEmail)
    console.log("password", !errorValidationPassword)

    if (!errorValidationName && !errorValidationEmail && !errorValidationPassword) {
      const result = await requestOfNewUser(userInfo);

      if (result) {
        changeForm();
      }

      return
    }

    alert("Введен не правильное имя пользователя, адресс электронной почты или пароль не соответствует требованиям безопасности")
  };

  return (
    <div className="container enter-form">
      {!createNewProfile ? (
        <div className="auth-profile">
          <h1>Вход</h1>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            action={setEmail}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            action={setPassword}
          />
          <a onClick={() => changeForm()}>Зарегистрироваться</a>
          <Button style="button-primary" label="Войти" action={getUserId} />
        </div>
      ) : (
        <div className="create-profile">
          <div className="create-profile-header">
            <Button
              style="button-service mini"
              label="Назад"
              action={changeForm}
            />
            <h1>Регистрация</h1>
            <div className="dummy">dummy</div>
          </div>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            action={changeName}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            action={changeEmail}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            action={changePassword}
          />
          <Button
            style="button-primary"
            label="Зарегистрироваться"
            action={createUser}
          />
        </div>
      )}
    </div>
  );
};
