import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Logout=styled.button`
    border:none;
    background-color:#5EFC8D;
    width:100px;
    height:50px;
    margin-right:20px;
    border-radius:4px;
    font-size:20px;
    :hover{
        background-color:#000;
        color:#fff;
    }
`

const LogOut = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/sign");
  };

  return (
    <div>
      <Logout onClick={handleClick}>Logout</Logout>
    </div>
  );
};

export default LogOut;