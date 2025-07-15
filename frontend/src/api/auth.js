let API_URL = "http//localhost:8080"
const PORT = 8080;

export async function register(credentials) {
    const response = await fetch(`${API_URL}/register`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(credentials)
    });

    if(!response.ok){
        throw new Error("registration failed...");
    }
    return await response.json()
}

export async function login(credentials) {
    const response = await fetch(`${API_URL}/login`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(credentials)
    });

    if(!response.ok){
        throw new Error("login failed...");
    }
    return await response.json()
}