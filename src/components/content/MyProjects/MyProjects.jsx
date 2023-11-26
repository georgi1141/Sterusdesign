import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../globalContext/GlobalAppContext'
import { getAll } from '../../../services/projectService'
import Project from '../Project/Project'

function MyProjects() {

  const {user} = useGlobalContext()
  const [ownProjects,setOwnProjects] = useState([])

  useEffect(()=>{

    getAll()
    .then(res=> setOwnProjects(res.filter(project=>project._ownerId === user._id)))
    .catch(err=>console.log(err))

  },[])

  return (
    <div className='container'>
       {ownProjects.map(project => <Project key={project._id} {...project} /> )}
    </div>
  )
}

export default MyProjects