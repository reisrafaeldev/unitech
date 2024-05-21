import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { DiGoogleAnalytics } from "react-icons/di";
import {
  MdOutlineNearbyError,
  MdOutlineAutoGraph,
  MdDesignServices,
} from "react-icons/md";
import { TbFileAnalytics } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

const Button = ({
  children,
  href,
  width,
  heigth,
  background,
  margin,
  type,
  variant,
  onClick,
  iconType,
  isSelected,
}) => {
  const nav = useNavigate();

  return (
    <S.Button
      type={type}
      width={width}
      heigth={heigth}
      margin={margin}
      background={background}
      onClick={onClick}
    >
      
      {children}
    </S.Button>
  );
};

export default Button;
