const dataList = document.getElementById("data-list");

fetch("https://jsonplaceholder.typicode.com/posts")

    .then(response => response.json())
    .then(posts => {

        posts.forEach(post => {
            const listItem = document.createElement("div");
            listItem.classList.add("box");
            listItem.innerHTML = `
        <h3 class="title"> <b>Title:</b> ${post.title}</h3>
        <p class="body"><b>Body:</b> ${post.body}</p>
        `;

            dataList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
