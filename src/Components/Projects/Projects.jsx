import React from 'react'
import './projects.css'
import Cards from '../Cards/Cards'
import minecraft from '../../assets/minecraft.png'
import dice from '../../assets/diceGame.png'
import amazon from '../../assets/amazon.png'

export default function Projects() {
    const minecraftGame = `https://2d-minecraft-i-think.netlify.app/`
    const minecraftGithub = 'https://github.com/HasanOmar1/Minecraft'
    const diceGame = `https://1v1-dice-game.netlify.app/`
    const diceGithub = `https://github.com/HasanOmar1/Dice-Game`
    const amazonSite = 'https://amazon-hyperx.netlify.app/'
    const amazonGithub = `https://github.com/HasanOmar1/Amazon`
  return (
      <section id='projects' className="my-projects">
        <h1>Projects</h1>
        <div className="cards">
        <Cards
        title={`2D Minecraft`}
        img={minecraft}
        description={`I have created a 2D Minecraft game with tools to play`}
        site={minecraftGame}
        github={minecraftGithub}
         />

        <Cards
        title={`Dice Game`}
        img={dice}
        description={`I have created a 1vs1 Dice game to play with friends`}
        site={diceGame}
        github={diceGithub}
        />

        <Cards
        title={`Amazon Product`}
        img={amazon}
        description={`I have copied an amazon product page`}
        site={amazonSite}
        github={amazonGithub}
        />
        </div>
        
    </section>

  )
}
