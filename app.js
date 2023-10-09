// function Product(title, price, description, image) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.image = image;
// }

// async function fetchProducts() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const products = await response.json();
//         return products;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }
// async function renderProducts() {
//     const productList = document.getElementById('product-list');
    
//     const products = await fetchProducts();
    
//     if (products && products.length > 0) {
//         productList.innerHTML = ''; // Clear existing content

//         // Create a container for the product cards using CSS Grid
//         const productContainer = document.createElement('div');
//         productContainer.classList.add('product-container');    

//         products.map(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             const productImage = document.createElement('img');
//             productImage.src = product.image ;
//             // productImage.className('photo');

//             const productTitle = document.createElement('h2');
//             productTitle.textContent = product.title;

//             const productPrice = document.createElement('p');
//             productPrice.textContent = `Price: $${product.price}`;

//             const productDescription = document.createElement('p');
//             productDescription.textContent = product.description;

//             productCard.appendChild(productImage);
//             productCard.appendChild(productTitle);
//             productCard.appendChild(productPrice);
//             productCard.appendChild(productDescription);

//             productContainer.appendChild(productCard);
//         });

//         productList.appendChild(productContainer);
//     } else {
//         productList.innerHTML = '<p>No products available</p>';
//     }
// }
// renderProducts();
//_____________________________________________________________________________________________________________

// document.addEventListener("DOMContentLoaded", function () {
//     const postForm = document.getElementById("post-form");
//     const postContainer = document.getElementById("post-container");

//     postForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const title = document.getElementById("title").value;
//         const content = document.getElementById("content").value;

//         // Create a new post object
//         const newPost = {
//             title,
//             content,
//         };

//         // Send a POST request to the JSON server to add the new post
//         fetch("http://localhost:3000/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newPost),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             // Clear the form
//             document.getElementById("title").value = "";
//             document.getElementById("content").value = "";

//             // Display the new post as a card
//             displayPost(data);
//         });
//     });

//     // Function to display a post as a card
//     function displayPost(post) {
//         const card = document.createElement("div");
//         card.className = "card";
//         card.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.content}</p>
//         `;
//         postContainer.appendChild(card);
//     }

//     // Load existing posts from the JSON server on page load
//     fetch("http://localhost:3000/posts")
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((post) => {
//             displayPost(post);
//         });
//     });
// });


// // Function to display a post as a card
// function displayPost(post) {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.content}</p>
//         <div class="card-buttons">
//             <button class="delete-button" data-id="${post.id}"><i class="fas fa-trash"></i> Delete</button>
//             <button class="update-button" data-id="${post.id}"><i class="fas fa-edit"></i> Update</button>
//         </div>
//     `;

//     // Add event listeners for delete and update buttons
//     const deleteButton = card.querySelector(".delete-button");
//     deleteButton.addEventListener("click", deletePost);

//     const updateButton = card.querySelector(".update-button");
//     updateButton.addEventListener("click", updatePost);

//     postContainer.appendChild(card);
// }
// document.addEventListener("DOMContentLoaded", function () {
//     // ... (existing code)

//     // Function to handle post deletion
//     function deletePost(e) {
//         const postId = e.target.getAttribute("data-id");

//         // Send a DELETE request to the JSON server to delete the post
//         fetch(`http://localhost:3000/posts/${postId}`, {
//             method: "DELETE",
//         })
//         .then(() => {
//             // Remove the card from the UI
//             e.target.closest(".card").remove();
//         });
//     }

//     // Function to handle post update
//     function updatePost(e) {
//         const postId = e.target.getAttribute("data-id");

//         // Fetch the post data by ID (you can implement an update form/modal here)
//         fetch(`http://localhost:3000/posts/${postId}`)
//         .then((response) => response.json())
//         .then((post) => {
//             // Implement logic to update the post (e.g., show a form/modal)
//             // You can update the UI and send a PUT request to the server
//             // to update the post data.
//             // For simplicity, we'll just alert the post data here.
//             alert(`Update post: ${JSON.stringify(post)}`);
//         });
//     }

//     // ... (existing code)
// });














document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("post-form");
    const postContainer = document.getElementById("post-container");

    postForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new post object
        const newPost = {
            title,
            content,
        };

        // Send a POST request to the JSON server to add the new post
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then((response) => response.json())
        .then((data) => {
            // Clear the form
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";

            // Display the new post as a card
            displayPost(data);
        });
    });

    // Function to display a post as a card
    function displayPost(post) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <div class="card-buttons">
                <button class="delete-button" data-id="${post.id}"><i class="fas fa-trash"></i> Delete</button>
                <button class="update-button" data-id="${post.id}"><i class="fas fa-edit"></i> Update</button>
            </div>
        `;

        // Add event listeners for delete and update buttons
        const deleteButton = card.querySelector(".delete-button");
        deleteButton.addEventListener("click", deletePost);

        const updateButton = card.querySelector(".update-button");
        updateButton.addEventListener("click", updatePost);

        postContainer.appendChild(card);
    }

    // Function to handle post deletion
    function deletePost(e) {
        const postId = e.target.getAttribute("data-id");

        // Send a DELETE request to the JSON server to delete the post
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: "DELETE",
        })
        .then(() => {
            // Remove the card from the UI
            e.target.closest(".card").remove();
        });
    }

    // Function to handle post update
    function updatePost(e) {
        const postId = e.target.getAttribute("data-id");

        // Fetch the post data by ID (you can implement an update form/modal here)
        fetch(`http://localhost:3000/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
            // Implement logic to update the post (e.g., show a form/modal)
            // You can update the UI and send a PUT request to the server
            // to update the post data.
            // For simplicity, we'll just alert the post data here.
            alert(`Update post: ${JSON.stringify(post)}`);
        });
    }

    // Load existing posts from the JSON server on page load
    fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((post) => {
            displayPost(post);
        });
    });
});
