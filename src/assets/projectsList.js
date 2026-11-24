import { ballBoard, memeGen, minesweeper, todoApp, eletricityCalc, coolaLike } from './images/portfolio'
import { html, jsl, css, scss, react, redux, node, express, mongo } from './stock-svgs'

export const vanilaList = [
    {
        "name": "ballboard",
        "img": ballBoard,
        "description": "Grid game: move with the arrow keys and collect the balls",
        "btn": "https://avraham186.github.io/ball-board/"
    },
    {
        "name": "memeGen",
        "img": memeGen,
        "description": "Meme editor on HTML Canvas: text, stickers, styling and download",
        "btn": "https://avraham186.github.io/memGen/"
    },
    {
        "name": "mine-sweeper",
        "img": minesweeper,
        "description": "Classic Minesweeper with 3 levels, lives and a timer",
        "btn": "https://avraham186.github.io/mineSweeperVanila/"
    },
    {
        "name": "todo app",
        "img": todoApp,
        "description": "Todo app in MVC with filters, sorting, priorities and local storage",
        "btn": "https://avraham186.github.io/todoAppVanila/"
    }
]
export const reactList = [
    {
        "name": "coola-like",
        "img": coolaLike,
        "description": "Platform for a 9,000-member junior developers community: jobs, events and projects",
        "btn": "https://avraham186.github.io/coola-like/"
    },
    {
        "name": "electricity bill calculator",
        "img": eletricityCalc,
        "description": "Calculates the electricity bill from two meter readings, including VAT",
        "btn": "https://avraham186.github.io/Electricity-calc/"
    }
]

export const stockLogos = [
     { name: 'html', logo: html },
        { name: 'css', logo: css },
        { name: 'JavaScript', logo: jsl },
        { name: 'scss', logo: scss },
        { name: 'react', logo: react },
        { name: 'redux', logo: redux },
        { name: 'node', logo: node },
        { name: 'express', logo: express },
        { name: 'mongo', logo: mongo }
]