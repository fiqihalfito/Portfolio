import Image from 'next/image'
import imageProfil from '@/assets/images/profil.jpg'
import NavBar from './_root_components/NavBar'
import { education } from '@/lib/education'
import EducationCard from './_root_components/EducationCard'
import SkillChart from './_root_components/SkillChart'
import SkillAccordion from './_root_components/SkillAccordion'
import { certifications } from '@/lib/certifications'
import CertificationCard from './_root_components/CertificationCard'
import SocialMediaLinks from './_root_components/SocialMediaLinks'



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
                        // quality={100}
                        placeholder="blur"
                        className="h-12x w-60 rounded-full mb-6"
                        priority />
                    <p className={`font-bold text-2xl tracking-wide`}>Fiqih Alfito, S.Kom</p>
                    <p className={``}>Bachelor of Computer Science</p>
                    <SocialMediaLinks />
                </div>

            </section>

            {/* section 2 */}
            <section className='md:section-padding mb-20 md:mb-0 bg-amber-50x  '>
                <p className='text-5xl md:text-6xl font-bold mb-8'>Education</p>
                <div className='space-y-4'>
                    {education.map((item, i) => (
                        <EducationCard key={i} edu={item} />
                    ))}
                </div>
            </section>

            {/* section 3 */}
            <section className='md:section-padding mb-20 md:mb-0'>
                <p className='text-5xl md:text-6xl font-bold mb-8'>Licenses & Certifications</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                    {certifications.map((cert, i) => (
                        <CertificationCard key={i} cert={cert} />
                    ))}
                </div>

            </section>

            {/* section 4 */}
            <section className='md:section-padding '>
                <p className='text-5xl md:text-6xl font-bold mb-4'>Skills</p>

                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <div className='h-60 md:h-[80vh] md:col-span-2 mb-4 md:mb-0'>
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
