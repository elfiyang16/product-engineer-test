// modules
import styled from "styled-components";

// styles
import { small_space, medium_space_1 } from "../variables/spacing";
import { text, offWhite } from "../variables/colors";
import { body_1 } from "../variables/font-sizes";

export interface InputProps {
  fontSize?: string;
  height?: string;
  background?: string;
  mt?: string;
  mb?: string;
  hover?: string;
  margin?: string;
}

export const Input = styled("input")<InputProps>`
  font-size: ${body_1};
  box-shadow: 0 0.8rem 2.5rem 0 rgba(40, 51, 63, 0.05);
  transition: all 100ms ease-in-out;
  height: 36px;
  width: 95%;
  max-width: 364px;
  background-color: ${(props: any) =>
    props.background ? props.background : "transparent"};
  padding-left: ${small_space};
  margin-bottom: ${props => (props.margin ? props.margin : medium_space_1)};
  color: ${text};
  font-weight: 500;
  border-radius: 4px;
  box-shadow: ${props =>
    props.hover ? "0px 2px 6px rgba(0, 0, 0, 0.11);" : "0 0 0 0"};

  &:focus {
    border: 1px solid ${offWhite};
    outline: 0 none;
  }

  ::placeholder {
    color: ${text}
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${text}
  }

  ::-ms-input-placeholder {
    color: ${text}
  }
`;
