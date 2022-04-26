import React from "react";
import { Link, useParams } from "react-router-dom";
import "./erro.css";

export default function Erro() {
    return (
        <>
            <div className="erro">
                <h1>404</h1>
                <h2>Página Não Encontrada!</h2>
                <Link to="/">Ir Para a Página Home</Link>
            </div>

        </>
    )
}