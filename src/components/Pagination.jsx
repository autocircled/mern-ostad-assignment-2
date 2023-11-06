// Pagination.js
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${currentPage === number ? 'active' : ''}`}
                    >
                        <button
                            onClick={() => onPageChange(number)}
                            className="page-link"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
