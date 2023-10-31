import './input.css'

function Header() {
    return (
      <header>
        <div class="bg-purple-900 p-4 md:p-10 flex justify-between items-center">
          <div className="text-center text-xl text-white font-medium flex-1">
            <h1>Raion News</h1>
          </div>
          <div class="mt-3 md:mt-0 md:ml-4">
            <input  type="searh" class="bg-white text-gray-900 p-2 rounded" placeholder="Pesquisar..."></input>
            <button class="bg-blue-500 text-white px-3 py-2 rounded">Buscar</button>
          </div>
        </div> 
        <div class="flex justify-center bg-neutral-100 text-black p-8 md:p-5">
          <ul class="flex flex-wrap">
            <li class="mr-5 md:mr-5 pr-5 font-bold text-gray-400"><p>Selecione um filtro:</p></li>
            <li class="mr-5 pr-5 text-amber-600 border-r-2"><a href="">Entretenimento</a></li>
            <li class="mr-5 pr-5 text-fuchsia-800 border-r-2"><a href="produtos.html">Saúde</a></li>
            <li class="mr-5 pr-5 text-sky-300 border-r-2"><a href="contato.html">Geral</a></li>
            <li class="mr-5 pr-5 text-blue-800 border-r-2"><a href="contato.html">Ciência</a></li>
            <li class="mr-5 pr-5 text-green-500 border-r-2"><a href="contato.html">Esportes</a></li>
            <li class="mr-5 pr-5 ext-violet-800"><a href="contato.html">Tecnologia</a></li>
          </ul>
        </div>
      </header>
    );
  }
  
  export default Header;