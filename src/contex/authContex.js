import React, { useContext, useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/config/firebase";
import Swal from "sweetalert2";

export const LoginContext = createContext();

export const LoginContexProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");
  const [sessionToken, setSesionToken] = useState("");
  const [pin, setPin] = useState("");
  const nav = useNavigate();

  const handleCpf = (value) => {
    setCpfNumber(value);
  };
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
      .then((value) => {
        // Swal.fire("Enviado com sucesso! Verifique sua caixa de entrada!");
      })
      .catch((error) => {
        // Swal.fire("E-mail não cadastrado!");
      });
  };

  const loginUser = async (email, password, setError) => {
    console.log("senha", password);
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setUser(value.user.uid);
        nav("/home");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  const createUser = async (email, password, setResponse) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setResponse(true);
        nav("/");
      })
      .catch((error) => {
        setResponse(false);
      });
  };
  const handleSessionToken = (value) => {
    setSesionToken(value);
  };

  return (
    <LoginContext.Provider
      value={{
        handleCpf,
        cpfNumber,
        loginUser,
        createUser,
        sessionToken,
        resetPassword,
        handleSessionToken,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
