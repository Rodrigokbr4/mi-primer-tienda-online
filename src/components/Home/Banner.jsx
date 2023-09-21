import { ProductBanner } from "./ProductBanner";
import { TextBanner } from "./TextBanner";

export function Banner () {
    return (
        <>
        <section className="bg-gray-900 text-white grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-3 lg:px-12 lg:py-12 lg:pr-20">
            <TextBanner />           
            <ProductBanner />            
        </section>
</>
    )
}