import Profile from './Profile/Profile';
import './App.css';

export default function App() {
  const handleName = (name) => alert(`I'm ${name}`);
  return (
    <div >
     <Profile
    fullName= "Kharrat Amine"
    bio="Web developer in formation"
    profession="call center"
     handleName={handleName}
     />
    </div>
  );
}


