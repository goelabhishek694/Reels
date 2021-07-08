import './App.css';
import AuthProvider from './Context/AuthProvider';
import Signup from './Components/Signup';
function App() {
  return (
   <AuthProvider>
     <Signup/>
   </AuthProvider>
  );
}

export default App;
