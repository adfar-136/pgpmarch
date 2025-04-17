var section = document.getElementById("section");
var div = document.createElement("div")
document.getElementById("btn").addEventListener("click",()=>{
    fetch("https://official-joke-api.appspot.com/random_joke").then((result)=>{
        return result.json()
    }).then((response)=>{
        console.log(response)
         div.innerHTML = `<h1>SetUp : ${response.setup}<h1>
         <h2>Punchline : ${response.punchline}<h2>`
         div.setAttribute("class","main")
         section.appendChild(div)
        //  console.log(response)
    })
})
var btn = document.getElementById("btnn")

btn.addEventListener("click",()=>{
    console.log(btn.classList)
    var x = btn.classList;
    x.toggle("ourBtn")
    // x.remove("ourBtn")
    console.log(btn.classList)
    // x.add("adfar")
    // console.log(btn.classList)


})