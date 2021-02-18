export async function getClue() {
    const response = await fetch('https://jservice.xyz/api/random-clue');
    if (!response.ok) {
        throw Error(response.status)
    } 
    return await response.json();
} 