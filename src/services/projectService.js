const baseUrl = "http://localhost:3030/data/projects";

export const getAll = async () => {
    try {
        const res = await fetch(baseUrl);

        if (!res.ok) {
            throw new Error("Internal server error!");
        }

        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
};


export const addProject = async (data,token)=>{

    try {

    const res = await fetch(baseUrl,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "X-Authorization":token
        },
        body:JSON.stringify(data)

    })

    if (!res.ok) {
        throw new Error("Internal server error!");
    }

    const result = res.json()
    return result

        
    } catch (error) {
        return error
        
    }


}
