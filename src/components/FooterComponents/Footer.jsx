import { LogoFooter } from "./LogoFooter"
import { AboutText } from "./AboutText"
import { FooterButtons } from "./FooterButtons"
import { SocialNetworksButtons } from "./SocialNetworksButtons"


export function Footer () {
    return (
        <footer className="bg-white shadow">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <LogoFooter />
            <AboutText />
            <FooterButtons />
            <SocialNetworksButtons />
        </div>
    </footer>
    )
}