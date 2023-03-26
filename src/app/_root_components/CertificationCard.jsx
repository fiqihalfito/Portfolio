import Image from "next/image"
import dicodingImg from "../../../public/images/certification/dicoding.jpg"
import ibmImg from "../../../public/images/certification/ibm.jpg"
import freecodecampImg from "../../../public/images/certification/freecodecamp.jpg"
import digitalentImg from "../../../public/images/certification/digitalent.jpg"
import moment from "moment"
import Link from "next/link"

const CertificationCard = ({ cert }) => {

    const mapCertImg = {
        dicoding: dicodingImg,
        ibm: ibmImg,
        freecodecamp: freecodecampImg,
        digitalent: digitalentImg
    }

    const certImg = mapCertImg[cert.orgId]
    const issueDate = moment([cert.issueDate.year, cert.issueDate.month]).format("MMM YYYY")

    return (
        <div className='flex border-2 border-slate-900 dark:border-slate-400 rounded-lg overflow-hidden'>

            <Image src={certImg} alt="certification image" width={160} />

            <div className=" flex flex-col justify-between w-full py-3 px-5 ">
                <p className="font-bold text-2xl leading-8">{cert.name}</p>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">{cert.organization}</p>
                        <p className="text-sm text-slate-400">Issued {issueDate}</p>
                    </div>
                    <Link
                        href={cert.credentialURL}
                        target="_blank"
                        className="px-4 py-1 border-2 border-neutral-400 dark:border-amber-200 rounded-full text-neutral-400 dark:text-amber-500 w-fit text-sm hover:border-amber-400 hover:text-amber-500  hover:bg-amber-50">
                        Show credential
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CertificationCard