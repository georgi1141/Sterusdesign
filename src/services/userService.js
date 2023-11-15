const baseUrl = 'http://localhost:3030'


 
export const login = async (email,password) =>{

    const res = await fetch(`${baseUrl}/users/login`,{
        method:"POST",
        options:{
            'content-type':'application/json'
        },
        body: JSON.stringify({email,password})
    })

    const user = await res.json()
    return user

}

export const register = async (email,password,username) =>{

    const res = await fetch(`${baseUrl}/users/register`,{
        method:'POST',
        options:{
            'content-type':'application/json'
        },
        body: JSON.stringify({email,password,username})
    })
    
    if (!res.ok){
        throw new Error(`Error : ${res.status}`)
    }
    
    const user = await res.json()

    return user

        



}