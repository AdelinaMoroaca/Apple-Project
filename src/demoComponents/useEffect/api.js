export async function getInfo() {
    return fetch("http://localhost:3000/iPhone")
        .then((response) => response.json());
}