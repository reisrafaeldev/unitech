import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../assets/logo-title.png";
import imagePerson from "../../assets/logo.png";
import Image from "../../components/image";
import Text from "../../components/text";
import Anchor from "../../components/anchor";
import InputComponent from "../../components/input";
import Button from "../../components/button";
import Load from "../../components/load";
import Swal from "sweetalert2";
import { auth } from "../../utils/config/firebase";

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useLogin } from "../../contex/authContex";
const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState();
  const [telefone, setTelefone] = useState();
  const [cpf, setCpf] = useState();
  const [dtaNascimento, setDtaNascimento] = useState();
  const [cep, setCep] = useState();
  const [senha, setSenha] = useState();
  const [email, setEmail] = useState();
  const [response, setResponse] = useState();

  const [load, setLoad] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
   setLoad(true);
   createUser(email, senha)
    
  };

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setLoad(false);
        Swal.fire("Cadastro realizado com sucesso!!");
        setInterval(() => {
        nav("/");
        }
        , 2000);
      })
      .catch((error) => {
        setLoad(false);
        Swal.fire("Sistema indisponível. Tente mais tarde!!");
      });
  };

  return (
    <S.Container>
      <Load active={load}></Load>
      <Image img={imageLogo} width="25rem" />
      <S.ContainerCenter onSubmit={handleSubmit}>
        <Anchor icon={true} href="/" color={"#E53D00"} margin="0.5rem 0">
          Voltar
        </Anchor>
        <Text
          fontSize={"1rem"}
          color={"#E53D00"}
          fontWeight="700"
          margin="1rem 0 1rem"
        >
          Cadastro
        </Text>
        <InputComponent
          type="text"
          label="Nome"
          onChangeText={(e) => setName(e.target.value)}
          required
        />
        {/* <InputComponent
          type="tel"
          label="Telefone"
          variant="mask"
          mask={[
            "(",
            /[0-9]/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          onChangeText={(e) => setTelefone(e.target.value)}
          required
        />
        <InputComponent
          type="text"
          label="CPF"
          onChangeText={(e) => setCpf(e.target.value)}
          variant="mask"
          mask={[
            /[0-9]/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
          ]}
          required
        /> */}
        {/* <InputComponent
          type="date"
          label="Data de Nascimento"
          onChangeText={(e) => setDtaNascimento(e.target.value)}
        /> */}
        {/* <InputComponent
          type="text"
          label="CEP"
          variant="mask"
          mask={[/[0-9]/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
          onChangeText={(e) => setCep(e.target.value)}
          required
        /> */}
        <InputComponent
          type="email"
          label="Email"
          onChangeText={(e) => setEmail(e.target.value)}
          required
        />
        <InputComponent
          type="password"
          label="Senha"
          right={"-7.4rem"}
          onChangeText={(e) => setSenha(e.target.value)}
        />
        <Button
          background="transparent"
          width="100%"
          margin="1rem 0"
          type="submit"
          variant="primary"
        >
          Cadastrar
        </Button>
      </S.ContainerCenter>
      <S.ContainerImage>
        <Image img={imagePerson} width="15rem"></Image>
      </S.ContainerImage>
    </S.Container>
  );
};
export default Register;
