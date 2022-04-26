import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";

export default function RoutesApp() {
    return (
        <>
            <Header />

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="*" element={<Erro />}></Route>
                <Route path="/filme/:id" element={<Filme />}></Route>
                <Route path="/favoritos" element={<Favoritos/>}></Route>
            </Routes>


        </>
    )
};