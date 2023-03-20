import PortfolioNav from "./_portfolio_components/PortfolioNav"
import { PortfolioSettingProvider } from "./_settings"

export const metadata = {
    title: 'Portfolio',
    description: 'Generated by create next app',
}

export default function PortfolioLayout({ children }) {
    return (
        <div>
            <PortfolioNav />
            <PortfolioSettingProvider>
                {children}
            </PortfolioSettingProvider>
        </div>
    )
}