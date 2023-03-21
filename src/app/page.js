import Image from 'next/image'
import imageProfil from '@/assets/images/profil.jpg'
import NavBar from './_root_components/NavBar'
import { education } from '@/lib/education'
import EducationCard from './_root_components/EducationCard'


export default function Home() {
    return (
        <div>

            {/* section 1 */}
            <section className='flex flex-col h-screen '>

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
            <section className='px-40 py-32 bg-white text-black '>
                <p className='text-6xl font-bold mb-8'>Education</p>
                <div className='space-y-4'>
                    {education.map(item => (
                        <EducationCard edu={item} />
                    ))}
                </div>
            </section>

            {/* section 3 */}
            <section>
                section 3
            </section>

        </div>
    )
}
