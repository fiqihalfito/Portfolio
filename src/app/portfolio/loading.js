

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
            {Array.from({ length: 9 }).map((el, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                    <div className="h-52 bg-slate-300 dark:bg-cyan-900">
                        {/* photo placeholder */}
                    </div>
                    <div className="bg-slate-400 dark:bg-slate-800 p-8">
                        {/* text placeholder */}
                        <div className="h-4 w-full bg-slate-500 mb-4"></div>
                        <div className="h-4 w-1/2 bg-slate-500"></div>
                    </div>
                </div>
            ))}
        </div>

    )
}