import './App.css'
import Header from './Components/Header'
import Movie from './Components/Movie'
import datas from './data.json'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        {
          datas.map((ele)=>{
          return(
            <Movie title={ele.Title} year={ele.Year} img={ele.Poster}/>
          )
          
          })
        }
      </div>
    </div>
  );
}

export default App;
