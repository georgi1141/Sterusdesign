const baseUrl = "http://localhost:3030";

export const login = async (email, password) => {
  const res = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const user = await res.json();
  localStorage.setItem("user", JSON.stringify({ user }));
  return user;
};

export const register = async (email, password, username) => {
  const res = await fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });

  if (!res.ok) {
    throw new Error(`Error : ${res.status}`);
  }

  const user = await res.json();

  localStorage.setItem("user", JSON.stringify({ user }));

  return user;
};

export const logout = async (userToken) => {
  try {
    const res = await fetch(`${baseUrl}/users/logout`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-Authorization": userToken,
      },
    });

    if (res.status === 204) {
      return "Successfully logged out!";
    }
  } catch (error) {
    throw new Error("Internal server error!");
  }
};
