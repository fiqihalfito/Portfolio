import NavBar from "../_root_components/NavBar"
import PortfolioNav from "./_portfolio_components/PortfolioNav"
import { PortfolioSettingProvider } from "./_settings"

export const metadata = {
    title: 'Portfolio',
    description: 'Repositories',
}

export default function PortfolioLayout({ children }) {

    return (
        <div className="">
            <NavBar segment={'portfolio'} />
            <div className="md:custom-container">
                <PortfolioNav />
                <PortfolioSettingProvider>
                    {children}
                </PortfolioSettingProvider>
            </div>
        </div>
    )
}