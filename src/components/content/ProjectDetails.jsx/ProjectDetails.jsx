import React from 'react'
import { useParams } from 'react-router-dom'




function ProjectDetails() {

    
    const {projectId} = useParams('projectId') 


  return (
    <div>{projectId}</div>
  )
}

export default ProjectDetails