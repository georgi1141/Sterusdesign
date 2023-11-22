import React, { useEffect, useState } from 'react'
import { getAll } from '../../../services/projectService'

function Projects() {


  const [projects,setProjects] = useState()

  useEffect(()=>{

      getAll()
     .then(res=> setProjects(Object.values(res)))
     .catch(err=>console.log(err))

  },[])

  return <>
  {projects? 
  projects.map(project=><div key={project._id}>{project.projectName}</div>)
  :
  ' No projects yet!'}
  </>
  
}

export default Projects