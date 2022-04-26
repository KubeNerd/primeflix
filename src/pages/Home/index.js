import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import { api } from "../../services/api";
export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    language: 'pt-Br',
                    api_key: 'f9ca449c9909a070c160ce6cd0856faa',
                    page: 2,
                    adult: true
                }
            })
            setFilmes(response.data.results);
            setLoading(false)
        }

        loadFilmes();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes ...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}

            </div>
        </div>
    )
}

