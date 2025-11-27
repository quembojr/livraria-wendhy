'use client';
import React, { useState } from 'react';
import { Star, Award, Clock, BookOpen, Heart, Zap, User, Mail, Phone } from 'lucide-react';
import styles from './Conversion.module.css';

const Conversion: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '' // novo campo
  });

  const scriptURL = "https://script.google.com/macros/s/AKfycbxOliKUcoKQ6TF_6C5Ce0yGQ6lU-pOkTCV_z6wQt3cyBleothe7GXsgAPJl_7CVdEmb/exec";

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim() || !formData.data) {
    alert("Por favor preencha todos os campos, incluindo a data.");
    return;
  }

  try {
    const form = new FormData();
    form.append("nome", formData.nome);
    form.append("email", formData.email);
    form.append("telefone", formData.telefone);
    form.append("data", formData.data);

   const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors", // obrigatório
      body: form          // <-- agora está correcto
    });

    console.log('a resposta', response);
    
    alert("Reserva realizada com sucesso!");
    setFormData({ nome: '', email: '', telefone: '', data: '' });

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
            <span>Reserva Exclusiva</span>
          </div>
          <h2 className={styles.title}>Reserve Seu Exemplar</h2>
          <p className={styles.subtitle}>Garanta sua edição limitada antes que esgote</p>
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

              <div className={styles.counter}>
                <div className={styles.counterItem}>
                  <span className={styles.counterNumber}>43</span>
                  <span className={styles.counterLabel}>exemplares restantes</span>
                </div>
              </div>

              <div className={styles.pricing}>
                <div className={styles.price}>
                  <span className={styles.currency}>MZN</span>
                  <span className={styles.amount}>50</span>
                </div>
                <div className={styles.priceNote}>Preço especial de lançamento</div>
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
                  <span>Reservar Agora</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.testimonial}>
          <div className={styles.quote}>"Já reservei o meu! Mal posso esperar para ter esta obra prima em mãos."</div>
          <div className={styles.author}>— Maria S., uma das primeiras a reservar</div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
