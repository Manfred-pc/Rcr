import { personagens } from '../../data/jogadores.js'; // Importa nossos dados
import CharacterCard from '../../components/CartoesJogadores/CartoesJogadores.jsx'; // Importa nosso componente
import styles from './Home.module.css'; // Importa o CSS da página

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Membros</h1>
      <div className={styles.characterGrid}>
        {personagens.map((p) => (
          <CharacterCard key={p.id} personagem={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;