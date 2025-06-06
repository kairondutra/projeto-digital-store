function FilterGroup(){
    return (
            <div className="Filtro">
                <p><strong>Filtrar por:</strong></p>
                <p><strong>Marca</strong></p>
                <div className="filtro-item">
                    <input type="checkbox" id="adidas" />
                    <label htmlFor="adidas">Adidas</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="nike" />
                    <label htmlFor="nike">Nike</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="puma" />
                    <label htmlFor="puma">Puma</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="kswiss" />
                    <label htmlFor="kswiss">K-Swiss</label>
                </div>

                <p><strong>Categoria</strong></p>
                <div className="filtro-item">
                    <input type="checkbox" id="esporteLazer" />
                    <label htmlFor="esporteLazer">Esporte e Lazer</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="casual" />
                    <label htmlFor="casual">Casual</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="utilitario" />
                    <label htmlFor="utilitario">Utilitário</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="corrida" />
                    <label htmlFor="corrida">Corrida</label>
                </div>

                <p><strong>Gênero</strong></p>
                <div className="filtro-item">
                    <input type="checkbox" id="masculino" />
                    <label htmlFor="masculino">Masculino</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="feminino" />
                    <label htmlFor="feminino">Feminino</label>
                </div>
                <div className="filtro-item">
                    <input type="checkbox" id="unissex" />
                    <label htmlFor="unissex">Unissex</label>
                </div>
                
            </div>
    )
}

export default FilterGroup;