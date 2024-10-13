export default function CardProdutos( {img, nome, preco, desc} ) {
    return (
        <div className="d-flex flex-column col-sm rounded bg-dark p-4 gap-2 align-items-center">
            <h5 className="text-white align-self-start">{nome}</h5>
            <img height={300} width={190} src={img} alt="imagem da hq"/>
            <p className="text-success"><b>R$ {preco}</b></p>
            <p className="text-white">{desc}</p>
            <button className="bg-primary rounded border-primary">Comprar</button>
        </div>
    )
}