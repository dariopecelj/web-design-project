let BlogServiceAjax = {
    blogs: [],

    loadBlogs: function() {
        RestClient.get('data/blog.json', function(data) {
            BlogServiceAjax.blogs = data; // Cache the blogs
            const blogContainer = $('#blog-container');
            const featuredContainer = $('#featured-container');

            // Clear existing content
            blogContainer.html('');
            featuredContainer.html('');

            data.forEach(blog => {
                const blogHtml = 
                `<div class="card col-lg-4 col-md-6 mb-4 blog-description" id="blog-${blog.id}">
                    <img class="card-img-top " src="${blog.image}" alt="...">
                    <div class="card-body d-flex flex-column">
                        <div>
                            <div class="small text-muted">${blog.date}</div>
                            <h2 class="card-title h4">${blog.title}</h2>
                            <p class="card-text">${blog.textshort}</p>
                        </div>
                        <div class="mt-auto">
                            <a class="btn btn-primary" href="#blog-post" onclick="BlogServiceAjax.loadBlogPost(${blog.id})">Read more →</a>
                            <a class="btn btn-warning" onclick="BlogServiceAjax.editBlog(${blog.id})">Edit</a>
                            <a class="btn btn-danger" onclick="BlogServiceAjax.deleteBlog(${blog.id})">Delete</a>
                        </div>
                    </div>
                </div>`;
                
                const featuredHtml = 
                `<div class="card mb-4 blog-description" id="blog-${blog.id}">
                    <img class="card-img-top" src="${blog.image}" alt="...">
                    <div class="card-body d-flex flex-column">
                        <div>
                            <div class="small text-muted">${blog.date}</div>
                            <h2 class="card-title h4">${blog.title}</h2>
                            <p class="card-text">${blog.textshort}</p>
                        </div>
                        <div class="mt-auto">
                            <a class="btn btn-primary" href="#blog-post" onclick="BlogServiceAjax.loadBlogPost(${blog.id})">Read more →</a>
                            <a class="btn btn-warning" onclick="BlogServiceAjax.editBlog(${blog.id})">Edit</a>
                            <a class="btn btn-danger" onclick="BlogServiceAjax.deleteBlog(${blog.id})">Delete</a>
                        </div>
                    </div>
                </div>`;
                
                if (blog.featured) {
                    // If the blog is featured, add it to the featured container
                    featuredContainer.html(featuredHtml);
                } else {
                    // Otherwise, add it to the regular blog container
                    blogContainer.append(blogHtml);
                }
            });
        }, function(error) {
            console.error('Error loading blogs:', error);
        });
    },

    loadBlogPost: function(blogID) {
        RestClient.get('data/blog.json', function(blogs) {
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
        }, function(error) {
            console.error('Error loading blog post:', error);
        });
    },
    // blog-service2.js

// Function to simulate blog deletion
deleteBlog: function(blogID) {
    const blogIndex = BlogServiceAjax.blogs.findIndex(blog => blog.id === blogID);
    if (blogIndex !== -1) {
        // Remove the blog from the cached array
        BlogServiceAjax.blogs.splice(blogIndex, 1);
        
        // Remove the blog card from the UI
        $(`#blog-${blogID}`).remove();
        
        // Display success message
        toastr.success('Blog deleted successfully!');
    } else {
        toastr.error('Error deleting blog: Blog not found');
    }
},

// Function to simulate blog editing
editBlog: function(blogID) {
    const blog = BlogServiceAjax.blogs.find(blog => blog.id === blogID);
    if (blog) {
        // Simulate blog edit
        const newTitle = prompt('Enter new blog title:', blog.title);
        const newText = prompt('Enter new blog text:', blog.textshort);

        if (newTitle !== null && newText !== null) {
            // Update the blog in the cached array
            blog.title = newTitle;
            blog.textshort = newText;
            
            // Update the blog card in the UI
            $(`#blog-${blogID} .card-title`).text(newTitle);
            $(`#blog-${blogID} .card-text`).text(newText);
            
            // Display success message
            toastr.success('Blog edited successfully!');
        } else {
            toastr.error('Blog edit canceled');
        }
    } else {
        toastr.error('Error editing blog: Blog not found');
    }
}

};





