import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";

// ? Assets
import avatar from "../../assets/images/avatar.jpg";

// ? Styles
import styles from "./PostDetail.module.css";

// ? Components
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function PostDetail() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { postId } = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let aborted = false;

        async function fetchData() {
            setIsLoading(true);
            try {
                const res = await fetch(`${API_URL}/${postId}`);
                if (res.status === 404) {
                    navigate("/posts", { replace: true });
                    return;
                }
                if (!res.ok) throw new Error("Failed to fetch post");
                const data = await res.json();
                if (aborted) return;
                setPost(data);

                const cmtRes = await fetch(`${API_URL}/${postId}/comments`);
                const cmtData = await cmtRes.json();
                if (aborted) return;
                setComments(cmtData);
            } catch {
                if (!aborted) navigate("/posts", { replace: true });
            } finally {
                if (!aborted) setIsLoading(false);
            }
        }

        fetchData();
        return () => {
            aborted = true;
        };
    }, [postId, navigate]);

    if (isLoading) {
        return <Loading label="Đang tải bài viết..." />;
    }

    if (!post) return null;

    return (
        <div className={styles.container}>
            <Button
                variant="secondary"
                onClick={() => {
                    const page = searchParams.get("page") || "1";
                    const pageSize = searchParams.get("pageSize") || "20";
                    navigate(`/posts?page=${page}&pageSize=${pageSize}`, {
                        replace: true,
                    });
                }}
                style={{ marginBottom: 16 }}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Quay lại danh sách
            </Button>
            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.metaRow}>
                <img
                    src={avatar}
                    alt="Nguyễn Xuân Quý"
                    className={styles.avatar}
                />
                <div>
                    <div className={styles.author}>Nguyễn Xuân Quý</div>
                    <div className={styles.subtle}>
                        14 ngày trước · 2 phút đọc
                    </div>
                </div>
            </div>

            <div className={styles.content}>{post.body}</div>

            <section className={styles.commentsSection}>
                <h2 className={styles.commentsTitle}>
                    Bình luận ({comments.length})
                </h2>
                <ul className={styles.commentList}>
                    {comments.map((cmt) => (
                        <li key={cmt.id} className={styles.commentItem}>
                            <div className={styles.commentHeader}>
                                <div className={styles.commentName}>
                                    {cmt.name}
                                </div>
                                <div className={styles.commentEmail}>
                                    {cmt.email}
                                </div>
                            </div>
                            <p className={styles.commentBody}>{cmt.body}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default PostDetail;
