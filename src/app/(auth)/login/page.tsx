'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';
import styles from './login.module.css';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simular processo de login
        setTimeout(() => {
            console.log('Login attempt:', formData);
            setIsLoading(false);

            // Redirecionar para a página inicial após login bem-sucedido
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
        <div className={styles.loginPage}>
           {/* Main Content */}
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.loginCard}>

                        {/* Welcome Section */}
                        <div className={styles.welcomeSection}>
                            <h1 className={styles.title}>Entre na sua conta</h1>
                        </div>

                        {/* Login Form */}
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
                                    <Link href="/forgot-password" className={styles.forgotPassword}>
                                        Esqueceu a senha?
                                    </Link>
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
                                    'Entrar'
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
                                <Link href="/register" className={styles.registerLink}>
                                    Cadastre-se aqui
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;