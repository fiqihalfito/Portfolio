"use client"

import { skills } from "@/lib/skills"
import { useState } from "react"
import { motion } from "framer-motion"

const SkillAccordion = () => {

    const [tabShow, setTabShow] = useState(0)

    const handleClick = (i) => {
        if (i === tabShow) {
            setTabShow(-1)
            return
        }

        setTabShow(i)
    }

    return (
        <div className="">
            {skills.map((skill, i) => (
                <motion.div
                    key={i}

                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2
                    }}

                    className="group border-2 border-b-0 last:border-b-2 last:rounded-b-lg first:rounded-t-lg py-4 px-6">
                    <div className=" flex justify-between items-center ">
                        <p className="font-bold text-xl">{skill.name}</p>

                        <button
                            className="px-4 py-1 border-2 rounded-full text-xs invisible group-hover:visible hover:border-amber-400 hover:text-amber-500 hover:bg-amber-50"
                            onClick={() => handleClick(i)}>
                            {tabShow === i ? 'less' : 'more'}
                        </button>
                    </div>


                    <div className={`${tabShow === i ? 'max-h-96 duration-700' : 'max-h-0 duration-300'} overflow-hidden text-justify transition-all ease-in-out `}>
                        <p className="text-sm pt-2 dark:text-slate-300">{skill.desc}</p>
                    </div>


                </motion.div>
            ))}

        </div>
    )
}

export default SkillAccordion