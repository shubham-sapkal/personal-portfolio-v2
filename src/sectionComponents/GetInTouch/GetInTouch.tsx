import { SectionHeader, SocialLinks } from "@/atomicComponents"
import { Info } from "@/constants"



export const GetInTouch = () => {

    const info = Info;

    return (
         <div className= "bg-bg-secondary justify-center text-center flex flex-col gap-y-8 pl-16 pr-16 pt-8 pb-8">
        
                {/* Section Header  */}
                <div className="w-3xl self-center">
                    {/* Section Title */}
                    <div className="center-div">
                        <SectionHeader name="Get In Touch" />
                    </div>
        
                    {/* Section Subtitle */}
                    <div className="center-div text-secondary-txt ">
                        What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                    </div>
                </div>

                 {/* Main Content */}

                <div className="flex flex-col text-primary-txt text-4xl gap-y-4 justify-center w-full">
                    {/* Email  */}
                    <div className="center-div">
                        {info.primary_email}
                    </div>

                    {/* Number */}
                    <div className="center-div">
                        {info.primary_number}
                    </div>

                </div>

                {/* Links  */}
                <div className=" flex flex-col text-secondary-txt">
                    <div className="center-div ">
                        <div>You may also find me on these platforms!</div>
                    </div>
                    <div className="center-div">
                    <SocialLinks />    
                    </div>
                    

                </div>    

        </div>
    )


}