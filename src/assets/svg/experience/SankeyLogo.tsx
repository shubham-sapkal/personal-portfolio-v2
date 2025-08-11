import Image from "next/image"

import SankeyLogoImg from '@/assets/images/sankey-logo-img.png'

export const SankeyLogo = () => {

    return (
        <Image src={SankeyLogoImg} alt="Sankey-Logo" />
    )

}