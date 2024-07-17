import './App.css'
import Loading from './components/Loading';
import Logo from './components/Logo'
import { Suspense, lazy } from 'react';
const CreateNewWallet = lazy(() => import('./page/create-new-wallet/CreateNewWallet'));
function App() {

  return (
    <>
      <div className='content'>
        <Logo />
        <Suspense fallback={<Loading />}>
          <CreateNewWallet />
        </Suspense>
      </div>

    </>
  )
}

export default App
