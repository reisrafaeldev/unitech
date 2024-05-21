import { useNavigate } from "react-router-dom";
import logoBrand from "../../assets/logo-title.png";
import person from "../../assets/logo.png";
import Text from "../../components/text";
import Button from "../../components/button";
import Image from "../../components/image";
import InputComponent from "../../components/input";
import * as S from "./recovery.styles";
import Anchor from "../../components/anchor";
import { useState } from "react";
import Load from "../../components/load";
import { useLogin } from "../../contex/authContex";

const RecoveryLogin = () => {
  const nav = useNavigate();
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState();
  const { resetPassword } = useLogin();

  const handleSubmit = async () => {
    if (email) {
      await resetPassword(email);
    }
  };
  console.log('email', email);

  return (
    <S.Container>
      <Load active={load}></Load>
      <div>
        <Image img={logoBrand} width={"22.3125rem"} />
        <S.ContainerLogin onSubmit={handleSubmit}>
          <Anchor icon={true} href="/" color={"#E53D00"} margin="0.5rem 0">
            Voltar
          </Anchor>
          <Text fontSize={"1rem"} color={"#E53D00"} fontWeight="700">
            Recuperar Senha
          </Text>
          <InputComponent
            label={"Login"}
            type={"text"}
            placeholder={"Email"}
            onChangeText={(e) => setEmail(e.target.value)}
            showError={false}
          />
          <Button children={"Enviar"} height={"2.5rem"} type="submit" />
        </S.ContainerLogin>
      </div>
      <Image img={person} width={"15rem"} />
    </S.Container>
  );
};
export default RecoveryLogin;
