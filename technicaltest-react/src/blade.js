import './input.css';

function Blade() {
    return (
        <main class="container mx-auto px-4 py-6">
            <article class="bg-white rounded">
                <ul>
                    <li>
                        <a>
                            <div class="grid grid-cols-2 gap-4 shadow-md p-6 items-end">
                                <div class="self-start">
                                    <h2 class="text-3xl font-bold mb-2"> Título da Notícia</h2>
                                    <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tortor a libero auctor commodo. Integer id lectus odio.</p>
                                    <span class="text-gray-500 self-end" >Publicado em: 23/10/2021</span>
                                </div>                                
                                <div class="">
                                    <img src="/noticiaprincipal.jpg" alt="Notícia" class="rounded"></img>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </article>
        </main>
    );
}

export default Blade;