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
