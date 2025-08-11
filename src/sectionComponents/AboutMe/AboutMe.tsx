
import AboutMeImg from '@/assets/images/about.jpg'
import { SectionHeader } from '@/atomicComponents'
import { Info } from '@/constants'
import Image from 'next/image'

export const AboutMe = () => {

    const { about_me_desc } = Info

    return (
        <div className="bg-bg-secondary flex flex-col gap-y-8 pl-16 pr-16 pt-8 pb-8">
            
            {/* Section Title */}
            <div className='flex w-full justify-center'>
            <SectionHeader name="About Me " /> 
            </div>

            {/* Main Content  */}
            <div className='flex flex-row w-full gap-x-8 '>
                {/* About Image  */}
                <div className='w-[45vw] p-16'>
                    <Image src={AboutMeImg} alt="about-img" />
                </div>

                {/* About Content  */}
                <div className='flex flex-col w-full'>

                    <div className='text-3xl text-primary-txt'>Curious about me? Here you have it:</div>

                    <div className='text-secondary-txt'>{about_me_desc}</div>


                </div>

            </div>

        </div>
    )

}