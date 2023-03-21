const SkillBar = ({ skill }) => {
    return (
        <div className='grid grid-cols-10 gap-x-4 items-center'>
            <div className=''>
                <p className='text-lg'>{skill.name}</p>
            </div>
            <div className='col-start-2 col-end-11'>
                <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden relative'>
                    <div className={`absolute ${skill.width} h-full bg-amber-500`} />
                </div>
            </div>
        </div>
    )
}

export default SkillBar