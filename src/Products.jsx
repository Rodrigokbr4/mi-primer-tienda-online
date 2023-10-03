import { Body } from "./components/Products/Body"
import { Header } from "./components/Products/Header"
import { SideBar } from "./components/Products/SideBar"


function Products() {
  

  return (
    <>       
      <section>
        
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            
            <Header />
            <Body />
              
            </div>          
        </section>
    </>    
  )
}

export default Products