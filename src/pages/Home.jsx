import {MainSlider, Destaques, Categorias, ProdutosDestaque, OfertaEspecial} from "../components/Section"

function Home() {
    return <>
        <main>
            <MainSlider/>
            <Destaques/>
            <Categorias/>
            <ProdutosDestaque/>
            <OfertaEspecial/>
        </main>
    </>
}

export default Home;