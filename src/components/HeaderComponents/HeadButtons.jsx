import { Button } from "./Button"
import { SearchAndCartButtons } from "./SearchAndCartButtons"

export function HeadButtons ({isButtonDisabled}) {
    const headerButtons = {
        Inicio: "Inicio",
        Productos: "Productos",
        Contacto: "Contacto",
        faq: "Sobre nosotros",
        Usuario: "Usuario"
    }
    return (
        <>
            <div className=" flex flex-col items-start md:justify-center md:flex-row space-y-0.5 mx-3 md:mx-24 md:space-y-reverse md:space-x-3 md:py-4 ">
                <Button text={headerButtons.Inicio}/>
                <Button text={headerButtons.Productos} />
                <Button text={headerButtons.Contacto} />
                <Button text={headerButtons.faq} />
            </div>
            <div className="flex items-start py-4 mx-3 md:mx-0 md:my-0 md:py-2.5">
                {!isButtonDisabled ? (
                    <Button text={headerButtons.Usuario}/>
                ) : (
                    <SearchAndCartButtons isButtonDisabled={isButtonDisabled}/>
                )}
                
            </div>
        </>
    )
}