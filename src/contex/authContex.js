import React, { useContext, useState, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/config/firebase";

export const LoginContext = createContext();

export const LoginContexProvider = ({ children }) => {
  const [user, setUserAuth] = useState(false);
  const [title, setTitle] = useState("");
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

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUserAuth(user);
    }
  }, []);

  const createUser = async (email, password, setResponse) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setResponse(true);
        // nav("/");
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
        setUserAuth,
        cpfNumber,
        user,
        createUser,
        setTitle,
        title,
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
