async function apiCall(url) {
  //add api call logic here
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) 
  {
    console.log("error:", error);
  }
}

function appendArticles(articles, main) {
  //add append logic here

articles.forEach(el => {
 
    
let div=document.createElement("div")


let image=document.createElement("img")
image.src=el.urlToImage ;

let tittle= document.createElement("h3")
tittle.textContent=el.author;

let para= document.createElement("p")
para.textContent=el.description;



div.append(image,tittle,para)

main.append(div)

div.onclick = () =>{

localStorage.setItem("article",JSON.stringify(el))

window.location.href="news.html"

}

});
}


export { apiCall, appendArticles};
