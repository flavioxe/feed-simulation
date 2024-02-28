import styles from "./Comment.module.css";

import avatar from "../assets/woman.jpg";
import { HandsClapping, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar src={avatar} hasBorder={false} />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Sophia Rodrigues</strong>
                <time
                  title="25 de maio às 16:36"
                  dateTime="2024-02-25 16:36:30"
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <HandsClapping />
              Aplaudir
              <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
