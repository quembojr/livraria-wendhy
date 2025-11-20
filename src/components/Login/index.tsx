'use client';
import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';
import styles from './styles.module.css';

interface LoginProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular processo de login
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Aqui você integraria com sua API de autenticação
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginContainer}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <BookOpen size={24} className={styles.logoIcon} />
            <span className={styles.logoText}>Wendhy She Cat</span>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.title}>Bem-vindo de volta</h1>
            <p className={styles.subtitle}>Entre na sua conta para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            
            {/* Email Field */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className={styles.formGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="password" className={styles.label}>
                  Senha
                </label>
                <button type="button" className={styles.forgotPassword}>
                  Esqueceu a senha?
                </button>
              </div>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Sua senha"
                  className={styles.input}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passwordToggle}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className={styles.loadingSpinner}></div>
              ) : (
                'Entrar na Minha Conta'
              )}
            </button>

          </form>

          {/* Divider */}
          <div className={styles.divider}>
            <span>ou</span>
          </div>

          {/* Register CTA */}
          <div className={styles.registerSection}>
            <p className={styles.registerText}>
              Não tem uma conta?{' '}
              <button 
                type="button" 
                onClick={onSwitchToRegister}
                className={styles.registerLink}
              >
                Cadastre-se aqui
              </button>
            </p>
          </div>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Acompanhe seus pedidos</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Lista de desejos</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Reservas exclusivas</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;