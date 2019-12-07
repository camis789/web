import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import { 
  Container, 
  
  Caixa,
  Menu,
  TextItems,
  BotaoMenuH,
  BotaoMenuC,
  Text
 

    
} from './styles';


export default function RightPainel() {
  const[book, setBook] = useState();

  useEffect(() => {
      async function loadInfo(){
          try{
              var result = await api.get('api/book/list');
              if(result.data){
                  setBook(result.data.book);
              }else{
                  alert("Não foi possivel reproduzir as informações.");
              }
          }catch(exception){
              console.log(exception);
          }
      }

      loadInfo();
  }, []);

  async function clickEdit(id){
      try{
            var result = await api.get('api/book/list'+id);
            if(result.data){
              console.log(result.data);
            }else{
              alert("Não foi possivel reproduzir as informações.");
            }
      }catch(exception){
          console.log(exception);
      }
  }

return (
  <div>
      { book != null &&
          book.map((book, id) => 
              <Container key={id}>
                  <a onClick={() => clickEdit(book.id)}><Text>{book.name}</Text></a>  
              </Container>
          )
      }
  </div>
);

}
