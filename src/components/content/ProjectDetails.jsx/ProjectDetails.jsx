import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../../services/projectService'




function ProjectDetails() {

    const { projectId } = useParams('projectId')

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
    }, [])




    return (
        <div>
            description : {state.project._id}

        </div>
    )
}

export default ProjectDetails