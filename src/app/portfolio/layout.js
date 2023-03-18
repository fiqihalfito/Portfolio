import PortfolioNav from "./_portfolio_components/PortfolioNav"

export const metadata = {
    title: 'Portfolio',
    description: 'Generated by create next app',
}

export default function PortfolioLayout({ children }) {
    return (
        <div className="mx-20">
            <PortfolioNav />
            {children}
        </div>
    )
}