import React, {useState} from 'react';


export const AuthContext = React.createContext({
  isAuth:false,
  login: ()=>{}
});

const AuthContextProvider = props => {
const [isAuthenticated, setIsAuthenticated] = useState({
  username:'', password:''
});



const loginHandler = () =>{
  setIsAuthenticated({
    username:'ivan', password:'password'
  })
}

return(
  <AuthContext.Provider value={{login: loginHandler, isAuth:isAuthenticated}}>
    {props.children}
</AuthContext.Provider>
)
};


export default AuthContextProvider;
