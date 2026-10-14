import { use, useState } from "react";
import "./Emoji.css"
import Atributo from "./Atributo";

type EMOJI_KEYS = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "🤓"],
    ["sick", "🤒"],
    ["dead", "💀"]
]);

export default function Emoji() {
    let [status, setStatus] = useState<EMOJI_KEYS>("sick");
    let [vida, setVida] = useState(0);
    let [comida, setComida] = useState(0);
    let [agua, setAgua] = useState(0);
    let [energia, setEnergia] = useState(0);

    const ATRIBUTO_MAX = 5;

    function onAlimentar() {
        setComida(Math.min(ATRIBUTO_MAX, comida + 1));
    }

    function onHidratar() {
        setAgua(Math.min(ATRIBUTO_MAX, agua + 1));
    }

    function onLigarDesligar() {

    }

    function onCiclo() {
        switch (status) {
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            case "dead":
                setStatus("happy");
                break;
            default:
                setStatus("dead");
                break;
        }
    }

    return (
        <div className="emoji">
                <div className="face">
                    {EMOJI_MAP.get(status) || "🫥"}
                </div>
                <div className="atributos">
                    <Atributo icone="💚" valor={vida}></Atributo>
                    <Atributo icone="⚡" valor={energia}></Atributo>
                    <Atributo icone="🍹" valor={agua}></Atributo>
                    <Atributo icone="🥩" valor={comida}></Atributo>
                </div>
                <div className="acoes">
                    <button onClick={onAlimentar}>Alimentar</button>
                    <button onClick={onHidratar}>Hidratar</button>
                    <button onClick={onLigarDesligar}>Ligar Luz</button>
                    <button onClick={onCiclo}>Ciclo</button>
                </div>
        </div>
    );
}