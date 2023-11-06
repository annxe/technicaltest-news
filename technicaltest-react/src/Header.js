import './input.css'

function Header() {
    return (
      <header>
        <div class="bg-purple-900 p-4 md:p-10 flex justify-between items-center">
          <div className="text-center text-xl text-white font-medium flex-1">
            <h1>Raion News</h1>
          </div>
          <div class="mt-3 md:mt-0 md:ml-4 flex items-center">
            <input  type="searh" class="bg-purple-700 text-gray-900 p-2 rounded  hidden md:block" placeholder="Pesquisar..."></input>
            <button class="bg-purple-900 md:bg-purple-950 text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div> 
        <div class="flex justify-center bg-neutral-100 text-black p-8 md:p-5">
          <ul class="flex flex-wrap justify-center items-center">
            <li class="mr-5 md:mr-5 font-bold text-purple-950"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg></li>
            <li class="mr-5 md:mr-5 pr-5 font-bold text-gray-400"><p>Selecione um filtro:</p></li>
            <li class="mr-5 pr-5 text-amber-600 border-r-2"><a href="">Entretenimento</a></li>
            <li class="mr-5 pr-5 text-fuchsia-800 border-r-2"><a href="">Saúde</a></li>
            <li class="mr-5 pr-5 text-sky-300 border-r-2"><a href="">Geral</a></li>
            <li class="mr-5 pr-5 text-blue-800 border-r-2"><a href="">Ciência</a></li>
            <li class="mr-5 pr-5 text-green-500 border-r-2"><a href="">Esportes</a></li>
            <li class="mr-5 pr-5 ext-violet-800"><a href="">Tecnologia</a></li>
          </ul>
        </div>
      </header>
    );
  }
  
  export default Header; 