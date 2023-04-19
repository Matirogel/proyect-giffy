import React, {Suspense} from 'react';
import { Link, Route } from 'wouter'

import Header from './components/Header/Header';

import Search from './pages/Search/Search'
import Detail from './pages/Detail/Detail'
import Error404 from './pages/Error404'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import MyFavs from './pages/MyFavs/MyFavs';

import { GifsContextProvider } from './context/GifsContext'
import { UserContextProvider } from './context/UserContext';

import './App.css';


const HomePage = React.lazy(() => import('./pages/Home/Home'))

function App() {
  return (   
      <UserContextProvider>
        <div className="App">
          <Suspense fallback={null}>
            <section className='App-content'>
              <Header />
              <Link to='/'>
                <div className='App-logo-container'>
                  <figure className='App-logo-figure'>
                    <img className='App-logo' alt='Logo App' src='./logo.png' />
                  </figure>
                </div>
              </Link>
              <GifsContextProvider>
                <Route 
                  component={HomePage}
                  path='/'
                />
                <Route
                  component={Search}
                  path='/search/:keyword/:rating?'
                />
                <Route 
                  component={Detail}
                  path='/gif/:id'
                />
                <Route 
                  component={Login}
                  path='/login'
                />
                <Route 
                  component={Register}
                  path='/register'
                />
                <Route 
                  component={MyFavs}
                  path='/favs'
                />
                <Route 
                  component={Error404}
                  path='/404'
                />
              </GifsContextProvider>
            </section>
          </Suspense>    
        </div>
      </UserContextProvider>    
  );
}

export default App;
