import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationSelector = ({currentPage, pages, onPageChange}) => {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination className="my-4 justify-center items-center ">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1} // Disable if on the first page
                    />
                </PaginationItem>
                {pageNumbers.map(pageNumber => (
                    <PaginationItem key={pageNumber}   active={pageNumber === currentPage}>
                        <PaginationLink
                            href="#"
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === pages} // Disable if on the last page
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationSelector;
