import React from 'react'
import { Subtitle } from '../../styles/app'

export default function Cadastro(){
  return(
    <div className="cadastro-colaborador">
      <Subtitle>Cadastro de Colaborador</Subtitle>
      <div className="form-colaborador">
        <form action="">
        <label>Nome Completo</label>
        <input type="text" name="" id="" />

        <label>Workday</label>
        <input type="text" name="" id="" />

        <label>CPF</label>
        <input type="text" name="" id="" />

        <label>Data Admissão</label>
        <input type="text" name="" id="" />

        <label>Cargo</label>
        <input type="text" name="" id="" />

        <label>Gestor</label>
        <input type="text" name="" id="" />

        <button></button>
        </form>
      </div>
    </div>
  )
}