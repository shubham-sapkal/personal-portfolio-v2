
import ProjectBanner from '@/assets/images/project-banner.png'
import Image from 'next/image'


export const WorkCard = ({ data }) => {

    return <div className="w-full justify-center h-full flex overflow-hidden">
        <div className='flex w-[80%]'>

        {/* Image  */}
        <div className='w-[40vw] flex gap-x-6'>
            <Image src={data?.bannerImg} alt="Project Banner" />
        </div>

        <div className="flex w-full flex-col text-secondary-txt ">

            {/* Title  */}
            <div className='text-4xl'>{data?.title}</div>

            {/* Description  */}
            <div>{data?.description}</div>

            {/* Tags  */}
            <div>
            Tags
            </div>
            
            {/* Link  */}
            <div>View Details</div>

        </div>

        </div>

    </div>
}   