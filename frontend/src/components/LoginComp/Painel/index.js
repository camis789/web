import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import { 
    Container, 
    User,
    Password,
    CaixaDaAlegria,
    BotaoInscreva,
    BotaoEntrar,
    Textsenha

    
} from './styles';



export default function RightPainel() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email])

  async function submitForm(){
    if(email !="" && password != ""){
      try{
        var result = await api.post('api/user/login',
        {
          Email: email,
          Password: password

        });
        
        console.log(result);
        
        if(result){
          window.location.replace('/home');
        }else{
          alert("Não foi possivel logar com essa conta.");
        }
      }catch(exception){
        console.log(exception);
        alert("Ocorreu um erro ao comunicar com servidor.");
      }
    }
  }

  function goToRegister(){
    window.location.replace('/register');
  }

  return (
    <Container>
      <CaixaDaAlegria>
        <User name="User_Diversao" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <Password type="password"name="Senha" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
        <Textsenha>Esqueceu sua senha?</Textsenha> 
        <BotaoInscreva onClick={() => goToRegister()}>Registre-se</BotaoInscreva>
        <BotaoEntrar onClick={() => submitForm()}>Entrar</BotaoEntrar>
      </CaixaDaAlegria>
    
    </Container>
  );
  }
