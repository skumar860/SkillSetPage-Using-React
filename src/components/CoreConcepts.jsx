import './CoreConcepts.css';
export default function CoreConcepts(myprops) {
    return (
      <li>
        <img src={myprops.image} alt=".." />
        <h3> {myprops.title}</h3>
        <p>{myprops.description}</p>
      </li>
    )
  }