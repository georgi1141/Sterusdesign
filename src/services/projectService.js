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

export const getOne = async (projectId) => {
  try {
    const res = await fetch(`${baseUrl}/${projectId}`);

    if (!res.ok) {
      throw new Error("Internal server error!");
    }

    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteOne = async (projectId, accessToken) => {
  try {
    const res = await fetch(`${baseUrl}/${projectId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "X-Authorization": accessToken,
      },
    });

    const result = res.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const addProject = async (data, token) => {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Internal server error!");
    }

    const result = res.json();
    return result;
  } catch (error) {
    return error;
  }
};


export const editProject = async (projectId,token,data)=>{

  try {
    const res = await fetch(`${baseUrl}/${projectId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Internal server error!");
    }

    const result = res.json();
    return result;
  } catch (error) {
    return error;
  }


}
