import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { 
    Container, 
    BotaoCriar,
    User,
    Password,
    Box,
    TextItems,
    Text,
    Email,
    BotaoVoltar,
    
    

    
} from './styles';


export default function RightPainel() {
  const[email, setEmail] = useState("");
  const[nome, setNome] = useState("");
  const[password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email])

   async function submitForm(){
    if(nome!= "" && email !="" && password != ""){
      try{
          var result = await api.post('api/user/',
        {
          Nome: nome,
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
  
  
  function goBack(){
    window.location.replace('/');
  }

  return (
      <Container>
        <Box>
          <TextItems>Crie Sua Conta</TextItems>
          <Text>Nome</Text>
          <User name="User" placeholder="Seu Nome" value={nome} onChange={e => setNome(e.target.value)} />
          <Text>E-mail</Text>
          <Email name="E-mail" placeholder="Seu E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <Text>Senha</Text>
          <Password name="Password" placeholder="Sua Senha" value={password} onChange={e => setPassword(e.target.value)} />
    
          <BotaoVoltar onClick={() => goBack()}>Voltar</BotaoVoltar>
          <BotaoCriar onClick={() => submitForm()}>Criar</BotaoCriar> 
       </Box>
     </Container>
  );
}
