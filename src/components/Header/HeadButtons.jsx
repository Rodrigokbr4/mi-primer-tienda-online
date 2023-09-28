import { Button } from "./Button"
import { SearchAndCartButtons } from "./SearchAndCartButtons"
import { Link } from "react-router-dom"

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
                <Link to="/">{headerButtons.Inicio}</Link>
                <Link to="/products">{headerButtons.Productos}</Link>
                <Link to="/contact">{headerButtons.Contacto}</Link>
                <Link to="/faq">{headerButtons.faq}</Link>
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