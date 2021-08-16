import { useState, useEffect } from "react";
import * as S from "./styled";
import Banner from "./assets/banner.png"


function App() {
  const [personagens, setPersonagem] = useState([]);
  const [busca,setBusca] = useState ('');
  const [filtro,setFiltro] = useState ([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setPersonagem(data.results))
  }, []);

 useEffect(() => {
   setFiltro(
     personagens.filter(personagem =>{
       return personagem.name.includes(busca)
     })
   )
 }
 ,[busca,personagens])

  console.log(personagens)



  return (

    <S.Main>

      <S.Banner src= {Banner} alt="Banner Rick E Morty" width/> 
      <S.Busca
       placeholder="Digite o nome do personagem " 
       onChange= { e =>{setBusca (e.target.value)} }
      />



      <S.Cards >
        {filtro.map(personagem =>
          <div >
            <p>{personagem.name}</p>
            <S.Imagens src={personagem.image} alt="Rick" />
          
          </div>
        )}
      </S.Cards>


    </S.Main>
  );

}
export default App;
