import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { HeadButtons } from "./HeadButtons";
import { IconMenu, CloseIcon } from "../../Icons/iconMenu.jsx"
import { HeadBar} from "./HeadBar.jsx"
import { SearchAndCartButtons } from "./SearchAndCartButtons";

export function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function changeNavBar() {
        setIsMenuOpen(!isMenuOpen);
    }

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsButtonDisabled(true);
            } else {
                setIsButtonDisabled(false);
            }
        }
    
        // Llama a handleResize cuando se monta el componente para establecer el estado inicial
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Agrega window.innerWidth como dependencia
    

    return (
        <header className="bg-white shadow-md">
            {isButtonDisabled && (<HeadBar />)}
            
            <nav className=" grid grid-cols-3 mx-3 my-3 md:grid-cols-3 md:mx-0">
            {!isButtonDisabled && (
                    <button className=" " onClick={changeNavBar} disabled={isButtonDisabled}>
                        {isMenuOpen ? (
                            <CloseIcon/>
                        ) : (
                            <IconMenu/>
                        )}
                    </button>    
                )}

                <Logo />
                {isButtonDisabled && (<HeadButtons isButtonDisabled={isButtonDisabled}/>)}
                {!isButtonDisabled && (<SearchAndCartButtons />)}
                
            </nav>
            <div className="flex flex-col mx-6 my-3 md:flex-row md:justify-center">{isMenuOpen && !isButtonDisabled && (<HeadButtons />)}</div>
        </header>
    )        
}