import minecraft from "../../assets/minecraft.png";
import dice from "../../assets/diceGame.png";
import amazon from "../../assets/amazon.png";

const minecraftGame = `https://2d-minecraft-i-think.netlify.app/`;
const minecraftGithub = "https://github.com/HasanOmar1/Minecraft";
const diceGame = `https://1v1-dice-game.netlify.app/`;
const diceGithub = `https://github.com/HasanOmar1/Dice-Game`;
const amazonSite = "https://amazon-hyperx.netlify.app/";
const amazonGithub = `https://github.com/HasanOmar1/Amazon`;

const cardsArray = [
  {
    // minecraftCard: {
    title: `2D Minecraft`,
    img: minecraft,
    description: `2D Minecraft game with tools to play`,
    site: minecraftGame,
    github: minecraftGithub,
    // },
  },
  {
    // diceGameCard: {
    title: `Dice Game`,
    img: dice,
    description: `1vs1 Dice game to play with friends`,
    site: diceGame,
    github: diceGithub,
    // },
  },
  {
    // AmazonProductCard: {
    title: `Amazon Product`,
    img: amazon,
    description: `A copy of an amazon product using only HTML and CSS`,
    site: amazonSite,
    github: amazonGithub,
    // },
  },
];

export default cardsArray;
