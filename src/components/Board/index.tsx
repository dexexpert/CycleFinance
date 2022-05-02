import React, {FC} from "react";

import styled from 'styled-components';

export const StyledBoard = styled.div`
  background-color: rgb(45, 56, 72);
  width: 95%;
  border-radius: 15px;
  border: 2px solid rgb(224, 224, 224);
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 20px;
  padding-top: 20px;
`;


export interface IBoard {
  className?: string
}

export const Board: FC<IBoard> = (params) => {
  const {
    children, className
  } = params;

  return (
    <StyledBoard className={`${className?className:''}`}>
        {children}
    </StyledBoard>
  )
}