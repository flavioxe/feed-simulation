
import { Comment } from './Comment';

import styles from './Post.module.css'
import avatar from '../assets/avatar.jpg'
import { Avatar } from './Avatar';

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={avatar} hasBorder={false} />

                        <div className={styles.authorInfo}>
                            <strong>Flávio Mendonça</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>

                    <time title='25 de maio às 16:36' dateTime='2024-02-25 16:36:30'>Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>🚀💡 Criar novos projetos é a essência da nossa jornada! 💡🚀</p>
                    <p>Estou tão animado para compartilhar com vocês que estou mergulhando em um novo projeto de estudo. 💻✨ É incrível como cada novo desafio traz consigo oportunidades de aprendizado e crescimento.</p>
                    <p>
                        ➡️{' '}<a href='#'>https://github.com/flavioxe</a>
                    </p>
                    <p>Quem mais aqui adora começar algo novo? 🙋‍♂️🙋‍♀️ Compartilhe nos comentários o que te motiva a iniciar um novo projeto! 💬</p>
                    <p> 
                        <a href='#'>#test</a>{' '}
                        <a href='#'>#web</a>{' '}
                        <a href='#'>#project</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong> Deixe seu comentário </strong>
                    <textarea placeholder='Deixe um comentário'></textarea>

                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
            </article>
        </>
    );
}