let products = []

const UImaker = () => {
    document.getElementById("data").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let img = document.createElement("img")
        img.src = products[i].img

        let title = document.createElement("h2")
        title.innerHTML = products[i].title

        let category = document.createElement("h3")
        category.innerHTML = products[i].category

        let content = document.createElement("p")
        content.innerHTML = products[i].content

        let  btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click", ()=> {
            ev.target.parentNode.remove()

        });

        let div = document.createElement("div")
        div.append(img, title, category, content)

        

        title.setAttribute("class", "title")

        document.getElementById("data").append(div)

        
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
    products.push(product)

    UImaker()
}








document.getElementById("form").addEventListener("submit", handlesubmit)