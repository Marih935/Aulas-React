import React from 'react';
import Menu from './Menu';

function LoginPage(){
  return(
    <div>
      <Menu></Menu>
      <div className='flex items-center '>
        <Login></Login>
      </div>
    </div>
  );
}

export default Login;