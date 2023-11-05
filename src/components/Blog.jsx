import { Link } from "react-router-dom";


function BlogPosts() {
    const blogPosts = [
        {
            title: 'Blog Post 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'October 1, 2023',
        },
        {
            title: 'Blog Post 2',
            content: 'Sed tristique leo ac metus volutpat, nec fringilla quam.',
            date: 'September 15, 2023',
        },
        {
            title: 'Blog Post 3',
            content: 'Curabitur viverra vel justo in euismod.',
            date: 'August 28, 2023',
        },
    ];

    return (
        <section className="blog-posts mt-auto py-5">
            <div className="container">
                <h2 className="text-center mb-4">Latest Blog Posts</h2>
                <div className="row">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="col-md-4">
                            <div className="blog-post">
                                <h5>{post.title}</h5>
                                <p>{post.content}</p>
                                <p className="post-date">{post.date}</p>
                                <Link to="/blog" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <Link to="/blog" className="btn btn-primary">More Blog Posts</Link>
                </div>
            </div>
        </section>
    );
}

export default BlogPosts;
