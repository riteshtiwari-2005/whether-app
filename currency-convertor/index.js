let main = document.getElementById("container");

async function getData() {
    try {
        const url = 'http://api.sportmonks.com/v3/football/venues?api_token=0VBDvXvUfJAPrYkDrlcxGtt2Bo7vTMtQ2E9AL47rKsLpKgYCm3yuj2HQxICA';
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

// Fetch data when the page loads
window.addEventListener("load", () => {
    getData();
});
