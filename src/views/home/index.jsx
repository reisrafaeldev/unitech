import React, { useEffect, useRef } from "react";
import * as S from "./home.styles";
import { useNavigate } from "react-router-dom";
import Anchor from "../../components/anchor";
import Image from "../../components/image";
import imageLogo from "../../assets/logo-title.png";
import Card from "../../components/card";
import Text from "../../components/text";
import Modal from "../../components/modal";
import { useState } from "react";
import Load from "../../components/load";
import { useLogin } from "../../contex/authContex";
import Button from "../../components/button";
import { BallTriangle } from "react-loader-spinner";
import { useCompletion } from "ai/react";

const Home = () => {
  const MAX_TOKENS = 4096;
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  console.log("completion", messages);

  const [systemPrompt, setSystemPrompt] = useState(
    "You are a helpful assistant."
  );
  const [temp, setTemp] = useState(0.75);
  const [topP, setTopP] = useState(0.9);
  const [maxTokens, setMaxTokens] = useState(800);

  const nav = useNavigate();
  const [titleModal, setTitleModal] = useState("teste");
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();
  const [dataModal, setDataModal] = useState();
  const [lote, setLote] = useState();
  const [name, setName] = useState();
  const [idModal, setIdModal] = useState();
  const { handleCpf, sessionToken } = useLogin();
  const [openModal, setOpenModal] = useState(false);
  const options = [
    { label: "Álgebra", isSelected: false },
    { label: "Geometria", isSelected: false },
    { label: "Cálculo Diferencial e Integral", isSelected: false },
    { label: "Análise Semântica", isSelected: false },
    { label: "Análise Combinatória e Probabilidade", isSelected: false },
  ];
  const [selectedButton, setSelectedButton] = useState(options);

  const [temaButtons, setTemaButtons] = useState([]);
  const [disciplinaButtons, setDisciplinaButtons] = useState([
    { label: "Matemática", isSelected: false },
    { label: "História", isSelected: false },
  ]);
  const [grauButtons, setGrauButtons] = useState([
    { label: "Fácil", isSelected: false },
    { label: "Médio", isSelected: false },
    { label: "Difícil", isSelected: false },
  ]);

  const handleButtonClick = (clickedLabel) => {
    const updatedButtons = temaButtons.map((button) => ({
      ...button,
      isSelected: button.label === clickedLabel,
    }));

    setTemaButtons(updatedButtons);
  };
  const handleDcpClick = (clickedLabel) => {
    const updatedButtons = disciplinaButtons.map((button) => ({
      ...button,
      isSelected: button.label === clickedLabel,
    }));

    setDisciplinaButtons(updatedButtons);
  };
  const handleGrauClick = (clickedLabel) => {
    const updatedButtons = grauButtons.map((button) => ({
      ...button,
      isSelected: button.label === clickedLabel,
    }));

    setGrauButtons(updatedButtons);
  };
  const [size, setSize] = useState({
    name: "Llama 2 70B",
    version: "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
    shortened: "70B",
  });
  const handleSelect = (tipo) => {
    const temasmatematica = [
      { label: "Álgebra", isSelected: false },
      { label: "Geometria", isSelected: false },
      { label: "Cálculo Diferencial e Integral", isSelected: false },
      { label: "Análise Semântica", isSelected: false },
      { label: "Análise Combinatória e Probabilidade", isSelected: false },
    ];
    const temasPortugues = [
      { label: "Gramática", isSelected: false },
      { label: "Literatura", isSelected: false },
      { label: "Redação", isSelected: false },
      { label: "Interpretação de Textos", isSelected: false },
      { label: "Ortografia e Acentuação", isSelected: false },
    ];
    if (tipo === "Matemática") {
      setTemaButtons(temasmatematica);
    } else {
      setTemaButtons(temasPortugues);
    }
  };

  const generateQuestions = () => {
    setOpenModal(true);
  };

  return (
    <S.Container>
      <Load active={load}></Load>
      <Modal
        title={"UniTeck AI"}
        isOpen={openModal}
        setClose={() => setOpenModal(false)}
      >
        <S.LoadContainer>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#e53d00"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </S.LoadContainer>
      </Modal>
      <S.ContainerHeader>
        <Anchor
          icon={false}
          fontSize="1.5rem"
          href="/"
          color={"#E53D00"}
          margin="0.5rem 0"
          fontWeight={"600"}
        >
          Meu desenvolvimento
        </Anchor>
        <Image img={imageLogo} width="22rem" />
      </S.ContainerHeader>
      <S.ContainerCenter>
        <S.Center>
          <Text
            fontSize={"1.5rem"}
            color={"#000000"}
            fontWeight="600"
            margin="0 0 0.5rem"
          >
            Selecione a Disciplina
          </Text>
          {disciplinaButtons.map((button, index) => (
            <Card
              variant={"card2"}
              key={index}
              title={button.label}
              isSelected={button.isSelected}
              onClick={() => (
                handleDcpClick(button.label), handleSelect(button.label)
              )}
            />
          ))}
        </S.Center>
        <S.Center>
          <S.Overflow>
            <Text
              fontSize={"1.5rem"}
              color={"#000000"}
              fontWeight="600"
              margin="0 0 0.5rem"
            >
              Selecione um Tema
            </Text>
            {temaButtons.map((button, index) => (
              <Card
                variant={"card2"}
                key={index}
                title={button.label}
                isSelected={button.isSelected}
                onClick={() => handleButtonClick(button.label)}
              />
            ))}
          </S.Overflow>
        </S.Center>
        <S.Center>
          <Text
            fontSize={"1.5rem"}
            color={"#000000"}
            fontWeight="600"
            margin="0 0 0.5rem"
          >
            Selecione a Dificuldade
          </Text>
          {temaButtons.length > 0 &&
            grauButtons.map((button, index) => (
              <Card
                variant={"card2"}
                key={index}
                title={button.label}
                isSelected={button.isSelected}
                onClick={() => handleGrauClick(button.label)}
              />
            ))}
        </S.Center>
        <S.Center>
          <Text
            fontSize={"1.5rem"}
            color={"#000000"}
            fontWeight="600"
            margin="0 0 0.5rem"
          >
            Gerar Questões
          </Text>

          <Button margin={"1rem 0"} onClick={generateQuestions}>
            Gerar
          </Button>
        </S.Center>
      </S.ContainerCenter>
      <Anchor
        icon={true}
        fontSize="1.5rem"
        href="/"
        color={"#E53D00"}
        margin="0.5rem 0"
      >
        Sair
      </Anchor>
    </S.Container>
  );
};
export default Home;
