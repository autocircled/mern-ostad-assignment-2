import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';
import RecentPosts from '../components/RecentPosts';
import Categories from '../components/Categories';
import Archives from '../components/Archives';
import Pagination from '../components/Pagination';
import image1 from '../assets/images/post-1.svg';
import image2 from '../assets/images/post-2.svg';
import image3 from '../assets/images/post-3.svg';
import image4 from '../assets/images/post-4.svg';
import image5 from '../assets/images/post-5.svg';
import image6 from '../assets/images/post-6.svg';

function Blog() {

    const postsPerPage = 4; // Number of posts per page
    const [currentPage, setCurrentPage] = useState(1);

    // Sample blog post data (you can replace this with your own blog post information)
    const blogPosts = [
        {
            title: 'Blog Post 1',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'October 1, 2023',
            slug: 'blog-post-1', // You can use a unique identifier or slug for the post
            image: image1,
        },
        {
            title: 'Blog Post 2',
            excerpt: 'Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.',
            date: 'September 15, 2023',
            slug: 'blog-post-2',
            image: image2,
        },
        {
            title: 'Blog Post 3',
            excerpt: 'Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.',
            date: 'September 15, 2023',
            slug: 'blog-post-3',
            image: image3,
        },
        {
            title: 'Blog Post 4',
            excerpt: 'Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.',
            date: 'September 15, 2023',
            slug: 'blog-post-4',
            image: image4,
        },
        {
            title: 'Blog Post 5',
            excerpt: 'Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.',
            date: 'September 15, 2023',
            slug: 'blog-post-5',
            image: image5,
        },
        {
            title: 'Blog Post 6',
            excerpt: 'Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.',
            date: 'September 15, 2023',
            slug: 'blog-post-6',
            image: image6,
        },
        // Add more blog post data here
    ];

    const totalPosts = blogPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        {/* <BlogPosts /> */}
                        <BlogPosts posts={currentPosts} />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={onPageChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="sidebar mt-auto py-5">
                            <RecentPosts />
                            <Categories />
                            <Archives />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;