import myReactImage from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamentals', 'Core', 'Crucial']
const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  return (
    <header>
      <img src={myReactImage} alt="Stylized atom" />
      <h1>Hi! Myself Saurabh kumar 2 </h1>
      <h2>Below are my Skillset</h2>
      <p>
         Possessing a set of {reactDescriptions[getRandomInt(2)]} concepts that I  mostly apply to any app I am going to build.
      </p>
    </header>
  )
}