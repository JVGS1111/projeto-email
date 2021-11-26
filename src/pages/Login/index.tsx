import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useData } from '../../hooks/dataContext';
import styles from './styles.module.scss';

export function Login() {

    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const { verifyLogin, isLogged } = useData();
    const history = useHistory();

    useEffect(() => {
        if (isLogged) {
            history.push('/dashboard');
        }
    }, [isLogged]);

    return (
        <main className={styles.login}>
            <div className={styles.container}>
                <form >
                    <label className={styles.title}>LOGIN</label>
                    <label>Nome:</label>
                    <input onChange={(e) => setNome(e.target.value)} type="email" name="email" id="email" placeholder="meu_email@Email.com" required />
                    <label>Senha:</label>
                    <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" id="senha" placeholder="*****" required minLength={5} />
                    <a href="#">Não tem conta ?</a>
                    <a href="#">Esqueci minha senha</a>
                    <button onClick={() => verifyLogin(nome, senha)} type="button">Entrar</button>
                </form>
            </div>

        </main >
    );
}