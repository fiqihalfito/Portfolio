const RepoWrapper = ({ children }) => {
    return (
        <div className="grid grid-cols-3 gap-8 mb-12">
            {children}
        </div>
    )
}

export default RepoWrapper