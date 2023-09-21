export function HeadBar() {
    return (
      <div className="grid grid-cols-8 border-b-2">
        <div></div>
        <div className="flex justify-center col-span-3 pl-6 py-3 font-mono text-xs divide-x ">
          <a className="pr-3" href="tel:+543544999999">
            +54 3544 999999
          </a>  
          <a className="pl-3" href="mailto:alguien@correo.com">
            alguien@correo.com
          </a>
        </div>
       
        <div></div>
        <div className="flex justify-center col-span-2 pl-8 py-3 font-mono text-xs divide-x ">
          <button className="pr-3">Iniciar sesión</button>
          <button className="pl-3">Crear cuenta</button>
        </div>       
        <div></div>
        
        <div></div>        
        <div></div>        
        <div></div>

        
        
      </div>
    );
  }
  