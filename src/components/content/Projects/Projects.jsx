import React, { useEffect, useState } from 'react'
import { getAll } from '../../../services/projectService'
import Project from '../Project/Project';
import "./projects.css"

function Projects() {


  const [projects,setProjects] = useState([])

  useEffect(()=>{

      getAll()
     .then(res=> setProjects(Object.values(res)))
     .catch(err=>console.log(err))

  },[])

  
  return <div className='container'>
   {projects.length<0?
   <h2>No projects yet!</h2>
   :
   projects.map(data=> <Project key={data._id} {...data}/>)
   }

  </div>
  
}

export default Projects