import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {
  console.log(data);
  return (
    <div className="container">
     <ul>
    {data.products.map(products => 
  
     
      <li key={products._id}>
        <div className="main_tag">
         <div className="image">
          <img src={ products.image }  alt={ products.name }/>
         </div>
         <div className="info">
           <a ><h1>{products.name}</h1></a>
           <div className="price">$ { products.price }</div>
         </div>
        </div>
       </li>
   
       
    )}
    
       
     </ul>
    </div>
  );
}

export default App;
