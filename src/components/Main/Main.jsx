import CardProdutos from "./CardProdutos";

export default function Main() {
    return (
        <main className="container my-4">
            <section className="row gap-4">
                <CardProdutos desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloribus sit, unde similique sed, autem obcaecati sapiente praesentium, fuga optio ex deleniti quos voluptate placeat facilis iure ab assumenda magni?" img="../public/fpi.webp" nome="Liga da Justiça: Ponto de Ignição" preco="50" />
                <CardProdutos desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloribus sit, unde similique sed, autem obcaecati sapiente praesentium, fuga optio ex deleniti quos voluptate placeat facilis iure ab assumenda magni?" img="../public/pm.webp" nome="Batman: A Piada Mortal" preco="40" />
                <CardProdutos desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloribus sit, unde similique sed, autem obcaecati sapiente praesentium, fuga optio ex deleniti quos voluptate placeat facilis iure ab assumenda magni?" img="../public/a1.jpg" nome="Batman: Ano Um" preco="98" />
            </section>
        </main>
    )
}
