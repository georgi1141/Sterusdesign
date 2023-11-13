const baseUrl = 'http://localhost:3030'


 
export const login = async (email,password) =>{

    const res = await fetch(`${baseUrl}/users/login`,{
        method:"POST",
        options:{
            'content-type':'application/json'
        },
        body: JSON.stringify({email,password})
    })
    const user = res.json()
    return user

}