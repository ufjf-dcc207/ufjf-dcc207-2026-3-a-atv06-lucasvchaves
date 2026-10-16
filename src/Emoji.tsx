import { useState } from "react";
import "./Emoji.css"
import Atributo from "./Atributo";
import type { EMOJI_KEYS, EmojiType } from "./types";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "🤓"],
    ["sick", "🤒"],
    ["dead", "💀"]
]);

export default function Emoji() {
    const [emoji, setEmoji] = useState<EmojiType>({
        vida: 5,
        agua: 2,
        comida: 3,
        energia: 4,
        luz: true,
    });

    const [vida, setVida] = useState<number>(5);
    const [comida, setComida] = useState<number>(5);
    const [agua, setAgua] = useState<number>(5);
    const [energia, setEnergia] = useState<number>(5);
    const [luz, setLuz] = useState<boolean>(true);

    const ATRIBUTO_MAX = 5;

    function onAlimentar() {
        if (emoji.vida === 0) return;
        // Maneira bosta de fazer
        const novoEmoji = structuredClone(emoji);
        novoEmoji.comida = (Math.min(ATRIBUTO_MAX, emoji.comida + 1));
        setEmoji(novoEmoji);
    }

    function onHidratar() {
        if (emoji.vida === 0) return;
        // Maneira menos bosta de fazer
        setEmoji({...emoji, agua:(Math.min(ATRIBUTO_MAX, emoji.agua + 1))});
    }

    function onLigarDesligar() {
        setEmoji({...emoji, luz: (!emoji.luz)});
    }

    function onCiclo() {
        if (emoji.vida === 0) return;

        const newEmoji = structuredClone(emoji);
        if (newEmoji.comida === 0) {
            newEmoji.vida = Math.max(0, newEmoji.vida - 1);
        }
        newEmoji.comida = Math.max(0, emoji.comida - 1);

        if (newEmoji.agua === 0) {
            newEmoji.vida = Math.max(0, newEmoji.vida - 1);
        }
        newEmoji.agua = Math.max(0, newEmoji.agua - 1);

        if (newEmoji.luz) {
            if (newEmoji.energia === 0) {
                newEmoji.vida = Math.max(0, newEmoji.vida - 1);
            }
            newEmoji.energia = Math.max(0, newEmoji.energia - 1);
        } else {
            newEmoji.energia = Math.min(5, newEmoji.energia + 1);
        }
        setEmoji(newEmoji);
    }

    let status = EMOJI_MAP.get("happy");
    if (emoji.agua === 0 || emoji.comida === 0 || emoji.energia === 0) {
        status = EMOJI_MAP.get("sick");
    }
    if (emoji.vida === 0) {
        status = EMOJI_MAP.get("dead");
    }

    return (
        <div className="emoji">
                <div className="face">
                    {status}
                </div>
                <div className="atributos">
                    <Atributo icone="💚" valor={emoji.vida}></Atributo>
                    <Atributo icone="⚡" valor={emoji.energia}></Atributo>
                    <Atributo icone="🍹" valor={emoji.agua}></Atributo>
                    <Atributo icone="🥩" valor={emoji.comida}></Atributo>
                    {emoji.luz && "💡"}
                </div>
                <div className="acoes">
                    <button onClick={onAlimentar}>Alimentar</button>
                    <button onClick={onHidratar}>Hidratar</button>
                    <button onClick={onLigarDesligar}>{emoji.luz ? "Desligar" : "Ligar"} Luz</button>
                    <button onClick={onCiclo}>Ciclo</button>
                </div>
        </div>
    );
}