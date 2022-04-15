//component to display tag and input form

import './App.css';
import { useState } from "react"

const Tag = () => {
    const [tags,setTag] = useState([])
    const addTag =(e) =>{

        if ( e.key === "Enter"){
            e.preventDefault()
            if (e.target.value.length > 0){
                setTag([...tags, e.target.value])
                e.target.value = ''
            }
        }
    }

    return (  
        <div className="tag-container">
          {tags.map((tag,index) =>{
              return(
                  <div key = {index} className="tag">
                      {tag}
                  </div>
              )
          })}
          <form>
            <input type = "text" placeholder="Add Tag" className = "tag-input" onKeyDown={addTag}></input>
          </form>
        </div>
      );
}
 
export default Tag;