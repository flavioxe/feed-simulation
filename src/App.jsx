import { Post } from './components/Post'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='flavioxe' content='Lorem impsun' /> 
          <Post author='autor 2' content='Lorem impsun bla bla pipipopo' /> 
        </main>
      </div>
      
     
    </>
  )
}