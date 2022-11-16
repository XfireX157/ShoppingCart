import { ReactNode } from "react"

export interface IModal {
    id?: number
    icon?: ReactNode
    name?: string
    onClick?: () => void
}

export interface IModalArray {
    modal?: IModal[]
    className?: string 
}