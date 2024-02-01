import './App.css';
import { useOnlineStatus } from './useOnlineStatus.js';
function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function App() {
  return (
  <></>
  );
}

export default App;
