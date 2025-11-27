'use client';
import React, { useState } from 'react';
import { Star, Award, Clock, BookOpen, Heart, Zap, User, Mail, Phone } from 'lucide-react';
import styles from './Conversion.module.css';

const Conversion: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const scriptURL = "https://script.google.com/macros/s/AKfycbzfiJ3qSpHKwEPwhpfGAITT_XuYglTT2KjylGuL9x-b8HeKo_4u6k2drxl52_R5GBql/exec";

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
    alert("Por favor preencha todos os campos, incluindo a data.");
    return;
  }

  try {
    const form = new FormData();
    form.append("nome", formData.nome);
    form.append("email", formData.email);
    form.append("telefone", formData.telefone);

   const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: form
    });

    console.log('a resposta', response);
    
    alert("Reserva realizada com sucesso!");
    setFormData({ nome: '', email: '', telefone: '' });

  } catch (error) {
    console.error("Erro ao enviar:", error);
    alert("Ocorreu um erro. Tente novamente.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="conversao" className={styles.conversion}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Zap size={16} />
            <span>Pré-venda Exclusiva</span>
          </div>
          <h2 className={styles.title}>Reserve Seu Exemplar</h2>
          <p className={styles.subtitle}>Garanta o preço especial de lançamento antes do dia 29</p>
        </div>

        <div className={styles.content}>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Award /></div>
              <div className={styles.benefitContent}>
                <h3>Edição de Colecionador</h3>
                <p>Acabamento premium e materiais de alta qualidade</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Star /></div>
              <div className={styles.benefitContent}>
                <h3>Exemplar Autografado</h3>
                <p>Assinatura personalizada da Whendy She Cat</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Clock /></div>
              <div className={styles.benefitContent}>
                <h3>Entrega Prioritária</h3>
                <p>Primeiros a receber o livro no lançamento</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Heart /></div>
              <div className={styles.benefitContent}>
                <h3>Presente Exclusivo</h3>
                <p>Marcador de página especial da edição limitada</p>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <div className={styles.formCard}>
              {/* <div className={styles.counter}>
                <div className={styles.counterItem}>
                  <span className={styles.counterNumber}>43</span>
                  <span className={styles.counterLabel}>exemplares restantes</span>
                </div>
              </div> */}

              <div className={styles.pricing}>
                <div className={styles.price}>
                  
                  <span className={styles.amount}>1.000</span>
                  <span className={styles.currency}>MTs</span>
                </div>
                <div className={styles.priceComparison}>
                  <span className={styles.originalPrice}>1.400 MTs após o lançamento</span>
                  <span className={styles.discountNote}>Preço especial de PRÉ-VENDA</span>
                </div>
              </div>

              <div className={styles.launchInfo}>
                <div className={styles.launchBadge}>
                  <Clock size={16} />
                  <span>LANÇAMENTO: 29 DESTE MÊS</span>
                </div>
                <p className={styles.launchText}>Reserve agora e pague apenas 1.000 MTS</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.reservationForm}>
                <div className={styles.formGroup}>
                  <div className={styles.inputWrapper}>
                    <User size={18} className={styles.inputIcon} />
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputWrapper}>
                    <Mail size={18} className={styles.inputIcon} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputWrapper}>
                    <Phone size={18} className={styles.inputIcon} />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu WhatsApp"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                </div>
                <button type="submit" className={styles.submitButton}>
                  <BookOpen size={20} />
                  <span>Reservar Agora - 1.000 MTS</span>
                </button>
              </form>

              <div className={styles.guarantees}>
                <div className={styles.guarantee}>
                  <span>✓</span>
                  <span>Preço de lançamento garantido</span>
                </div>
                <div className={styles.guarantee}>
                  <span>✓</span>
                  <span>Pagamento seguro</span>
                </div>
                <div className={styles.guarantee}>
                  <span>✓</span>
                  <span>Entrega no dia do lançamento</span>
                </div>
              </div>

              <div className={styles.urgency}>
                <Zap size={16} />
                <span>Preço especial válido apenas até o dia do lançamento!</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonial}>
          <div className={styles.quote}>"Reservei o meu com o preço de lançamento! Economizei 400 MTS e vou receber no dia 29."</div>
          <div className={styles.author}>— Maria S., uma das primeiras a reservar</div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;