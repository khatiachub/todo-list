import styled from "styled-components"
import Header from "../Header"
import { useEffect, useState } from "react"
import { ChangeEvent } from 'react';
import delette from '../images/delete_forever_FILL0_wght400_GRAD0_opsz48.svg'
import done from '../images/done_FILL0_wght400_GRAD0_opsz48 (1).svg'

const Title=styled.h1`
    font-size:42px;
    margin-top:35px;
    text-align:center;
`
const Input=styled.input`
    max-width:487px;
    width:100%;
    height:76px;
    background-color:#E6EBFF;
    border:none;
    border-radius:4px;
    outline:none;
    ::placeholder{
        padding-left:5px;
    }
`
const Form=styled.form`
    display:flex;
    max-width:595px;
    width:100%;
    margin-top:27px;
    margin-left:50%;
    transform:translateX(-50%);
    @media(max-width:625px){
     width:85%;
 }
`
const Button=styled.button`
    width:108px;
    height:76px;
    background-color:#5EFC8D;
    font-size:32px;
    border-radius:4px;
    border:none;
    :hover{
        background-color:#000;
        color:#fff;
        transition:0.3s;
    }
`
const AddBox=styled.div`
    max-width:595px;
    width:100%;
    height:54px;
    background-color:#000;
    border-radius:4px;
    opacity:1;
    margin-top:16px;
    margin-left:50%;
    transform:translateX(-50%);
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width:625px){
        width:85%;
        height:auto;
    }
`
const List=styled.p`
    font-size:22px;
    color:#fff;
    margin-left:24px;
    word-break:break-all;
`
const DeleteImg=styled.img`
    width:24px;
    height:27px;
`
const DoneImg=styled.img`
    width:24px;
    height:17px;
`
const ImgBox=styled.div`
    width:48px;
    height:54px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
    background-color:#5EFC8D;
    border-radius:4px;
    opacity:1 ;
    transition:0.3s;
}
`
const DeleteBox=styled.div`
    width:48px;
    height:54px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
    background-color:#FC5E5E;
    border-radius:4px;
    opacity:1 ;
    transition:0.3s;
    margin-bottom:0;
    }
`
export default function Todo(){
    const[items,setItems]=useState<Todo[]>(
        () => {
            const savedTodos = localStorage.getItem("todos");
            if (savedTodos) {
              return JSON.parse(savedTodos);
            } else {
              return [];
            }
          });
        
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(items));
    }, [items]);

    const[list,setList]=useState<string>('')
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setList(e.target.value)
    }
    interface Todo {
        text: string;
      }
    const handleClick=(e:any)=>{
        e.preventDefault();
        if (list.trim() !== '') {
        setItems([...items,{text: list}]);
        setList('');
        }

    }
    const handleRemove=(i:number)=>{
        items.splice(i,1)
        setItems([...items]);
    }
    
    return(
        <>
        <Header/>
        <Title>Add Your Daily Tasks</Title>
        <Form>
           <Input value={list} onChange={handleChange} type="text" placeholder="my task"></Input>
           <Button onClick={handleClick}>Add</Button>
        </Form>
        {items.map((item,i)=>{
            return(
                <div style={{marginTop:40}} key={i}>
                    <AddBox>
                        <List>{item.text}</List>
                        <div style={{display:"flex"}}>
                            <ImgBox>
                                <DoneImg src={done}></DoneImg>
                            </ImgBox>
                            <DeleteBox onClick={()=>handleRemove(i)}>
                                <DeleteImg src={delette}></DeleteImg>
                            </DeleteBox>
                        </div>
                    </AddBox>
                </div>
            )
        })}
        
        </>
    )
}