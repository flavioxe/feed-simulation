import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/flavioxe.png",
      name: "Flávio Mendonça",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "🚀💡 Criar novos projetos é a essência da nossa jornada! 💡🚀",
      },
      {
        type: "paragraph",
        content: `Estou tão animado para compartilhar com vocês que estou mergulhando
          em um novo projeto de estudo. 💻✨ É incrível como cada novo desafio
          traz consigo oportunidades de aprendizado e crescimento.`,
      },
      {
        type: "link",
        content: `https://github.com/flavioxe`,
      },
      {
        type: "paragraph",
        content: `Quem mais aqui adora começar algo novo? 🙋‍♂️🙋‍♀️ Compartilhe nos
        comentários o que te motiva a iniciar um novo projeto! 💬`,
      },
    ],
    publishedAt: new Date("2024-02-25 16:36:30"),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/MRonald.png",
      name: "Michael Ronald",
      role: "Back-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: " Explorando os bastidores da web hoje! 💡💻 ",
      },
      {
        type: "paragraph",
        content: ` Estou fascinado com o mundo do back end e como ele impulsiona toda a experiência online que tanto amamos. 🌐✨ Desde a estruturação dos dados até a implementação de funcionalidades complexas, o back end é o cérebro por trás de tudo isso. 🧠💥`,
      },
      {
        type: "paragraph",
        content: `Quem mais aqui é apaixonado por codificar o funcionamento interno da web? Compartilhe suas experiências nos comentários!`,
      },
    ],
    publishedAt: new Date("2024-02-27 07:40:00"),
  },
  {
    id: 3,
    author: {
      avatarURL: "https://github.com/julianak-goia.png",
      name: "Juliana Goia",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "🖌️💡 Navegando pelas águas do design e front end hoje! 💡🌊 ",
      },
      {
        type: "paragraph",
        content: ` Estou encantada pela maneira como a estética e a funcionalidade se entrelaçam para criar uma experiência digital única. 💻🎨 Do esboço inicial ao código final, o front end é como uma tela em branco ganhando vida com cada linha de código. 🚀✨`,
      },
      {
        type: "paragraph",
        content: `Quem mais aqui se sente como um artista digital, esculpindo interfaces para o mundo ver? Compartilhe seus insights e projetos nos comentários abaixo! 🌟👩‍💻`,
      },
    ],
    publishedAt: new Date("2024-02-27 07:40:00"),
  },
  {
    id: 4,
    author: {
      avatarURL: "https://github.com/rafael-coding.png",
      name: "Rafael de Abreu",
      role: "Full-Stack Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Explorando os horizontes do desenvolvimento full stack hoje! 🌟💡 ",
      },
      {
        type: "paragraph",
        content: `stou imerso na arte de combinar o melhor dos dois mundos: back end e front end. 💼🎨 Desde a arquitetura robusta do back end até a criação de interfaces intuitivas no front end, o desenvolvimento full stack é como ter o poder de moldar toda a experiência digital. 🚀🌐`,
      },
      {
        type: "paragraph",
        content: `Quem mais aqui se sente apaixonado por dominar todas as camadas do desenvolvimento web? Compartilhe suas experiências e projetos nos comentários abaixo! 💬💻`,
      },
    ],
    publishedAt: new Date("2024-02-27 07:40:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
