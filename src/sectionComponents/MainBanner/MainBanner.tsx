
import BannerImg from '@/assets/images/banner.jpg'
import { SocialLinks } from '@/atomicComponents';
import { Info } from '@/constants'
import Image from 'next/image'


export const MainBanner = () => {

    const { primary_title, primary_desc, primary_location } = Info;

    return <div className="flex gap-x-4 justify-between pl-16 pr-16 pt-24 pb-24 ">
        
        {/* Main Content  */}
        <div className="flex w-full flex-col text-primary-txt justify-around">

            {/* Main Infor  */}
            <div className='flex flex-col gap-y-2'>
                {/* Title  */}
                <div className='text-6xl'>{primary_title}</div>
                {/* Description  */}
                <div className='text-secondary-txt'>
                    {primary_desc}
                </div>
            </div>
            
            {/* Location  */}
            <div className='text-secondary-txt'>
                {primary_location}
            </div>

            {/* Social Icons  */}
            <div>
                <SocialLinks />
            </div>

        </div>

        {/* Photo Frame  */}
        <div className='flex w-[30vw]'>
            <Image src={BannerImg} alt='banner-img' />
        </div>

    </div>

}