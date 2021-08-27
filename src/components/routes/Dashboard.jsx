import React from 'react'
import { CardTitle, CardSubtitle } from '../../styles/app'

export default function Vacineflex(){
    return(
        <>
            <TotalVacinados />   
            <Elegiveis />
            <First />
            <Second />
            <Unic />
            <Alimentos />
        </>
    )
}

export function TotalVacinados(){
    return(
        <>
            <div className="totalvacinados">
                <CardTitle>Total de Colaboradores Vacinados:</CardTitle>
                <div className="number">
                    <p>0000</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function Elegiveis(){
    return(
        <>
            <div className="elegiveis">
                <CardSubtitle>Total de Colaboradores Vacinados:</CardSubtitle>
                <div className="number">
                    <p>0000</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>   
    )
}

export function First(){
    return(
        <>
            <div className="dose-um">
                <CardSubtitle>Colaboradores Vacinados com a 1ª Dose:</CardSubtitle>
                <div className="number">
                    <p>0000</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>   
    )
}

export function Second(){
    return(
        <>
            <div className="dose-dois">
                <CardSubtitle>Colaboradores Vacinados com a 2ª Dose:</CardSubtitle>
                <div className="number">
                    <p>0000</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>   
    )
}

export function Unic(){
    return(
        <>
            <div className="unica">
                <CardSubtitle>Colaboradores Vacinados com a Dose Única:</CardSubtitle>
                <div className="number">
                    <p>0000</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>   
    )
}

export function Alimentos(){
    return(
        <>
            <div className="alimentos">
                <CardSubtitle>Total de alimentos arrecadados:</CardSubtitle>
                <div className="number">
                    <p>0000 Kg</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>   
    )
}