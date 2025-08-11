import {  } from "@/assets/svg/LightMode"
import { DarkModeSvg, LightMode } from "@/assets";
import { useTheme } from "next-themes"


export const Header = () => {

    const { theme, setTheme } = useTheme();

    const name = "<SS />"

    const downloadText = "Download CV"

    return <div className="flex justify-between w-full pt-4 pb-4 pl-16 pr-16 ">
        
        {/* Title  */}
        <div className="text-3xl w-full text-primary-txt">
            
            {name}
            
        </div>
        
        {/* Action Buttons  */}
        <div className="flex w-full gap-x-4 justify-end">

            {/* Nav Buttons */}

            {/* Theme Changer  */}
            <div className="h-full flex items-center"  >
                { theme === 'light' ? <LightMode onClick={() => setTheme('dark') } /> : <DarkModeSvg onClick={() => setTheme('light') }  /> }
            </div>

            {/* CV Download Button  */}
            <button className="p-2 bg-btn-primary-bg select-none rounded-xl text-nowrap text-btn-primary-txt">{downloadText}</button>

        </div>

    </div>

}