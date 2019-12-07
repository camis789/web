import React, { useState, useEffect } from 'react';
import api from '../../../services/api'

import { 
    Container, 
    Nome,
    Autor,
    Editora,
    Page,
    Category,
    Location,
    Caixa,
    CaixaDaAlegria,
    TextItems,
    Text,
    ItiMaliaBotaoFofo,
    ItiMaliaBotaoA,
    ItiMaliaBotaoB,
    ItiMaliaBotaoC,
    

    
} from './styles';



export default function RightPainel() {
  
  const[book, setBook] = useState("");

  useEffect(() => {
    console.log();
  }, [])

  async function submitForm(){
      try{
        var result = await api.get('api/book')
        if(result.data){
          setBook(result.data);
        }

    }catch(exception){
      console.log(exception);
    }
  }

  }

  return (
    <Container>
        <Menu>
          <a href="/home"><ItiMaliaBotaoFofo>Home</ItiMaliaBotaoFofo></a>
          <a href="/bookregister"><ItiMaliaBotaoA>Cadastrar livro</ItiMaliaBotaoA></a>
          <a href="/list"><ItiMaliaBotaoB>Editar livros</ItiMaliaBotaoB></a>
        </Menu>
      <Caixa>
          <TextItems>Cadastrar Livro</TextItems>
          <Text>Nome do Livro</Text>
          <Nome name="Nome" placeholder="Ex: A Hora da Estrela" value={book.nome} onChange={e => setNome(e.target.value)}/>
          <Text>Autor</Text>
          <Autor name="Autor" placeholder="Ex: Clarice Lispector " value={book.autor} onChange={e => setAutor(e.target.value)}/>
          <Text>Editora</Text>
          <Editora name="Editora" placeholder="Ex: Clarice Lispector " />
          <Text>Quantidade de Páginas</Text>
          <Page name="QtdP" placeholder="Ex: 88" />
          <Text>Gênero</Text>
          <Cat name="Gen" placeholder="Ex: Romance" />
          <Text>Localização</Text>
          <Location name="Locate" placeholder="Ex: Prateleira Tal" />
          <a href="/bookregister"><ItiMaliaBotaoC>Cadastrar</ItiMaliaBotaoC></a>
      </Caixa>
    
    
        
    </Container>
  );

