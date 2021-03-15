// @ts-nocheck
import {lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Nav/Navbar.jsx';
import Footer from './components/footer.components';
import Spinner from './components/spinner.component';
import ErrorBoundary from './components/error-boundary.component';

// Context
import { AuthProvider } from './context/context';

// Private Route
import AuthRoute from './utils/AuthRoute';

// CSS
import './App.css';
// Pages

const Home = lazy(() => import('./pages/home.pages'))
const AboutUs = lazy(() => import('./pages/about-us.pages'))
const ServiceMenu = lazy(() => import('./pages/service-menu.pages'))
const ContactUs = lazy(() => import('./pages/contact-us.pages'))
const BookOnline = lazy(() => import('./pages/book-online.pages'))
// const Gallery = lazy(() => import('./pages/Gallery.pages'))
const Admin = lazy(() => import('./pages/Admin'));
const Login = lazy(() => import('./pages/Login'));


const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <main className='flex flex-col justify-between'>
          <Navbar />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about-us'>
                <AboutUs/>
              </Route>
              <Route exact path='/service-menu' >
                <ServiceMenu/>
              </Route>
              <Route exact path='/contact-us' >
                <ContactUs />
              </Route>
              <Route exact path='/book-online' >
                <BookOnline />
              </Route>
              {/*<Route exact path='/gallery' >
                <Gallery />
              </Route>*/}
              <AuthRoute path='/admin' component={Admin} />
              <Route exact path='/login' >
                <Login />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </main>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
