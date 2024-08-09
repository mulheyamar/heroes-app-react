import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();



  const onLogged = () => {
    const lastPath = localStorage.getItem('lastPath') || '/marvel'

    login(' Pepito López');

    navigate(lastPath, {replace: true})
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button 
        className="btn btn-primary"
        onClick={ onLogged }
        >
        Login
      </button>
    </div>
  )
}
