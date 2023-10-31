import './input.css'

function Principal() {
    return (
        <div class="container mx-auto p-4">
            <div class="grid grid-cols-5 gap-8 p-5 shadow-md">


                <div  class="col-span-3 relative">
                    <div  class="bg-image bg-cover bg-center h-full">
                        <div class="absolute bottom-0 p-4 w-full">
                            <h2 class="text-3xl text-white font-bold" >noticia principal</h2>
                            <p class="text-sm text-white"> 10/10/10</p>
                        </div>
                    </div>
                </div>


                <div class="col-span-2 grid grid-rows-4 gap-4">

                    <div class=" h-32">
                        <img src="/noticiaprincipal.jpg" class="w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">10/10/10</p>
                            <h3 class="text-xl font-bold"> noticia 1</h3>
                        </div>
                    </div>
                    <div class=" h-32">
                        <img src="/noticiaprincipal.jpg" class="w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">10/10/10</p>
                            <h3 class="text-xl font-bold"> noticia 1</h3>
                        </div>
                    </div>
                    <div class=" h-32">
                        <img src="/noticiaprincipal.jpg" class="w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">10/10/10</p>
                            <h3 class="text-xl font-bold"> noticia 1</h3>
                        </div>
                    </div>
                    <div class=" h-32">
                        <img src="/noticiaprincipal.jpg" class="w-1/2 h-full object-cover float-left"></img>
                        <div class="p-4">
                            <p class="text-sm">10/10/10</p>
                            <h3 class="text-xl font-bold"> noticia 1</h3>
                        </div>
                    </div>

                </div>

            </div>

        </div>
);
}

export default Principal;