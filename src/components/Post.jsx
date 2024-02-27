import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Muito legal, adorei!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publisehdDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publisehdDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarURL} hasBorder={false} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publisehdDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publisehdDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              // eslint-disable-next-line react/jsx-key
              return <p>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                // eslint-disable-next-line react/jsx-key
                <p>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong> Deixe seu comentário </strong>
          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
          ></textarea>

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            // eslint-disable-next-line react/jsx-key
            return <Comment content={comment} />;
          })}
        </div>
      </article>
    </>
  );
}
