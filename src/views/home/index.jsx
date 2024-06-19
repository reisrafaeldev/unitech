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
import axios from "axios";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/config/firebase";

const Home = () => {
  const user = localStorage.getItem("user");

  const bardApi = axios.create({
    baseURL: "https://unitech-ai-api.onrender.com/gmni",
  });

  const nav = useNavigate();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [questionOptions, setQuestionOption] = useState();
  const options = [
    { label: "Álgebra", isSelected: false },
    { label: "Geometria", isSelected: false },
    { label: "Cálculo Diferencial e Integral", isSelected: false },
    { label: "Análise Semântica", isSelected: false },
    { label: "Análise Combinatória e Probabilidade", isSelected: false },
  ];
  const [temaButtons, setTemaButtons] = useState([]);
  const [disciplinaButtons, setDisciplinaButtons] = useState([
    { label: "Matemática", isSelected: false },
    { label: "Português", isSelected: false },
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
  const handleOptionsButtonClick = (indexClicked) => {
    const updatedButtons = questionOptions.map((button, index) => ({
      ...button,
      isSelected: index === indexClicked,
    }));

    setQuestionOption(updatedButtons);
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
    handleClick();
    setData("");
    setOpenModal(true);
  };

  const handleClick = async () => {
    setLoad(true);
    setOpenModal(true);
    const subject = disciplinaButtons.filter((button) => button.isSelected);

    const academic_level = grauButtons.filter((button) => button.isSelected);
    const theme = temaButtons.filter((button) => button.isSelected);

    try {
      const response = await bardApi.post("/multiple_choice_question", {
        subject: subject,
        academic_level: academic_level,
        theme: theme,
        locale: "pt-br",
      });
      let regex = /`/g;

      // Remover as crases usando replace
      let jsonExtracted = response.data.response.replace(regex, "");
      let json = JSON.parse(
        jsonExtracted.substring(jsonExtracted.indexOf("{"))
      );
      setData(json.question_statement);
      setQuestionOption(json.alternatives);
      setCorrectAnswer(json.correct_answer);
    } catch (error) {
    }
    setLoad(false);
  };

  const handleIndex = (index, button) => {
    const letter = ["a", "b", "c", "d", "e"];
    return button[letter[index]];
  };

  const getSelectedOption = () => {
    return questionOptions.find((option) => option.isSelected);
  };
  const handleResponse = () => {
    const selectedOption = getSelectedOption();
    if (selectedOption) {
      const selectedKey = Object.keys(selectedOption).find(
        (key) => key !== "isSelected"
      );
      if (selectedKey === correctAnswer) {
        Swal.fire("Resposta correta!!");
        saveData(true);
      } else {
        Swal.fire("Resposta errada!!");
        saveData(false);
      }
      setLoad(false);
      setOpenModal(false);
    } else {
    }
  };
  const saveData = async (state) => {
    const subject = disciplinaButtons.filter((button) => button.isSelected);
    const academic_level = grauButtons.filter((button) => button.isSelected);
    const theme = temaButtons.filter((button) => button.isSelected);

    try {
      const docRef = await addDoc(collection(db, "questions"), {
        user_id: user,
        subject: subject,
        academic_level: academic_level,
        theme: theme,
        locale: "pt-br",
        isAcertive: state,
      });
      setResponse("");
    } catch (e) {}
  };

  return (
    <S.Container>
      <Load active={load}></Load>
      <Modal
        title={"UniTech AI"}
        isOpen={openModal}
        setClose={() => setOpenModal(false)}
      >
        <S.LoadContainer>
          {data ? (
            <>
              <Text
                fontSize={"1rem"}
                color={"#000000"}
                fontWeight="600"
                margin="0"
              >
                {data}
              </Text>
              {questionOptions?.map((button, index) => (
                <Card
                  variant="card2"
                  key={index}
                  title={handleIndex(index, button)}
                  isSelected={button.isSelected}
                  onClick={() => handleOptionsButtonClick(index)}
                />
              ))}
              <Button
                children={"Conferir"}
                height={"2.5rem"}
                type="button"
                onClick={handleResponse}
              />
            </>
          ) : (
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
          )}
        </S.LoadContainer>
      </Modal>
      <S.ContainerHeader>
        {/* <Anchor
          icon={false}
          fontSize="1.5rem"
          href="/"
          color={"#E53D00"}
          margin="0.5rem 0"
          fontWeight={"600"}
        >
          Meu desenvolvimento
        </Anchor> */}
        <Image img={imageLogo} width="22rem" />
      </S.ContainerHeader>
      <S.ContainerCenter>
        <S.Center>
          <S.Overflow>
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
          </S.Overflow>
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
          <S.Overflow>
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
          </S.Overflow>
        </S.Center>
        <S.Center>
          <S.Overflow>
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
          </S.Overflow>
        </S.Center>
      </S.ContainerCenter>
      <Anchor
        icon={true}
        onClick={() => (nav("/"), localStorage.clear())}
        fontSize="1.5rem"
        href="/"
        color={"#E53D00"}
        margin="0.5rem 0"
        variant={"secondary"}
      >
        Sair
      </Anchor>
    </S.Container>
  );
};
export default Home;
