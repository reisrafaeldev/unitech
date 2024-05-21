import * as S from "./card.styles";
import { useState } from "react";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import Text from "../text";
import Image from "../image";
import imageIcon from "../../assets/economics.png";

const Card = ({ background, variant, onClick, vaccine, id, title , isSelected}) => {
  return (
    <S.Container
      id={id}
      background={background}
      variant={variant}
      onClick={onClick}
      isSelected={isSelected}
    >
      <S.CardIcon>
        <Image img={imageIcon} width="3rem"></Image>
      </S.CardIcon>
      <S.CardLeft>
        <Text fontSize="1.2rem" fontWeight="bold">
          {vaccine}
        </Text>
      </S.CardLeft>
      <S.CardCenter>
        <Text as="p" fontSize="0.875rem" fontWeight="bold">
          {title}
        </Text>
        <S.IconOpen />
      </S.CardCenter>
    </S.Container>
  );
};

export default Card;
