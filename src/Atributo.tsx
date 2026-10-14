import "./Atributo.css"

type AtributoProps = {
    icone: string,
    valor: number,
}

export default function Atributo({icone, valor}: AtributoProps) {
    const ATRIBUTO_MAX = 5;

    return (
        <>
            <div className="atributo">
                <div className="ativo">{icone.repeat(valor)}</div>
                <div className="inativo">{icone.repeat(ATRIBUTO_MAX - valor)}</div>
            </div>
        </>
    );
}