import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast  } from "react-toastify";
import { api } from "../../services/api";
import "./filme.css";

export default function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'f9ca449c9909a070c160ce6cd0856faa',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    console.log(response.data)
                    setFilme(response.data)
                })
                .catch((error) => {
                    console.log(`Erro ao tentar carregar dados do filme`, error);
                    navigate("/", { replace:true});
                });

          
        }

        loadFilme();
        setLoading(false);
        

    }, [id, navigate]);


    const ytFilme = `https://www.youtube.com/results?search_query=${filme.title} Trailer`;


    function savarFilme(){
        const minhaLista = localStorage.getItem('@primeflix');
        const filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id == filme.id);
        
        if(hasFilme){
            toast.error('Este Filme Já Está Em Sua Lista.');
            return;
        }   
        
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix",JSON.stringify(filmesSalvos));
        toast.success('Filme Salvo Com Sucesso!');
    
    }


    

    if (loading) {
        return (
            <div className="loading">
                {/* <h2>Carregando detalhes do filme ...</h2> */}
                {/* {toast.loading('Loading Filmes')} */}
            </div>
        )
    }

    return (
        <div className="filme-info">
                <strong>{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                <label style={{ 'fontSize': '10px' }}> Titulo Original: {filme.original_title}</label>

                <h3>Sinopse:</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação:{filme.vote_average} /10</strong>

                <div className="area-button">
                    <button onClick={savarFilme}>Salvar</button>
                    <button><a rel="external" href={ytFilme} target="_blank">Trailer</a></button>
                </div>
        </div>

    );
};