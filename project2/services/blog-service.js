let BlogService = {
    loadBlogs: function() {
        fetch('data/blog.json')
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById('blog-container');
            const featuredContainer = document.getElementById('featured-container');
            
            // Clear existing content
            blogContainer.innerHTML = '';
            featuredContainer.innerHTML = '';
            
            data.forEach(blog => {
                const blogHtml = 
                `<div class="card col-lg-4 col-md-6 mb-4 blog-description" id="${blog.id}">
                    <img class="card-img-top " src="${blog.image}" alt="...">
                    <div class="card-body d-flex flex-column">
                        <div>
                            <div class="small text-muted">${blog.date}</div>
                            <h2 class="card-title h4">${blog.title}</h2>
                            <p class="card-text">${blog.textshort}</p>
                        </div>
                        <div class="mt-auto">
                            <a class="btn btn-primary" href="#blog-post" onclick="BlogService.loadBlogPost(${blog.id})">Read more →</a>
                        </div>
                    </div>
                </div>`;
                
                const featuredHtml = 
                `<div class="card mb-4 blog-description" id="${blog.id}">
                    <img class="card-img-top" src="${blog.image}" alt="...">
                    <div class="card-body d-flex flex-column">
                        <div>
                            <div class="small text-muted">${blog.date}</div>
                            <h2 class="card-title h4">${blog.title}</h2>
                            <p class="card-text">${blog.textshort}</p>
                        </div>
                        <div class="mt-auto">
                            <a class="btn btn-primary" href="#blog-post" onclick="BlogService.loadBlogPost(${blog.id})">Read more →</a>
                        </div>
                    </div>
                </div>`;
                
                if (blog.featured) {
                    // If the blog is featured, add it to the featured container
                    featuredContainer.innerHTML = featuredHtml;
                } else {
                    // Otherwise, add it to the regular blog container
                    blogContainer.innerHTML += blogHtml;
                }
            });
        })
        .catch(error => console.error('Error loading blogs:', error));
    },

    loadBlogPost: function(blogID) {
        setTimeout(function (){
            $.getJSON("data/blog.json", (blogs) => {
                const selectedBlog = blogs.find(blog => blog.id === parseInt(blogID));
                
                if (selectedBlog) {
                    $(".author").html(
                        `<img class="img-fluid rounded-circle" src="${selectedBlog.author_img}" style="width: 50px; height: 50px; object-fit: cover;" alt="https://dummyimage.com/50x50/ced4da/6c757d.jpg" />
                        <div class="ms-3">
                            <div class="fw-bold">${selectedBlog.author}</div>
                            <div class="text-muted">${selectedBlog.tags}</div>
                        </div>`
                    ),
                    $(".blog-header").html(
                        `<h1 class="fw-bolder mb-1">${selectedBlog.title}</h1>
                        <div class="text-muted fst-italic mb-2">${selectedBlog.date}</div>
                        <div class="badge bg-secondary text-decoration-none link-light">${selectedBlog.category}</div>`
                    ),
                    $(".preview").html(
                        `<img class="img-fluid rounded" src="${selectedBlog.image}" style="width: 900px; height: 450px; object-fit: cover;" alt="https://dummyimage.com/900x400/ced4da/6c757d.jpg" />`
                    ),
                    $(".blog-content").html(
                        `<p class="fs-5 mb-4">${selectedBlog.text}</p>`
                    );
                } else {
                    console.log("Blog not found");
                }
            });
        }, 20);
    }
}

