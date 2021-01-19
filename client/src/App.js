import './App.css';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { currentUser } from './functions/auth';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        currentUser(idToken.token)
          .then((res) =>
            dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idToken.token,
                role: res.data.role,
                picture: res.data.picture,
                _id: res.data._id,
              },
            })
          )
          .catch((err) => console.log(err));
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Home>
        <ToastContainer />

        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={AboutMe} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/adminlogin' component={Login} />
          <Route exact path='/forgot/password' component={ForgotPassword} />
          <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
        </Switch>
      </Home>
    </>
  );
}

export default App;
