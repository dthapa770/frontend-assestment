
import { useEffect, useState } from 'react';
import './App.css';
import StudentList from'./StudentList'

function App() {
  const [datas,setDatas] = useState([])
  const [error, setError] = useState(null)
  const [search,setSearch] = useState('');
  const [tag, setSearchTag] = useState('');

  
  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => {
      if ( response.ok){
        return response.json()
      }
      throw response
    })
    .then (data =>{
      setDatas(data.students)
      
    })
    .catch(error =>{
      console.error("Unable to fetch data",error)
      setError(error);
    }) 
    
  },[])


  const handleChange =e =>{
    setSearch(e.target.value)
  }

  const handleChangeTag =e =>{
    setSearchTag(e.target.value)
  }

  const filteredStudents = datas.filter(data => data.firstName.toLowerCase().includes(search.toLowerCase()) 
                                        || data.lastName.toLowerCase().includes(search.toLowerCase())
                                        )

    return ( 
      <div className="container">  
        <div className="search">
          <form>
            <input type = "text" placeholder="Search By Name" className = "search-input" onChange ={handleChange}/>
          </form>
        </div>
        <div className="search-tag">
          <form>
            <input type = "text" placeholder="Search By Tag" className = "search-tag" onChange ={handleChangeTag}/>
          </form>
        </div>
        {filteredStudents.map(data =>{
          return(      
            <StudentList data = {data} key={data.id}/>               
          )          
        })}        
      </div>     
    ); 
}

export default App;
