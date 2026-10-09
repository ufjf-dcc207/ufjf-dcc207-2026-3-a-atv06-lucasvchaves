import { useState } from "react";
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

    function happyClick() {
        console.log("Happy");
        setStatus("happy");
    }

    function sickClick() {
        console.log("Happy");
        setStatus("sick");
    }

    function deadClick() {
        console.log("Happy");
        setStatus("dead");
    }

    function cycleStatus() {
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
        <>
            <div className="emoji">
                <div className="status">
                    {EMOJI_MAP.get(status) || "🫥"}
                </div>
                <div className="atributos">
                    <Atributo icone="💚"></Atributo>
                    <Atributo icone="⚡"></Atributo>
                    <Atributo icone="🩸"></Atributo>
                    <Atributo icone="🥩"></Atributo>
                </div>
                <div className="acoes">
                    <button onClick={happyClick}>Happy</button>
                    <button onClick={sickClick}>Sick</button>
                    <button onClick={deadClick}>Dead</button>
                    <button onClick={cycleStatus}>Cycle</button>
                </div>
            </div>
        </>
    );
}