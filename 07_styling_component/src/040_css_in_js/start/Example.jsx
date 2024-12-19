import { useState } from "react";
import styled from "styled-components";
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const Styledbutton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props)=>props.isSelected?"pink":""}; 
  `

  return (
    <>
      <Styledbutton isSelected={isSelected} onClick={clickHandler}>button</Styledbutton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
