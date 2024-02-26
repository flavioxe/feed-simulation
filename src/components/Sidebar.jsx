import { Avatar } from './Avatar'
import { PencilLine } from 'phosphor-react'

import styles from './sidebar.module.css'
import cover from '../assets/cover.jpg'
import avatar from '../assets/avatar.jpg'

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img src={cover} className={styles.cover} alt="Cover image" />

                <div className={styles.profile}>
                    <Avatar src={avatar} />
                  
                    <strong>Flávio Mendonça</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href='#'> 
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}