import {ReactNode} from 'react'

export type IButton = {
    className: string,
    children: ReactNode 
} & React.ButtonHTMLAttributes<HTMLButtonElement>