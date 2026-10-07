import { useState } from "react";
import "./Emoji.css"

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
    
    return (
        <>
            <div className="emoji">
                {EMOJI_MAP.get(status) || "🫥"} 
            </div>
            <div className="acoes">
                <button onClick={happyClick}>Happy</button>
                <button>Sick</button>
                <button>Dead</button>
            </div>
        </>
    );
}