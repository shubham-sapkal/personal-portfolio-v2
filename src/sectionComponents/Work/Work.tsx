import { SectionHeader } from "@/atomicComponents"
import { WorkCard } from "@/components"
import { Info } from "@/constants"

import { Carousel } from 'flowbite-react'

export const Work = () => {

    const { projects } = Info;

    return (
        <div className="flex flex-col gap-y-8 pl-16 pr-16 pt-8 pb-8 ">

            {/* Section Header  */}
            <div>
                
                {/* Section Title */}
                <div className="center-div">
                    <SectionHeader name="Work" />
                </div>

                {/* Section Subtitle */}
                <div className="center-div text-secondary-txt ">
                    Some of the noteworthy projects I have built:
                </div>

            </div>

            {/* Work Scroller  */}
            <div className=" pr-12 pl-12 w-full overflow-hidden" >

                <Carousel pauseOnHover ={false} >
                    { projects?.map( project => <WorkCard data={project} /> ) }
                </Carousel>
            </div>

        </div>
    )

}