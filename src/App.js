import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <div style={{ fontFamily: 'Poppins' }}>
      <ChatEngine
        height="100vh"
        projectID="be4b8698-7205-4e00-8adf-6b964e25211f"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  )
}

export default App
