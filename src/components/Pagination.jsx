import React, { Fragment, useState, useEffect } from "react";

import '../assets/styles/Pagination.scss';

const Pagination = props =>{
    const [pagination, setPagination] = useState({pager:{}});
    const {items, onChangePage, initialPage, itemsPerPage} = props;
    useEffect( () => {
        if (items && items.length) {
            setPage(initialPage);
        }
     }, [items, initialPage]);

    function setPage(page) {
        let pager = pagination.pager,
            pageOfItems;
        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = getPager(items.length, page, itemsPerPage);

        let newItems = items;
        pageOfItems = newItems.slice(pager.startIndex, pager.endIndex + 1);

        setPagination({ pager: pager });

        onChangePage(pageOfItems);
    }

    function getPager(totalItems, currentPage, pageSize) {
        let totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages;
        currentPage = currentPage || 1;

        pageSize = pageSize || 10;

        totalPages = Math.ceil(totalItems / pageSize);

        
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        startIndex = (currentPage - 1) * pageSize;
        endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };

    const pager = pagination.pager;
   

    return(
        <Fragment>
        {(!pager.pages || pager.pages.length <= 1) ? null:
            <nav className="pagination__container">
                <ul className="pagination__list">
                    <li className={`${pager.currentPage === 1 ? 'disabled' : ''} pagination__first`}>
                        <button disabled={pager.currentPage === 1} className="pagination__item_button" onClick={() => setPage(1)}>First</button>
                    </li>
                    <li className={`${pager.currentPage === 1 ? 'disabled' : ''} pagination__previous`}>
                        <button disabled={pager.currentPage === 1} className="pagination__item_button" onClick={() => setPage(pager.currentPage - 1)}>Previous</button>
                    </li>
                    {pager.pages.map((page, index) =>
                        <li key={index} className={`${pager.currentPage === page ? 'active' : ''} pagination__item`}>
                            <button className="pagination__item_button" onClick={() => setPage(page)}>{page}</button>
                        </li>
                    )}
                    <li className={`${pager.currentPage === pager.totalPages ? 'disabled' : ''} pagination__next`}>
                        <button disabled={pager.currentPage === pager.totalPages} className="pagination__item_button" onClick={() => setPage(pager.currentPage + 1)}>Next</button>
                    </li>
                    <li className={`${pager.currentPage === pager.totalPages ? 'disabled' : ''} pagination__last`}>
                        <button  disabled={pager.currentPage === pager.totalPages} className="pagination__item_button" onClick={() => setPage(pager.totalPages)}>Last</button>
                    </li>
                </ul>
            </nav>
        }
        </Fragment>
    )
};

export default Pagination;