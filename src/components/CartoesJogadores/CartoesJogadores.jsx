import styles from './CartoesJogadores.module.css';

function CharacterCard({ personagem }) {
  return (
    <div className={styles.card}>
      <img src={personagem.imagem} alt={`Foto de ${personagem.nome}`} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{personagem.nome}</h2>
        <h3 className={styles.cardSubtitle}>{personagem.titulo}</h3>
        <p className={styles.cardBio}>{personagem.bio}</p>
      </div>
    </div>
  );
}

export default CharacterCard;