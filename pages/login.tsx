import type { NextPage } from "next";
const Login: NextPage = () => {
    const handlerSubmit = () => {}
    return (
      <form>
          <input type='text' placeholder='usuario' autoComplete='false' />
          <input type='password' autoComplete='false'/>
          <button type='submit' onClick={handlerSubmit}>Enviar</button>        
      </form>
    );
  };
  export default Login;