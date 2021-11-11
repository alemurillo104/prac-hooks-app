import React from 'react'
import { CardImage } from './CardImage'
import { FooterCard } from './FooterCard'
import { NavCard } from './NavCard'

export const PPrincipal = () => {
    return (
        <div>
            <NavCard />
            <CardImage />
            <FooterCard />
        </div>
    )
}
