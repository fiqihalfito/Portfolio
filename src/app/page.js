import Image from 'next/image'
import imageProfil from '@/assets/images/profil.jpg'
import NavBar from './_root_components/NavBar'
import { education } from '@/lib/education'
import EducationCard from './_root_components/EducationCard'
import SkillChart from './_root_components/SkillChart'
import SkillAccordion from './_root_components/SkillAccordion'
import { certifications } from '@/lib/certifications'
import CertificationCard from './_root_components/CertificationCard'

// const SkillChart = dynamic(() => import('./_root_components/SkillChart'))


export default function Home() {
    return (
        <div className=' '>

            {/* section 1 */}
            <section className='flex flex-col h-screen'>

                <NavBar segment={'home'} />

                <div className='flex-grow flex flex-col items-center justify-center'>
                    <Image
                        src={imageProfil}
                        alt="profil"
                        // width={250}
                        quality={100}
                        placeholder="blur"
                        className="h-12x w-60 rounded-full mb-6"
                        priority />
                    <p className={`font-bold text-2xl tracking-wide`}>Fiqih Alfito, S.Kom</p>
                    <p className={``}>Bachelor of Computer Science</p>
                </div>

            </section>

            {/* section 2 */}
            <section className='px-40 py-32 bg-amber-50x  '>
                <p className='text-6xl font-bold mb-8'>Education</p>
                <div className='space-y-4'>
                    {education.map((item, i) => (
                        <EducationCard key={i} edu={item} />
                    ))}
                </div>
            </section>

            {/* section 3 */}
            <section className='px-40 py-32 '>
                <p className='text-6xl font-bold mb-8'>Licenses & Certifications</p>
                <div className='grid grid-cols-2 gap-8'>
                    {certifications.map((cert, i) => (
                        <CertificationCard cert={cert} />
                    ))}
                </div>

            </section>

            {/* section 4 */}
            <section className='px-40 py-32 '>
                <p className='text-6xl font-bold mb-4'>Skills</p>

                <div className='grid grid-cols-3 '>
                    <div className='h-[80vh] col-span-2'>
                        <SkillChart />
                    </div>
                    <div className='place-self-center'>
                        <SkillAccordion />
                    </div>
                </div>


            </section>

        </div>
    )
}
