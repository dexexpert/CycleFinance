import React, {FunctionComponent} from 'react';
import styled from "styled-components";

const HeaderBorder = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 100%);
  width: 30%;
  text-align: center;
  display: flex;
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
`;

type Props = {
  title: string,
}

const PageHeader:FunctionComponent<Props> = (props: Props) => (
  <div className="flex flex-col items-center justify-center w-full space-y-5">
    <h1 className=' md:w-[500px] w-64 text-center text-gray-300 text-4xl'>{props.title}</h1>
    <HeaderBorder/>
  </div>
)

export default PageHeader