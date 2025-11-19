import React from 'react';
import { Sparkles, Zap, Palette, Globe, Award, Heart } from 'lucide-react';
import styles from './styles.module.css';

const AboutAuthor: React.FC = () => {
  return (
    <section id="autora" className={styles.aboutAuthor}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
      </div>

      <div className={styles.container}>
        
        {/* Modern Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <Zap size={16} />
            <span>Jovem Visionária</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Wendhy <span className={styles.titleAccent}>She Cat</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Reimaginando a literatura com uma perspectiva fresca e inovadora
          </p>
        </div>

        <div className={styles.contentGrid}>
          
          {/* Main Content */}
          <div className={styles.mainContent}>
            <div className={styles.heroText}>
              <div className={styles.ageBadge}>
                <span>13</span>
                <span>anos</span>
              </div>
              <p className={styles.leadText}>
                Uma <span className={styles.gradientText}> força criativa</span> que está 
                transformando o cenário literário com sua visão única e autêntica.
              </p>
            </div>

            <div className={styles.description}>
              <p>
                Wendhy She Cat representa a <strong>nova geração de autores</strong> que 
                desafiam convenções e trazem vozes frescas para a literatura. Sua 
                abordagem multidisciplinar e sensibilidade artística criam obras 
                que ressoam com leitores de todas as idades.
              </p>
            </div>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>01</div>
                <div className={styles.statContent}>
                  <Sparkles size={20} />
                  <span>Jovem Prodígio</span>
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>02</div>
                <div className={styles.statContent}>
                  <Palette size={20} />
                  <span>Multitalentosa</span>
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>03</div>
                <div className={styles.statContent}>
                  <Globe size={20} />
                  <span>Visão Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className={styles.visualContent}>
            <div className={styles.geometricCard}>
              <div className={styles.cardContent}>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarGlow}></div>
                  <div className={styles.avatar}>
                    <Award className={styles.avatarIcon} />
                  </div>
                </div>
                <div className={styles.cardBadge}>
                  <Heart size={14} />
                  <span>Inspiradora</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className={styles.techElements}>
              <div className={styles.techDot}></div>
              <div className={styles.techLine}></div>
              <div className={styles.techSquare}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;