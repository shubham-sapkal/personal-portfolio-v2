
import { SectionHeader } from '@/atomicComponents'
import { ExperienceCard } from '@/components'
import { Info } from '@/constants'

export const Experience = () => {

    return (
        <div className= "bg-bg-secondary flex flex-col gap-y-8 pl-16 pr-16 pt-8 pb-8">

            {/* Section Header  */}
            <div>
            {/* Section Title */}
            <div className="center-div">
                <SectionHeader name="Experience" />
            </div>

            {/* Section Subtitle */}
            <div className="center-div text-secondary-txt ">
                Here is a quick summary of my most recent experiences:
            </div>
            </div>

            {/* Experience List  */}
            <div className='flex flex-col w-4/5 gap-y-6 self-center'>
                { Info?.experience?.map( exp => <ExperienceCard data={exp} /> ) }
            </div>

        </div>
    )

}