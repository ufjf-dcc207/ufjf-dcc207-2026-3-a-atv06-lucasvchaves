import { useState } from "react"
import "./Atributo.css"

type AtributoProps = {
    icone: string,
}

export default function Atributo({icone}: AtributoProps) {
    const [val, setVal] = useState(3);
    const ATRIBUTO_MAX = 5;

    function changeVal(prevVal: number) {
        if (prevVal === ATRIBUTO_MAX) {
            setVal(0);
        } else {
            setVal(prevVal + 1);
        }
        
        console.log(val);
    }

    return (
        <>
            <div className="atributo">
                <div className="ativo">{icone.repeat(val)}</div>
                <div className="inativo">{icone.repeat(ATRIBUTO_MAX - val)}</div>
            </div>
        </>
    );
}