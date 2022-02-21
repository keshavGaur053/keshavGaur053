function storeSearchterm(term,main) {

   term.forEach(el => {
       
let mainDiv=document.createElement("div")

mainDiv.addEventListener("click",function(){
    // console.log(el)
localStorage.setItem("article",JSON.stringify(el))
windows.location.href="news.html"
})

let div1=document.createElement("div")
let div2=document.createElement("div")
let div3=document.createElement("div")

let tittle= document.createElement("h3")
tittle.textContent=el.tittle;
div1.append(tittle)

let content= document.createElement("p")
content.textContent=el.content;
div2.append(content)

let image=document.createElement("img")
image.src=el.urlToImage ;
div3.append(image)


main.append(div1,div2,div3)

   });

}

export default storeSearchterm