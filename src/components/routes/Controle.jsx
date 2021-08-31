import React from 'react'
import { OptionSubtitle } from '../../styles/app'
import '../../styles/Controle.css'

export default function Controle(){
  return(
    <>
      <div className="menu-title">
      <OptionSubtitle>Controle de Colaboradores Vacinados</OptionSubtitle>
      </div>
      <FormControle />
      
    </>
  )
}

export function FormControle(){
  return(
    <>
        <form action="">
        <div className="form-controle" >

        <label className="form-label">Colaborador</label>
        <input className="form-input" type="text" name="" id="" placeholder=" Colaborador"/>  

        <label className="form-label">Empresa</label>
        <input className="form-input" type="text" name="" id="" placeholder="Empresa"/>

        <label className="form-label">Risco</label>
        <input className="form-input" type="text" name="" id="" placeholder="Risco"/>

        <label className="form-label">Grupo de Risco</label>
        <input className="form-input" type="text" name="" id="" placeholder="Grupo de Risco"/>        

        <label className="form-label">Data da Primeira Dose</label>
        <input className="form-input" type="date" name="" id="" placeholder="Data Primeira Dose"/>

        <label className="form-label">Data da Segunda Dose</label>
        <input className="form-input" type="date" name="" id="" placeholder="Data Segunda Dose"/>

        <label className="form-label">Data da Dose Única</label>
        <input className="form-input" type="date" name="" id="" placeholder="Data Primeira Dose"/>

        <label className="form-label">Status</label>
        <input className="form-input" type="text" name="" id="" placeholder="Status"/>

        <button className="form-button">Salvar</button>
        </div>
        </form>
      
    </>
  )
}