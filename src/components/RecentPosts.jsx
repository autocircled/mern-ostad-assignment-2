// RecentPosts.js
import React from 'react';

function RecentPosts() {
    const recentPosts = [
        {
            title: 'Blog Post 1',
            slug: 'blog-post-1',
        },
        {
            title: 'Blog Post 2',
            slug: 'blog-post-2',
        },
        // Add more recent blog post data here
    ];

    return (
        <aside className="recent-posts mb-5">
            <h3 className="mb-3">Recent Posts</h3>
            <div className="list-group">
                {recentPosts.map((post, index) => (
                    <a key={index} href={`/blog/${post.slug}`} className="list-group-item list-group-item-action">
                        {post.title}
                    </a>
                ))}
            </div>
        </aside>
    );
}

export default RecentPosts;
