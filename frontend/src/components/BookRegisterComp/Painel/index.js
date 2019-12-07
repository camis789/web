import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import { 
    Container, 
    Nome,
    Autor,
    Editora,
    Page,
    Cat,
    Locate,
    Caixa,
    Menu,
    TextItems,
    Text,
    BotaoMenuH,
    BotaoMenuC,
    BotaoCad,
    

    
} from './styles';



export default function RightPainel() {
  const[nome, setNome] = useState("");
  const[autor, setAutor] = useState("");
  const[page, setPage] = useState("");
  const[category, setCategory] = useState("");
  const[location, setLocation] = useState("");
  const[editora, setEditora] = useState("");

  useEffect(() => {
    console.log();
  }, [])

   async function submitForm(){
    if(nome!= "" && editora !="" && autor !== "" && page !="" && category !="" && location !=""){
      try{
          var result = await api.post('api/book/add',
        {
          Nome: nome,
          Editora: editora,
          Autor: autor,
          Page: page,
          Category: category,
          Location: location

        });
        
        console.log(result);
        
        if(result){
          window.location.replace('/home');
        }else{
          alert("Não foi possivel adicionar livro, livro já existente.");
        }
      }catch(exception){
        console.log(exception);
        alert("Ocorreu um erro ao comunicar com servidor.");
     }
   }
 }
   
  return (
    <Container>
        <Menu>
          <a href="/home"><BotaoMenuH>Home</BotaoMenuH></a>
          <a href="/bookregister"><BotaoMenuC>Cadastrar livro</BotaoMenuC></a>
        </Menu>
          <Caixa>
            <TextItems>Cadastrar Livro</TextItems>
            <Text>Nome do Livro</Text>
            <Nome name="Book" placeholder="Ex: A Hora da Estrela" value={nome} onChange={e => setNome(e.target.value)}/>
            <Text>Autor</Text>
            <Autor name="Autor" placeholder="Ex: Clarice Lispector " value={autor} onChange={e => setAutor(e.target.value)}/>
            <Text>Editora</Text>
            <Editora name="Editora" placeholder="Ex: Clarice Lispector " value={editora} onChange={e => setEditora(e.target.value)}/>
            <Text>Quantidade de Páginas</Text>
            <Page name="Page" placeholder="Ex: 88" value={page} onChange={e => setPage(e.target.value)}/>
            <Text>Gênero</Text>
            <Cat name="Gen" placeholder="Ex: Romance" value={category} onChange={e => setCategory(e.target.value)} />
            <Text>Localização</Text>
            <Locate name="Location" placeholder="Ex: Prateleira Tal" value={location} onChange={e => setLocation(e.target.value)} />
            <a href="/bookregister"><BotaoCad>Cadastrar</BotaoCad></a>
          </Caixa>        
    </Container>
  );
}
