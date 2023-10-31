
import { useState } from "react";
import jpIMG from "./assets/Learning-bro.svg";
import './styles.css';



function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //trabalhando com estados. //setemail recebe o valor e repassa para e-mail


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem-vindo</span>
            
            <span className="login-form-title">
              <a href="#"><img src={jpIMG} alt="Uniavalia" title="Home" /></a>
            </span>

            <div className="wrap-input">
                <input className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required               
                />
                {/* capturando o valor e setando o status no proprio input */}
                <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
                <input className={password!=="" ? 'has-val input' : 'input'} type="password" required
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                
                />
                <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
                <span className="txt1">Não possui conta?</span>

                <a href="#" className="txt2">Criar conta</a>
            </div>
        </form>
      </div>
    </div>
     </div >
  );
}

export default App;
