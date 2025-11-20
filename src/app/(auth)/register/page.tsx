'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff, BookOpen, Phone } from 'lucide-react';
import styles from './register.module.css';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica
        if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        setIsLoading(true);

        // Simular processo de registro
        setTimeout(() => {
            console.log('Register attempt:', formData);
            setIsLoading(false);

            // Redirecionar para a página inicial após registro bem-sucedido
            router.push('/');
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.registerPage}>
                   {/* Main Content */}
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.registerCard}>

                        {/* Welcome Section */}
                        <div className={styles.welcomeSection}>
                            <h1 className={styles.title}>Crie sua conta</h1>
                        </div>

                        {/* Register Form */}
                        <form onSubmit={handleSubmit} className={styles.registerForm}>

                            {/* Name Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Nome completo
                                </label>
                                <div className={styles.inputWrapper}>
                                    <User size={18} className={styles.inputIcon} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Seu nome completo"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                            </div>

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

                            {/* Phone Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>
                                    Telefone
                                </label>
                                <div className={styles.inputWrapper}>
                                    <Phone size={18} className={styles.inputIcon} />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+258 84 000 0000"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="password" className={styles.label}>
                                    Senha
                                </label>
                                <div className={styles.inputWrapper}>
                                    <Lock size={18} className={styles.inputIcon} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Crie uma senha forte"
                                        className={styles.input}
                                        required
                                        minLength={6}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={styles.passwordToggle}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                <p className={styles.passwordHint}>
                                    Mínimo de 6 caracteres
                                </p>
                            </div>

                            {/* Confirm Password Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="confirmPassword" className={styles.label}>
                                    Confirmar senha
                                </label>
                                <div className={styles.inputWrapper}>
                                    <Lock size={18} className={styles.inputIcon} />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Digite a senha novamente"
                                        className={styles.input}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className={styles.passwordToggle}
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms Agreement */}
                            <div className={styles.termsGroup}>
                                <label className={styles.termsLabel}>
                                    <input type="checkbox" required className={styles.checkbox} />
                                    <span>
                                        Concordo com os{' '}
                                        <Link href="/terms" className={styles.termsLink}>
                                            Termos de Serviço
                                        </Link>{' '}
                                        e{' '}
                                        <Link href="/privacy" className={styles.termsLink}>
                                            Política de Privacidade
                                        </Link>
                                    </span>
                                </label>
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
                                    'Criar Minha Conta'
                                )}
                            </button>

                        </form>

                        {/* Divider */}
                        <div className={styles.divider}>
                            <span>ou</span>
                        </div>

                        {/* Login CTA */}
                        <div className={styles.loginSection}>
                            <p className={styles.loginText}>
                                Já tem uma conta?{' '}
                                <Link href="/login" className={styles.loginLink}>
                                    Entre aqui
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RegisterPage;