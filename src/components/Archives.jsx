// Archives.js
import React from 'react';

function Archives() {
    const archives = ['January 2023', 'December 2022', 'November 2022', 'October 2022', 'September 2022', 'August 2022'];

    return (
        <aside className="blog-archives mb-5">
            <h3 className="mb-3">Archives</h3>
            <ul className="list-group">
                {archives.map((archive, index) => (
                    <li key={index} className="list-group-item">
                        <a href="#!">{archive}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Archives;
