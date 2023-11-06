// BlogPosts.js
import React from 'react';

function BlogPosts(props) {
    // Sample blog post data (you can replace this with your own blog post information)

    return (
        <section className="blog-posts mt-auto py-5">
            <div className="container">
                <h2 className="text-center">Blog Posts</h2>
                <div className="row">
                    {props.posts.map((post, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card mb-4">
                                <img
                                    src={post.image} // Replace with your post image URL
                                    alt={post.title}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.excerpt}</p>
                                </div>
                                <div className="card-footer text-muted">
                                    <p className="card-date">{post.date}</p>
                                    <a href={`/blog/${post.slug}`} className="btn btn-primary">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogPosts;
