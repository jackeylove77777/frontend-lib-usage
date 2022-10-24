import React from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from '../features/user'
function Login() {
  console.log('login render');
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "candy", age: 100, email: "776109620@qq.com" })
          );
        }}
      >
        Login
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(
            logout()
          );
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login