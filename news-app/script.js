let api_key = "f7dba32f89414eac87ab8077123a8aaa";
let url = "https://newsapi.org/v2/everything?q=";
const cardContainer = document.querySelector(".card-container");

// On page load, fetch news
window.addEventListener("load", () => {
    fetchnews("real madrid");
});

async function fetchnews(query) {
    try {
        const res = await fetch(`${url}${query}&apiKey=${api_key}&pageSize=20`);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        bindData(data.articles); // Use "articles" instead of "article"
    } catch (error) {
        console.error("Failed to fetch news:", error);
    }
}

function bindData(article,index)
{
   
cardContainer.innerHTML="";
article.forEach((article)=>{
    if(article.urlToImage)
    {
    
     const truncatedTitle = (article.title || "No Title").slice(0, 1000);
    const truncatedDescription = (article.description || "No Description").slice(0, 10);
    const truncatedSource = (article.publishedAt || "Unknown")
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`   <div class="card-header flex">
                    <img src="${article.urlToImage||'https://via.placeholder.com/400x400'}
                    " alt="News Image" />
                </div>
                <div class="card-content">
                    <h3 id="news-title">${truncatedTitle}...</h3>
                    <h6 id="news-source">${truncatedSource}</h6>
                    <p class="news-desc" id="news-desc">${truncatedDescription}...</p>
                </div>`;
    cardContainer.appendChild(card)
    }
  
});

}
