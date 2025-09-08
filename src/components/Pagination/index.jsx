import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesLeft,
    faAnglesRight,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// ? Styles
import styles from "./Pagination.module.css";
// ? Components
import Button from "../Button";

function createPageRange(start, end) {
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
}

/**
 * Pagination Component
 * Props:
 * - totalItems: number (required)
 * - pageSize: number (default: 10)
 * - currentPage: number (default: 1)
 * - onPageChange: (page: number) => void (required)
 * - maxPagesToShow: number (default: 10)
 */
export default function Pagination({
    totalItems,
    pageSize = 10,
    currentPage = 1,
    onPageChange,
    maxPagesToShow = 10,
    showPageSizeSelector = false,
    pageSizeOptions = [10, 20, 30, 50],
    onPageSizeChange,
}) {
    const totalPages = Math.max(1, Math.ceil((totalItems || 0) / pageSize));

    if (totalPages <= 1) return null;

    const clampedCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

    const half = Math.floor(maxPagesToShow / 2);
    let start = Math.max(1, clampedCurrentPage - half);
    let end = Math.min(totalPages, start + maxPagesToShow - 1);
    start = Math.max(1, end - maxPagesToShow + 1);

    const pageNumbers = createPageRange(start, end);

    const goToPage = (page) => {
        if (!onPageChange) return;
        const next = Math.min(Math.max(1, page), totalPages);
        if (next !== clampedCurrentPage) onPageChange(next);
    };

    return (
        <nav className={styles.pagination} aria-label="Pagination Navigation">
            {showPageSizeSelector && (
                <div className={styles.pageSizeWrap}>
                    <select
                        className={styles.pageSizeSelect}
                        value={pageSize}
                        onChange={(e) =>
                            onPageSizeChange &&
                            onPageSizeChange(Number(e.target.value))
                        }
                        aria-label="Select page size">
                        {pageSizeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <Button
                className={styles.edgeBtn}
                onClick={() => goToPage(1)}
                disabled={clampedCurrentPage === 1}
                aria-label="First page"
                variant="secondary"
                rounded>
                <FontAwesomeIcon icon={faAnglesLeft} />
            </Button>
            <Button
                className={styles.edgeBtn}
                onClick={() => goToPage(clampedCurrentPage - 1)}
                disabled={clampedCurrentPage === 1}
                aria-label="Previous page"
                variant="secondary"
                rounded>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>

            {pageNumbers.map((page) => (
                <Button
                    key={page}
                    className={
                        page === clampedCurrentPage
                            ? `${styles.pageBtn} ${styles.active}`
                            : styles.pageBtn
                    }
                    onClick={() => goToPage(page)}
                    aria-current={
                        page === clampedCurrentPage ? "page" : undefined
                    }
                    aria-label={`Page ${page}`}
                    variant="secondary"
                    rounded>
                    {page}
                </Button>
            ))}

            <Button
                className={styles.edgeBtn}
                onClick={() => goToPage(clampedCurrentPage + 1)}
                disabled={clampedCurrentPage === totalPages}
                aria-label="Next page"
                variant="secondary"
                rounded>
                <FontAwesomeIcon icon={faChevronRight} />
            </Button>
            <Button
                className={styles.edgeBtn}
                onClick={() => goToPage(totalPages)}
                disabled={clampedCurrentPage === totalPages}
                aria-label="Last page"
                variant="secondary"
                rounded>
                <FontAwesomeIcon icon={faAnglesRight} />
            </Button>
        </nav>
    );
}
