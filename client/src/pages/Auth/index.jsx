import React, { useState } from "react";
// import { createUser } from "../../api/createUser";
// import { getUser } from "../../api/getUser";
import "./styles/enter-form.css";
import "./styles/auth-profile.css";
import "./styles/create-profile.css";

import { Input } from "../../ui/Input"
import { Button } from "../../ui/Button"

export const Auth = () => {
  const [createNewProfile, setCreateNewProfile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeForm = () => {
    setPassword("");
    setCreateNewProfile(!createNewProfile);
  };

  // const logIn = () => {
  //   const user = {
  //     email: email,
  //     password: password,
  //   };

  //   getUser(user);
  // };

  // const createNewUser = () => {
  //   const user = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };

  //   createUser(user);
  // };

  return (
    <>
      {!createNewProfile ? (
        <div className="enter-form auth-profile">
          <p>Вход</p>
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
          <a 
            onClick={() => changeForm()}
          >Зарегистрироваться</a>
          <Button
            style="button-primary"
            label="Войти" 
            // action={logIn}
          />
        </div>
      ) : (
        <div className="enter-form create-profile">
          <div className="auth-header">
            <Button 
              style="button-service mini"
              label="Назад"
              action={changeForm}
            />
            <p>Регистрация</p>
          </div>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            action={setName}
          />
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
          <Button
            style="button-primary"
            label="Зарегистрироваться" 
            // action={createNewUser}
          />
        </div>
      )}
    </>
  );
};
