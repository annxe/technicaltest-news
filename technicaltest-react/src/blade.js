import './input.css';

function Blade() {
    return (
        <main class="container mx-auto px-4 py-6">
            <article class="bg-white rounded">
                <div>
                <p class="font-bold py-2">Mais lidas da semana</p>
                <ul>
                    <li>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md p-6 items-end md:flex-row md:flex-col">
                            <div class="self-start">
                                <h2 class="text-3xl font-bold mb-2">Explosão deixa mortos em campo de refugiados em Gaza</h2>
                                <span class="text-gray-500" >Out 23, 2023</span>
                            </div>                                
                            <div class="self-center md:self-end">
                                <img src="/noticiaprincipal.jpg" alt="Notícia" class="rounded"></img>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md p-6 items-end md:flex-row md:flex-col">
                            <div class="self-start">
                                <h2 class="text-3xl font-bold mb-2">Ministério israelense sugere enviar toda a população de Gaza ao Egito</h2>
                                <span class="text-gray-500" >Out 31, 2023</span>
                            </div>                                
                            <div class="self-center md:self-end">
                                <img src="/israel-palestinians.jpg" alt="Notícia" class="rounded"></img>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md p-6 items-end md:flex-row md:flex-col">
                            <div class="self-start">
                                <h2 class="text-3xl font-bold mb-2">Indígena é achado morto no Pará duas semanas após fazer denúncia na ONU</h2>
                                <span class="text-gray-500">Out 31, 2023</span>
                            </div>                                
                            <div class="self-center md:self-end">
                                <img src="/indigena-arara.jpg" alt="Notícia" class="rounded"></img>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md p-6 items-end md:flex-row md:flex-col">
                            <div class="self-start">
                                <h2 class="text-3xl font-bold mb-2">Reforma tributária: economistas criticam exceções, mas defendem aprovação</h2>
                                <span class="text-gray-500">Out 31, 2023</span>
                            </div>                                
                            <div class="self-center md:self-end">
                                <img src="/reforma-tributaria.jpg" alt="Notícia" class="rounded"></img>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </article>
        </main>
    );
}

export default Blade;