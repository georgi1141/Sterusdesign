import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../globalContext/GlobalAppContext'
import { getAll } from '../../../services/projectService'
import Project from '../Project/Project'
import {Link} from "react-router-dom"
import styles from "./MyProjects.module.css"

function MyProjects() {

  const {user} = useGlobalContext()
  const [ownProjects,setOwnProjects] = useState([])

  useEffect(()=>{

    getAll()
    .then(res=> setOwnProjects(res.filter(project=>project._ownerId === user._id)))
    .catch(err=>console.log(err))

  },[])

  console.log(ownProjects)
  return (
    <>
    {ownProjects.length<1 ? 
    <div className={styles.noProjects}> No projects yet? Just go and <span className={styles.clickable}><Link to={'/add-project'}>create</Link></span>  one!</div>
     : 
     <div className='container'>
     {ownProjects.map(project => <Project key={project._id} {...project} /> )}
  </div>}

    
    </>
  )
}

export default MyProjects