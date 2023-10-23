import './Header.css'

function Header() {
    return (
        <header className="bg-purple">
            <div className="title">
                <h1>Raion News</h1>
            </div>
            <div className="search">
                <input type="text" className="search_input"></input>
                <button className="search_button">
                    <svg className="search_icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div id="filtro" >
                <ul id="lista-filtro">
                    <li>Selecione um filtro:</li>
					<li><a id="negocios" href="">Negócios</a></li>
					<li><a id="entretenimento" href="">Entretenimento</a></li>
					<li><a id="saude" href="">Saúde</a></li>
					<li><a id="geral" href="">Geral</a></li>
					<li><a id="ciencia" href="">Ciência</a></li>
					<li><a id="esportes" href="">Esportes</a></li>
					<li><a id="tecnologia" href="">TEcnologia</a></li>
				</ul>
            </div>
        </header>
    );
}

export default Header;
