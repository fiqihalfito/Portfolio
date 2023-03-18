import Image from 'next/image'
import imageProfil from '@/assets/images/profil.jpg'


export default function Home() {
  return (
    <div className='flex-grow flex flex-col justify-center items-center'>
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
      <p>Fiqih</p>

    </div>
  )
}
