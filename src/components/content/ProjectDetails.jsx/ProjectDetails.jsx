import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteOne, getOne } from '../../../services/projectService'
import styles from './projectDetails.module.css'
import { useGlobalContext } from '../../globalContext/GlobalAppContext'



function ProjectDetails() {

    const { projectId } = useParams('projectId')
    const { user } = useGlobalContext()
    const navigate = useNavigate()

    const ACTION_KEYS = {
        EDIT: 'EDIT',
        DELETE: 'DELETE',
        POPULATE: 'POPULATE'
    }

    const initialState = {
        project: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION_KEYS.POPULATE:
                return { ...state, project: action.payload.res }
            case ACTION_KEYS.DELETE :
                
                    deleteOne(action.payload.projectId,action.payload.token)
                    .then(res=> {
                        if(res.code === 403){
                            throw new Error(res.message)
                        }
                        navigate('/my-projects')
                    })
                    .catch(err=>{
                        console.log(err.message)
                        return state;

                    } )
                    
                  return {...state,project:{}}
            case ACTION_KEYS.EDIT:
                 console.log('edit clicked')
                 return {...state}
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        try {
            getOne(projectId)
                .then(res => dispatch({ type: ACTION_KEYS.POPULATE, payload: { res } }))
                .catch(err => new Error('Server errrrror', err))
        } catch (error) {
            console.log(error)
        }
    }, [deleteOne])
    const isOwner = user?._id === state.project._ownerId


    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.imageContainer}>
                    <h3>{state.project.projectName}</h3>
                    <img src={state.project.imageUrl} alt="project-image" />
                </div>
                <div className={styles.textContainer}>
                    <p>{state.project.description}</p>
                    
                </div>
                {isOwner
                    &&
                    <div className={styles.buttons}>
                        <button onClick={()=>{dispatch(
                            {type:ACTION_KEYS.EDIT}
                            )}}>Edit
                        </button>
                        <button onClick={()=>{dispatch(
                            {type:ACTION_KEYS.DELETE,
                            payload:{token:user?.accessToken,projectId:state.project._id
                            }
                            })}}>Delete
                        </button>
                    </div>
                }

            </div >
            <div className={styles.comments}>Comments: TODO...</div>
        </div>
    )
}

export default ProjectDetails