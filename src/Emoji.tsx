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
    const [vida, setVida] = useState<number>(5);
    const [comida, setComida] = useState<number>(5);
    const [agua, setAgua] = useState<number>(5);
    const [energia, setEnergia] = useState<number>(5);
    const [luz, setLuz] = useState<boolean>(true);

    const ATRIBUTO_MAX = 5;

    function onAlimentar() {
        if (vida === 0) return;
        setComida(Math.min(ATRIBUTO_MAX, comida + 1));
    }

    function onHidratar() {
        if (vida === 0) return;
        setAgua(Math.min(ATRIBUTO_MAX, agua + 1));
    }

    function onLigarDesligar() {
        setLuz(!luz);
    }

    function onCiclo() {
        if (vida === 0) return;

        setComida(Math.max(0, comida - 1));
        if (comida === 0) {
            setVida(Math.max(0, vida - 1));
        }

        setAgua(Math.max(0, agua - 1));
        if (comida === 0) {
            setVida((prevVida) => Math.max(0, prevVida - 1));
        }

        if (luz) {
            setEnergia(Math.max(0, energia - 1));
        } else {
            setEnergia(Math.min(ATRIBUTO_MAX, energia + 1));
        }
    }

    let status = EMOJI_MAP.get("happy");
    if (agua === 0 || comida === 0 || energia === 0) {
        status = EMOJI_MAP.get("sick");
    }
    if (vida === 0) {
        status = EMOJI_MAP.get("dead");
    }

    return (
        <div className="emoji">
                <div className="face">
                    {status}
                </div>
                <div className="atributos">
                    <Atributo icone="💚" valor={vida}></Atributo>
                    <Atributo icone="⚡" valor={energia}></Atributo>
                    <Atributo icone="🍹" valor={agua}></Atributo>
                    <Atributo icone="🥩" valor={comida}></Atributo>
                    {luz && "💡"}
                </div>
                <div className="acoes">
                    <button onClick={onAlimentar}>Alimentar</button>
                    <button onClick={onHidratar}>Hidratar</button>
                    <button onClick={onLigarDesligar}>{luz ? "Desligar" : "Ligar"} Luz</button>
                    <button onClick={onCiclo}>Ciclo</button>
                </div>
        </div>
    );
}