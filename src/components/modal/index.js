import * as S from "./modal.styles";
import Text from "../text";
import Image from "../image";
import icone from "../../assets/favicon.png";
import { useEffect, useState } from "react";

const Modal = ({ children, title , isOpen, setClose}) => {
 const [modal, setModal] = useState(isOpen)

  useEffect(() => {
    setModal(isOpen)
  }, [isOpen])
  
  return modal && (
    <S.Section  id="modal">
      <S.Container>
        <S.ContainerHeader>
          <S.CardIcon>
            <Image img={icone} width="3rem"></Image>
          </S.CardIcon>
          <Text fontSize="1.4rem" fontWeight="bold">
            {title}
          </Text>
          <S.IconClose onClick={()=> (setModal(!modal), setClose())} />
        </S.ContainerHeader>
        <S.CardContent>
        {children}
        </S.CardContent>
      </S.Container>
    </S.Section>
  );
};

export default Modal;
