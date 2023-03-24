const EducationCard = ({ edu }) => {
    return (
        // <div className="group flex items-center h-52 relative">
        //     {/* bar */}
        //     <div className="mr-20 bg-lime-600 w-1 h-full group-first:h-1/2 group-last:h-1/2 absolute group-first:bottom-0 group-last:top-0 " />

        //     {/* dot wrapper */}
        //     <div className="mr-20 group-first:h-1/2 group-last:h-1/2 w-1 relative">
        //         {/* dot */}
        //         <div className="w-4 h-4 rounded-full bg-lime-600 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
        //     </div>

        //     {/* info */}
        //     <div className="">
        //         <p className="text-3xl font-bold">{edu.schoolInd}</p>
        //         <p className="text-sm">{edu.schoolEng}</p>
        //         <p className="text-sm">{edu.graduationYear}</p>
        //     </div>
        // </div>
        <div className="px-8 py-4 border-4 border-amber-400 bg-amber-200 rounded-lg grid grid-cols-2">
            <div>
                <p className="text-6xl font-bold text-amber-500">{edu.graduationYear}</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-black">{edu.schoolInd}</p>
                <p className="text-slate-800 font-medium">{edu.schoolEng}</p>
            </div>
        </div>

    )
}

export default EducationCard