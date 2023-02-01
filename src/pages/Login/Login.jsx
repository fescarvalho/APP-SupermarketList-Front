import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../index.css';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import bang from '../../../public/images/shopping-bag.svg';
import './Login.css';
import { SAVE_USERNAME } from '../../constants/constants';

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const clickLogin = async () => {
    if (userName.length < 3) {
      alert('Username deve conter mais de 3 caracteres.');
      return;
    }

    localStorage.setItem(SAVE_USERNAME, userName);
    navigate('/list');
  };
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-header">
          <img src={bang} alt="" />
          <div className="login-header-descption">
            <h2>Sua lista de supermercado mais fácil do que nunca</h2>
            <p className="subtitle">
              Ajudamos você a organizar sua lista de compras de forma
              descomplicada.
            </p>
          </div>
        </div>
        <div className="login-form">
          <p className="subtitle">
            Digite abaixo seu usuário para ter acesso a sua lista de compras:
          </p>
          <Input
            label="Username"
            placeholder="Ex: Fernando"
            value={userName}
            onChange={(value) => setUserName(value)}
          />
          <Button onClick={clickLogin} text="Acessar" />
        </div>
      </div>
    </div>
  );
}

export default Login;
