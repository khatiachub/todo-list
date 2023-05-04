import styled from "styled-components"
import logo from '../images/Group 3.svg'
import { Link } from "react-router-dom"


const MainWraper=styled.div`
    width:100%;
    height:100vh;
    background-color:#000;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Logo=styled.img`
    margin-top:74px;
    margin-left:50%;
    transform:translateX(-50%);
`
const TodoTitle=styled.p`
    font-size:54px;
    margin-top:46px;
    color:#fff;
    text-transform: capitalize;
    opacity: 1;
    text-align:center;
    @media(max-width:768px){
        font-size:30px;
    }
`
const GreenButton=styled.button`
    max-width:388px;
    width:100%;
    height:88px;
    background: #5EFC8D;
    border-radius: 4px;
    border:none;
    opacity: 1;
    margin-top:149px;
        :hover{
        background-color:#fff;
        transition:ease-in 0.3s;
    }
`
const LinkText=styled(Link)`
    text-decoration:none;
    font-size:48px;
    color:#000;
    @media(max-width:768px){
    font-size:30px;
}
`
export default function Home(){
    return(
        <>
        <MainWraper>
            <div>
                <Logo src={logo}></Logo>
            </div>  
            <TodoTitle>Keep Track Of Daily Tasks In Life</TodoTitle>
            <GreenButton>
                <LinkText  to={'/sign'}>Get Started</LinkText>
            </GreenButton>            
        </MainWraper>
        </>
    )
}