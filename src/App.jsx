
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';

// Alternate way of setting props by using object destructuring but name should be same as given in calling component
// function CoreConcepts({image,title,description}) {
//   return (
//     <li>
//       <img src={image} alt=".." />
//       <h3> {title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcept/>
         <Examples/>
      </main>
    </>
  );
}

export default App;
