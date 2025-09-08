import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

// ? Components
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

// ? Styles
import styles from "./Posts.module.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const pageParam = Number(searchParams.get("page") || 1);
    const sizeParam = Number(searchParams.get("pageSize") || 20);

    const currentPage =
        Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const pageSize = Number.isNaN(sizeParam) ? 20 : sizeParam;

    const queryString = useMemo(() => {
        const params = new URLSearchParams();
        params.set("_page", String(currentPage));
        params.set("_limit", String(pageSize));
        return params.toString();
    }, [currentPage, pageSize]);

    useEffect(() => {
        let aborted = false;
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await fetch(`${API_URL}?${queryString}`);
                const data = await response.json();
                if (aborted) return;
                setPosts(data);
                const total = response.headers.get("x-total-count");
                // Fallback to all items length when header missing
                setTotalItems(total ? Number(total) : 100);
            } catch {
                if (!aborted) {
                    setPosts([]);
                    setTotalItems(0);
                }
            } finally {
                if (!aborted) setIsLoading(false);
            }
        }
        fetchPosts();
        return () => {
            aborted = true;
        };
    }, [queryString]);

    const handlePageChange = (page) => {
        setSearchParams({ page: String(page), pageSize: String(pageSize) });
    };

    const handlePageSizeChange = (size) => {
        setSearchParams({ page: "1", pageSize: String(size) });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Bài viết nổi bật</h2>
            <p className={styles.subtitle}>
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
                online và các kỹ thuật lập trình web.
            </p>

            {isLoading ? (
                <Loading label="Đang tải bài viết..." delayMs={400} />
            ) : (
                <div className={styles.cardList}>
                    {posts.map((post) => (
                        <article key={post.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3
                                    className={styles.cardTitle}
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        navigate(
                                            `/posts/${post.id}?page=${currentPage}&pageSize=${pageSize}`
                                        )
                                    }>
                                    {post.title}
                                </h3>
                                <p className={styles.cardExcerpt}>
                                    {post.body}
                                </p>
                                <div className={styles.badgeRow}>
                                    <span className={styles.badge}>
                                        Javascript
                                    </span>
                                    <span>1 năm trước</span>
                                    <span>·</span>
                                    <span>5 phút đọc</span>
                                </div>
                            </div>
                            <div>
                                {/* Placeholder for thumbnail */}
                                <div
                                    style={{
                                        width: 200,
                                        height: 120,
                                        borderRadius: 16,
                                        background: "#f3f4f6",
                                        border: "1px solid #e5e7eb",
                                    }}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            )}

            <div className={styles.paginationWrap}>
                <Pagination
                    totalItems={totalItems}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    maxPagesToShow={10}
                    showPageSizeSelector
                    pageSizeOptions={[10, 20, 30, 50]}
                    onPageSizeChange={handlePageSizeChange}
                />
            </div>
        </div>
    );
}

export default Posts;
