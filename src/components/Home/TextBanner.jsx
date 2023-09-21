export function TextBanner () {
    return (
        <div className="p-8 md:pr-24 lg:pt-0 lg:pr-6 lg:py-0 xl:pt-3 2xl:pt-20">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Nuevas Remeras
            </h2>
            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed ">
                Nuestras remeras están confeccionadas con los materiales de la más alta calidad para garantizar comodidad y durabilidad. Además, cada diseño ha sido cuidadosamente pensado para reflejar tu individualidad y personalidad. Ya sea que busques una prenda elegante para una salida nocturna o una remera cómoda para el uso diario, tenemos algo para cada ocasión.
            </p>

            <div className="mt-4 sm:mt-8">
                <a href="#" className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-white">
                    Ver mas
                </a>
            </div>                
        </div> 
    )
}