
import { SectionHeader } from '@/atomicComponents'
import { Info } from '@/constants'

export const Skills = () => {


    return (
        <div className="flex flex-col gap-y-8 pl-16 pr-16 pt-8 pb-8">

            {/* Section Header  */}
            <div>
                {/* Section Title */}
                <div className="center-div">
                    <SectionHeader name="Skills" />
                </div>

                {/* Section Subtitle */}
                <div className="center-div text-secondary-txt ">
                    The skills, tools and technologies I am really good at:
                </div>
            </div>

            {/* Skills List  */}
            <div className='flex flex-wrap justify-around pl-6 pr-6'>
                { Info?.skiils?.map( skill => (
                    <div className='flex flex-col items-center'>
                        <div className='w-12 h-12'><skill.icon /></div>
                        <div className='text-secondary-txt'>{skill.name}</div>
                    </div>
                ) ) }
            </div>

        </div>
    )

}