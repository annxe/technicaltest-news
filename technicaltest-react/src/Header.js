import './input.css'

function Header() {
    return (
      <header>
        <div class="bg-purple-900 p-10">
          <div className="text-center text-xl text-white font-medium">
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
        </div>
        <div class="flex justify-center bg-neutral-100 text-black p-5">
          <ul class="flex">
            <li class="mr-5 font-bold text-gray-400"><p>Selecione um filtro:</p></li>
            <li class=" mr-5 text-red-600"><a href="index.html">Negócios</a></li>
            <li class="mr-5 text-amber-600"><a href="sobre.html">Entretenimento</a></li>
            <li class="mr-5 text-fuchsia-800"><a href="produtos.html">Saúde</a></li>
            <li class="mr-5 text-sky-300"><a href="contato.html">Geral</a></li>
            <li class="mr-5 text-blue-800"><a href="contato.html">Ciência</a></li>
            <li class="mr-5 text-green-500"><a href="contato.html">Esportes</a></li>
            <li class="mr-5 text-violet-800"><a href="contato.html">Tecnologia</a></li>
          </ul>
        </div>
      </header>
    );
  }
  
  export default Header;