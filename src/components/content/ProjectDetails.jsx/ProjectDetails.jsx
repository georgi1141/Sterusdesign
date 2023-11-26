import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../../services/projectService'




function ProjectDetails() {

  const {projectId} = useParams('projectId') 

  const [project,setProject] = useState([])

  useEffect(()=>{

    try {

      getOne(projectId)
      .then(res=>setProject(res))
      .catch(err=> new Error('Server errrrror',err))
      
    } catch (error) {
      console.log(error)
      
    }

  },[])


  return (
    <div>
      description : {project.description}

    </div>
  )
}

export default ProjectDetails