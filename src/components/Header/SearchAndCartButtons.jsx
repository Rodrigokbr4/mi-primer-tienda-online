import { Search } from "./Search"
import { Cart } from "./Cart"

export function SearchAndCartButtons ({isButtonDisabled}) {
    return (
        <div className="flex justify-end">
            <Search isButtonDisabled={isButtonDisabled} />
            <Cart />
        </div>
    )
}