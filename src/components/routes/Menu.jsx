import React from 'react'
import styled from 'styled-components'
import { MenuSubtitle, Subtitle } from '../../styles/app'

export default function MenuCadastro(){
  return(
    <>
      <div className="menu-title">
        <Subtitle>Bem-Vindos ao Vacinômetro Flex</Subtitle>
      </div>
      <Colaborador />
      <Vacinas />
    </>
  )
}

export function Colaborador(){
  return(
    <>
      <div className="option-col">
        <MenuSubtitle>Cadastro de Colaboradores</MenuSubtitle>
        <a href="#" className="menu-button">Acessar</a>
      </div>
    </>
  )
}

export function Vacinas(){
  return(
    <>
    <div className="option-vac">
      <MenuSubtitle>Controle de Colaboradores</MenuSubtitle>
      <a href="#" className="menu-button">Acessar</a>
    </div>
    </>
  )
}