import React, { useEffect } from "react";
import * as S from "./login.styles";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input";
import logoBrand from "../../assets/logo-titlenovo.png";
import novalogounitech from "../../assets/novalogounitech.png";
import Image from "../../components/image";
import Button from "../../components/button";
import Anchor from "../../components/anchor";
import Load from "../../components/load";
import { useState } from "react";
import { useLogin } from "../../contex/authContex";
import { auth } from "../../utils/config/firebase";

import Swal from "sweetalert2";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const Login = () => {
  const nav = useNavigate();
  const [user, setUser] = useState("");

  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    if (senha && email) {
      loginUser(email, senha);
      setLoad(false);
    } else {
      setLoad(false);
      Swal.fire("Preencha todos os campos!!");
    }
  };

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setUser(value.user.uid);
        nav("/home");
        setLoad(false);
      })
      .catch((error) => {
        Swal.fire("Usuário ou senha inválidos!!");
        setEmail("");
        setSenha("");
        setLoad(false);
      });
  };
  console.log("error", error);
  return (
    <S.Container>
      <Load active={load}></Load>
      <S.Center>
        <Image img={logoBrand} width={"25.3125rem"} />
        <S.ContainerLogin onSubmit={handleSubmit}>
          <InputComponent
            label={"Login"}
            type={"text"}
            placeholder={"Email"}
            onChangeText={(e) => setEmail(e.target.value)}
            showError={false}
          />
          <InputComponent
            type={"password"}
            placeholder={"Senha"}
            onChangeText={(e) => setSenha(e.target.value)}
            showError={false}
            right={"1.1rem"}
          />
          <div>
            <Anchor
              fontSize={"0.75rem"}
              color={"#074173"}
              fontWeight="600"
              margin="0 0 0.5rem"
              href={"/recovery"}
            >
              Esqueceu sua senha?
            </Anchor>
            <Anchor
              fontSize={"0.75rem"}
              color={"#074173"}
              fontWeight="600"
              margin="0 0 1rem"
              href={"/register"}
            >
              Não tem conta? Cadastre-se
            </Anchor>
          </div>
          <Button children={"Entrar"} height={"2.5rem"} type="submit" />
        </S.ContainerLogin>
      </S.Center>
      <Image img={novalogounitech} width={"20.3125rem"} />
    </S.Container>
  );
};
export default Login;
