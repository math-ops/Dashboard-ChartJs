import React from 'react'
import { MSubtitle } from '../../styles/app'

export default function Cadastro(){
  return(
    <>
    <div className="menu-title">
      <MSubtitle>Cadastro de Colaborador</MSubtitle>
    </div>
    <FormCadastro />
    </>
  )
}

export function FormCadastro(){
  return(
    <>
    
    <form action="">
    <div className="cad-colaborador">
        
        <label className="cad-label" >Nome</label>
        <input className="cad-input"  type="text" name="" id="" placeholder="Nome Completo"/>

        <label className="cad-label" >Workday</label>
        <input className="cad-input"  type="text" name="" id="" placeholder="Workday"/>

        <label className="cad-label" >CPF</label>
        <input className="cad-input"  type="text" name="" id="" placeholder="CPF"/>
        
        <label className="cad-label" >Cargo</label>
        <input className="cad-input"  type="text" name="" id="" placeholder="Cargo"/>

        <label className="cad-label" >Gestor</label>
        <input className="cad-input"  type="text" name="" id="" placeholder="Gestor"/>

        <button className="cad-button">Cadastrar</button>
        </div>
        </form>
      </>
  )
}