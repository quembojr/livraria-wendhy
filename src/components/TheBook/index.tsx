import React from 'react';
import { BookOpen, Star, Feather, Award, Clock, Bookmark } from 'lucide-react';
import styles from './styles.module.css';

const TheBook: React.FC = () => {
  return (
    <section id="livro" className={styles.theBook}>
      <div className={styles.container}>

        {/* Header da Seção */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Conheça a Obra</h2>
          <p className={styles.sectionSubtitle}>Uma jornada literária única</p>
        </div>

        <div className={styles.content}>

          {/* Lado Esquerdo - Visual do Livro com Efeitos */}
          <div className={styles.bookVisual}>
            <div className={styles.bookWrapper}>
              <div className={styles.book}>
                <div className={styles.bookCover}>
                  <div className={styles.coverContent}>
                    <div className={styles.coverBadge}>Lançamento</div>
                    <div className={styles.coverTitle}>Jornadas do Caos</div>
                    <div className={styles.coverSubtitle}>Asas de Luz e Sombra</div>
                    <div className={styles.coverAuthor}>Wendhy She Cat</div>
                  </div>
                </div>
              </div>

              {/* Elementos Decorativos */}
              <div className={styles.floatingElement1}></div>
              <div className={styles.floatingElement2}></div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo Aprimorado */}
          <div className={styles.bookInfo}>
            <div className={styles.bookHeader}>
              <h1 className={styles.title}>
                Jornadas do Caos
              </h1>
              <span className={styles.subtitle}>Asas de Luz e Sombra</span>

              {/* Rating */}
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={styles.star} />
                ))}
                <span className={styles.ratingText}>(4.8/5 - 234 avaliações)</span>
              </div>
            </div>

            {/* Descrição Expandida */}
            <div className={styles.description}>
              <p>
                Uma obra profunda que explora as dualidades humanas através
                de narrativas poéticas e reflexivas. <strong>Wendhy She Cat</strong> conduz
                o leitor em uma jornada entre luz e sombra, caos e ordem,
                revelando as complexidades da alma humana.
              </p>
            </div>



            {/* Especificações Técnicas */}
            <div className={styles.specs}>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <Bookmark size={18} className={styles.specIcon} />
                  <div>
                    <span className={styles.specValue}>256 páginas</span>
                    <span className={styles.specLabel}>Conteúdo</span>
                  </div>
                </div>
                <div className={styles.specItem}>
                  <Clock size={18} className={styles.specIcon} />
                  <div>
                    <span className={styles.specValue}>18 capítulos</span>
                    <span className={styles.specLabel}>Estrutura</span>
                  </div>
                </div>
                <div className={styles.specItem}>
                  <Award size={18} className={styles.specIcon} />
                  <div>
                    <span className={styles.specValue}>1ª edição</span>
                    <span className={styles.specLabel}>Colecionador</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-Action Aprimorado */}
            <div className={styles.ctaSection}>
              <div className={styles.ctaButtonWrapper}>
                <button className={styles.reserveButton}>
                  <BookOpen size={20} />
                  Reservar Agora
                </button>
              </div>


              <div className={styles.ctaNote}>
                <Clock size={14} />
                <span>Entrega em 5-7 dias úteis</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TheBook;