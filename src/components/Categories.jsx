// Categories.js
import React from 'react';

function Categories() {
    const categories = [
        {
            name: 'WordPress',
            count: 12
        },
        {
            name: 'Angular',
            count: 8
        },
        {
            name: 'React',
            count: 9
        },
        {
            name: 'Vue',
            count: 3
        },
        {
            name: 'Laravel',
            count: 5
        },
        {
            name: 'Django',
            count: 2
        }
    ];

    return (
        <aside className="blog-categories mb-5">
            <h3 className="mb-3">Categories</h3>
            <ul className="list-group">
                {categories.map((category, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {category.name}
                        <span className="badge badge-primary badge-pill text-bg-light">{category.count}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Categories;
