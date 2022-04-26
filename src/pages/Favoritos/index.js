import "./favoritos.css";
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);
    
    useEffect(() =>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    function excluirFilme(id){
   
       const deletar = window.confirm(`Deseja mesmo deletar este filme ?`)
        if(deletar){
          const filtroFilmes = filmes.filter((item) =>{
              return(item.id !== id)
          });

          setFilmes(filtroFilmes);
          localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
          toast.success("Filme Deletado Com Sucesso!")

        }
        
    } ;  
    return(

        <div className="meusfilmes">
            <h1>Filmes salvos</h1>  
            <ul>
            {filmes.map(( filme ) =>{
                return(
                   
                    <li key={filme.id}>
                         <span>{filme.title}</span>
                        <div>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes do Filme</Link>
                            <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}


