import styled from "styled-components"
import picture from '../images/add_a_photo_FILL0_wght400_GRAD0_opsz48.svg'
import { useNavigate} from "react-router-dom"
import { useEffect, useState} from "react"
import { ChangeEvent } from 'react';

const SignBackground=styled.div`
    width:100%;
    height:768px;
    background-color:#000;
`
const SignBox=styled.div`
    background-color:#fff;
    max-width:588px;
    width:100%;
    height:688px;
    top:40px;
    position:absolute;
    left:50%;
    transform:translateX(-50%);

`
const Title=styled.h1`
    padding-top:73px;
    font-size:48px;
    opacity:1;
    text-align:center;
`
const PhotoTitle=styled.label`
    text-align:center;
    font-size:22px;
    margin-top:44px;
`
const AddPhoto=styled.div`
    margin-top: 10px;
    margin-left:50%;
    transform:translateX(-50%);  
    width: 122px;
    height: 122px;
    background: var(--unnamed-color-e6ebff) 0% 0% no-repeat padding-box;
    background: #E6EBFF 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius:50%;
    border:none;
    position: relative;
    :hover{
        background-color:#5EFC8D;
        transition:0.3s;
    }
`
const Img=styled.img`
    position:absolute;
    width: 122px;
    height: 122px;
    border-radius:50%;
    object-fit:cover;
`
const UploadPhoto=styled.img`
    width:44px;
    height:40px;
    position:absolute;
    top:37%;
    left:50%;
    transform:translate(-50%,-50%);
`
const NameTitle=styled.label`
    margin-top:53px;
    font-size:22px;
    opacity:1;
    text-align:center;
`
const NameInput=styled.input`
    max-width:487px;
    width:100%;
    height:76px;
    outline:none;
    border-radius:4px;
    background: var(--unnamed-color-e6ebff) 0% 0% no-repeat padding-box;
    background: #E6EBFF 0% 0% no-repeat padding-box;
    margin-top:16px;
    margin-left:50%;
    transform:translateX(-50%);   
    ::placeholder{
        font-size:22px;
        padding-left:5px;
    }
    @media(max-width:550px){
        width:85%;
    }
`
const SignButton=styled.button`
    max-width:258px;
    width:100%;
    height:66px;
    background: var(--unnamed-color-5efc8d) 0% 0% no-repeat padding-box;
    background: #5EFC8D 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    margin-top:76px;
    border:none;
    margin-left:50%;
    transform:translateX(-50%);
    font-size:32px;
    cursor: pointer;
    color:#000;
        :hover{
        background-color:#000;
        transition:ease-in 0.3s;
        color:#fff;
    }
`
const Form=styled.form`
    display:flex;
    flex-direction:column;
`

export default function Sign({}){

const[names,setNames]=useState<string>('')
const[image,setImage]=useState<string|undefined>('')
const[border,setBorder]=useState(false)
const[error,setError]=useState('')
const[imgerror,setImgError]=useState('')
    const handleChange=(e: React.ChangeEvent)=>{
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        upLoader(file);
        if(image===null){
            setImgError('upload your photo')
        }else{
            setImgError('')
        }
    }
    const upLoader = (file:File) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          localStorage.setItem('recent-image', reader.result as string)
          setImage(localStorage.getItem('recent-image')||'');
        })
        reader.readAsDataURL(file);
      }
      useEffect(() => {
        setImage(localStorage.getItem('recent-image')||'');
       },[])
    
    const handleNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const value=e.target.value
        setNames(value); 
        if(names===null||!/\S/.test(value)){
            setError('this field is required')
            setBorder(true)
        }else{
            setError('')
            setBorder(false)
        }
    }
    const myData={
       image:image,
       name:names
    }
    localStorage.setItem("myData", JSON.stringify(myData));
    
    const nav=useNavigate();

    const onHandleClick=(event:any)=>{
        event.preventDefault();
        if(!image){
            setImgError('upload your photo')
            return
        }else if(!names){
            setError('this field is required')
            setBorder(true)
            return
        }else{
            nav('/todo')
        }
 }
    useEffect(()=>{
    const dataImg = JSON.parse(localStorage.getItem('value')||'');
    if (dataImg) {
      setNames(dataImg);
    }
    }, []);
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(names));
      }, [names]);
      

    return(
        <>
        <SignBackground>
            <SignBox>
                <Title>Get Started</Title>
                <Form onSubmit={onHandleClick}>
                    <PhotoTitle>add a photo</PhotoTitle>
                    <AddPhoto>                    
                    <Img src={image}></Img>
                    </AddPhoto>
                    <UploadPhoto  onClick={() => document.querySelector<any> ('.image-input').click()} src={picture}></UploadPhoto>
                    <p style={{color:'red',marginTop:7,textAlign:'center'}}>{imgerror}</p>
                    <input onChange={(e)=>handleChange(e)} className="image-input" style={{display:"none"}} type="file"/>
                    <NameTitle>fill in you name</NameTitle>
                    <NameInput style={{border:border?'1px solid red':'none'}}  value={names}  type="text" placeholder="your name"  onChange={(e)=>handleNameChange(e)}></NameInput>
                    <p style={{color:'red',marginTop:7,marginLeft:46}}>{error}</p>
                    <SignButton  type="submit">Sign In</SignButton>
                </Form>
            </SignBox>
        </SignBackground>
        </>
    )
}