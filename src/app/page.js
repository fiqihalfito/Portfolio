import Image from 'next/image'
import imageProfil from '@/assets/images/profil.jpg'
import NavBar from './_root_components/NavBar'


export default function Home() {
    return (
        <div>

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
            <section>
                section 2
            </section>

            {/* section 3 */}
            <section>
                section 3
            </section>

        </div>
    )
}
