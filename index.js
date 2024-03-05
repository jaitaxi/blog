let blog = []

const blogpost = () => {
    document.getElementById("post").innerHTML = ""
    for (let i = 0; i < blog.length; i++) {
        let img = document.createElement("img")
        img.src = blog[i].img

        let title = document.createElement("h2")
        title.innerHTML = blog[i].title

        let category = document.createElement("h3")
        category.innerHTML = blog[i].category

        let content = document.createElement("p")
        content.innerHTML = blog[i].content

        let like=document.createElement("button")
        like.innerHTML="Like"
        like.addEventListener("click",()=>{
            alert("You like this post!!!")
            blogpost();
        })

        let  btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click", ()=> {
           blog.splice(i,1)

           blogpost();

        });

        let div = document.createElement("div")
        div.append(img, title, category, content,like, btn)

        

        title.setAttribute("class", "title")

        document.getElementById("post").append(div)

        
    }
}


const handlesubmit = (e) => {
    e.preventDefault()
    let title = document.getElementById("title").value
    let content = document.getElementById("content").value
    let img = document.getElementById("img").value
    let category = document.getElementById("category").value
    console.log(title, content, img, category);

    if (title.length < 2) {
        alert("please enter a title")
        return
    }

    let product = {
        title: title,
        content: content,
        img: img,
        category: category

    }
    blog.push(product)

    blogpost()
}








document.getElementById("form").addEventListener("submit", handlesubmit)