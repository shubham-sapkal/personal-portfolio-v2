import { FC } from "react"
import { SectionHeaderPropType } from "./type"


export const SectionHeader: FC<SectionHeaderPropType> = ({name = null}) =>  {

    return name && (
        <div className="text-section-header-txt bg-section-header-bg p-2 pl-6 pr-6 rounded-lg">
            {name}
        </div>
    )

}