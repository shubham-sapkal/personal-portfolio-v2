import Image from "next/image"


export const ExperienceCard = ({ data }) => {

    return (
        <div className="flex w-full bg-card-bg p-4">

            {/* Company Logo  */}
            <div className="w-1/5 flex justify-center items-center">
                <div className="w-14">
                <data.logo />
                {/* <Image src={data.logo} alt={data?.name} /> */}
                </div>
            </div>
            
            {/* Company Main Content  */}
            <div className="w-full flex gap-y-4 flex-col">
                
                {/* Company Title  */}
                <div className="text-primary-txt text-xl"> {data?.name} </div>

                {/* Description  */}
                <div className="text-secondary-txt pl-6">
                    <ul style={{listStyleType: "disc"}}>
                        { data?.descriptionsPoints?.map( (desc: string) => <li>{desc}</li>  ) }
                    </ul>
                </div>

            </div>

            {/* Time Period */}
            <div className="flex whitespace-nowrap text-secondary-txt">

                    <div> { data?.timeframe } </div>

            </div>

        </div>
    )

}