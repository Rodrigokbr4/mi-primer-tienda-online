import { Link } from "react-router-dom";

export function FooterButtons () {
    return (
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
                <Link className="text-gray-700 transition hover:text-gray-700/75" to="/products">
                    productos
                </Link>
            </li>

            <li>
                <Link className="text-gray-700 transition hover:text-gray-700/75" to="/contact">
                    Contacto
                </Link>
            </li>

            <li>
                <Link className="text-gray-700 transition hover:text-gray-700/75" to="/faq" >
                    Sobre nosotros
                </Link>
            </li>

            <li>
                <Link className="text-gray-700 transition hover:text-gray-700/75" to="/faq">
                    Envios
                </Link>
            </li>

            <li>
                <Link className="text-gray-700 transition hover:text-gray-700/75" to="/faq">
                    Clientes
                </Link>
            </li>
        </ul>
    )
}