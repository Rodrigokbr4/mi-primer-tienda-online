import { SearchIcon } from "../../Icons/iconMenu";

export function Search ({isButtonDisabled}) {
    return (
        <div>
            {!isButtonDisabled ? (
                    <button className="flex flex-row pt-2.5">
                        <SearchIcon /> 
                    </button>
                ) : (
                    <div className="flex flex-row">
                        <input type="search" className=" border-2 rounded-md border-black pl-3 py-1 outline-none  " placeholder="Buscar" />
                            <div className="flex pt-1.5 pb-1.5 pl-1.5 pr-2.5">
                                <SearchIcon />  
                            </div>
                    </div>
                )}            
        </div>
        
    )
}