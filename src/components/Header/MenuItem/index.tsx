import Link from "next/link"
import { FC } from "react"
import * as Styled from './index.styled'

export interface MenuItemProps {
    name: string,
    href: string,
    isActive: boolean
}

export const MenuItem: FC<MenuItemProps> = (props) => {

        if (props.isActive) return  (
            <Styled.ActiveName href={props.href}>
                {props.name}
                <Styled.Line/>
            </Styled.ActiveName>
            
        )
            
        else return (
            <Styled.CommonName href={props.href}>
                {props.name}
            </Styled.CommonName>
        )
}