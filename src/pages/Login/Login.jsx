import { useState } from "react";
import "../.././index.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-header">
          <img src="../../../public/images/shopping-bag.svg" alt="" />
          <div className="login-header-descption">
            <h2>Sua lista de supermercado mais fácil do que nunca</h2>
            <p className="subtitle">
              Ajudamos você a organizar sua lista de compras de forma descomplicada.
            </p>
          </div>
        </div>
        <div className="login-form">
          <p className="subtitle">
            Digite abaixo seu usuário para ter acesso a sua lista de compras:
          </p>
          <Input
            label="Username"
            placeholder="Ex: fernando@teste.com"
            value={userName}
            onChange={(value) => setUserName(value)}
          />
          <Button text="Acessar" />
        </div>
      </div>
    </div>
  );
};

export default Login;
