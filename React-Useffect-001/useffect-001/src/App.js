// import './App.css';
import {useEffect , useState} from 'react';
import Search from './Components/Search';
import Cart from './Components/Cart';


function App() {
  
  const [inputvalue, setInputvalue] = useState("pizza")
  const [recipes, setRecipes] = useState([])
  const [value,setValue] = useState("")
  
  
  useEffect(() => {
    // console.log("app",inputvalue);
  const data= async()=>{
    const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputvalue}&app_id=b15ebc6f&app_key=3e12226f905ecdfd90f4ee49facaee70	`)
    // console.log(response)
    const data= await response.json()
    // console.log(data);
  
   setRecipes(data.hits)
  }
  data();
  
  }, [inputvalue])

  return (
    <div className="App">
    <Search inputvalue={inputvalue} setInputvalue={setInputvalue} value={value} setValue={setValue}/>
    <Cart  recipes={recipes} />
    </div>
  );
}

export default App;