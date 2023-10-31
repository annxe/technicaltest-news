import './input.css'

function Principal() {
    return (
        <div class="container mx-auto p-4 hidden md:block">
            <div class="grid grid-cols-5 gap-8 p-5 shadow-md">
                <div  class="col-span-3 relative hidden md:block">
                    <div  class="bg-image bg-cover bg-center h-full">
                        <div class="absolute bottom-0 p-4 w-full">
                            <h2 class="text-3xl text-white font-bold">Israel bombardeia campo de refugiados em Gaza; Hamas afirma que há dezenas de mortos</h2>
                            <p class="text-sm text-white">Out 31, 2023</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 grid grid-rows-4 gap-4 hidden md:block">
                    <div class=" h-32 shadow-md">
                        <img src="/israel-palestinians.jpg" class="p-2 w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">Out 31, 2023</p>
                            <h3 class="text-base font-bold">Ministério israelense sugere enviar toda a população de Gaza ao Egito</h3>
                        </div>
                    </div>
                    <div class=" h-32 shadow-md">
                        <img src="/indigena-arara.jpg" class="p-2 w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">Out 31, 2023</p>
                            <h3 class="text-base font-bold">Indígena é achado morto no Pará duas semanas após fazer denúncia na ONU</h3>
                        </div>
                    </div>
                    <div class=" h-32 shadow-md">
                        <img src="/enem.jpg" class="p-2 w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">Out 31, 2023</p>
                            <h3 class="text-base font-bold">Passo a passo: como consultar local de prova do Enem</h3>
                        </div>
                    </div>
                    <div class=" h-32 shadow-md">
                        <img src="/cerveja.jpg" class="p-2 w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">Out 31, 2023</p>
                            <h3 class="text-base font-bold">Por que fabricantes de cerveja devem lucrar mais no próximo ano</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;