import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Wendhy She Cat</span>
              <span className={styles.logoSubtitle}>Livraria Virtual</span>
            </div>
            <p className={styles.brandDescription}>
              Celebrando o talento e a inspiração de uma jovem autora extraordinária.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Navegação</h4>
            <div className={styles.links}>
              <a href="#inicio" className={styles.footerLink}>
                <ArrowRight size={14} />
                Início
              </a>
              <a href="#autora" className={styles.footerLink}>
                <ArrowRight size={14} />
                A Autora
              </a>
              <a href="#contato" className={styles.footerLink}>
                <ArrowRight size={14} />
                Contato
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.linksTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>contato@wendhyshecat.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>+258 84 028 6033</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>Lichinga, Niassa</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h4 className={styles.ctaTitle}>Não Perca!</h4>
            <p className={styles.ctaText}>
              Reserve seu exemplar autografado com exclusividade.
            </p>
            <button className={styles.footerCtaButton}>
              Garantir Meu Exemplar
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © 2025 Wendhy She Cat Livraria Virtual. Todos os direitos reservados.
          </div>
          <div className={styles.legalLinks}>
            <a href="#privacidade" className={styles.legalLink}>Política de Privacidade</a>
            <a href="#termos" className={styles.legalLink}>Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;