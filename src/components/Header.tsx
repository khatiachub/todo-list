import styled from "styled-components"
import LogOut from "./LogOut"

const Wraper=styled.div`
    width:100%;
    height:98px;
    background-color:#000;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Logo=styled.p`
    font-size:36px;
    color:#fff;
    margin-left:10px;
`
const Profile=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right:20px;
`
const Name=styled.p`
    font-size:22px;
    color:#fff;
    margin-right:10px;
`
const Image=styled.img`
    border-radius:50%;
    width:68px;
    height:68px;
    object-fit:cover;
`

export default function Header(){

const myData = JSON.parse(localStorage.getItem("myData")||'');

    return(
        <>
        <Wraper>
            <Logo>TO DO</Logo>
            <Profile>
                <LogOut/>
                <Name>{myData.name}</Name>
                <Image src={myData.image}></Image>
            </Profile>
        </Wraper>
        </>
    )
}