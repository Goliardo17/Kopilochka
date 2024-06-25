import React, { useState } from "react";
// import { createUser } from "../../api/createUser";
// import { getUser } from "../../api/getUser";
import "./styles/enter-form.css";
import "./styles/auth-profile.css";
import "./styles/create-profile.css";

import { Input } from "../../ui/Input"
import { Button } from "../../ui/Button"
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [createNewProfile, setCreateNewProfile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const changeForm = () => {
    setPassword("");
    setCreateNewProfile(!createNewProfile);
  }

  const getUserId = async () => {
    const userInfo = {
      email: email,
      password: password
    }

    if (email && password) {
      await fetch('http://localhost:3333/enter-to-user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then((res) => res.json())
        .then((json) => sessionStorage.setItem("id", json))
      navigate("/main")
    }
  }

  const createUser = async () => {
    const userInfo = {
      name: name,
      email: email,
      password: password
    }

    if (name && email && password) {
      const response = await fetch('http://localhost:3333/create-user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })

      const json = response.json()

      json ? changeForm() : console.log("Аккаунт уже зарегистрирован")
    }
  }

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
          <a 
            onClick={() => changeForm()}
          >Зарегистрироваться</a>
          <Button
            style="button-primary"
            label="Войти"
            action={getUserId}
          />
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
            action={createUser}
          />
        </div>
      )}
    </div>
  );
};
