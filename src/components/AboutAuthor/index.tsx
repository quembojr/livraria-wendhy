import React from 'react';
import { Sparkles, Palette, Heart } from 'lucide-react';
import styles from './styles.module.css';

const AboutAuthor: React.FC = () => {
  return (
    <section id="autora" className={styles.aboutAuthor}>
      <div className={styles.container}>

        <div className={styles.content}>

          {/* Lado Esquerdo - Conteúdo */}
          <div className={styles.textContent}>
            <div className={styles.header}>
              <span className={styles.label}>A Autora</span>
              <h2 className={styles.title}>Wendhy She Cat</h2>
            </div>

            <div className={styles.description}>
              <p>
                Nasceu aos 18 de Janeiro de 2012, na cidade de
                Lichinga, Província de Niassa, Moçambique. Atualmente reside em
                Lichinga. Aos <strong>13 anos</strong> demonstrou curiosidade e paixão pelo conhecimento. 
                Muito cedo, começou a escrever o seu primeiro livro em prosa. 
                É multifacetada, criando ilustrações de animes inspiradas pela sua própria imaginação.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Sparkles size={18} />
                <span>Jovem Talentosa</span>
              </div>
              <div className={styles.feature}>
                <Palette size={18} />
                <span>Multitalentosa</span>
              </div>
              <div className={styles.feature}>
                <Heart size={18} />
                <span>Inspiradora</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Visual */}
          <div className={styles.visualContent}>
            <div className={styles.avatar}>
              <div className={styles.avatarCircle}>
              </div>
              <div className={styles.ageBadge}>
                <span>13 anos</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutAuthor;