import { React, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Esse from './Esse';
import Video from './Video';
import Colleagues from './Colleagues';
import AboutMe from './AboutMe';
import Students from './Students';
import Parents from './Parents';
import Photo from './Photo';
import Contacts from './Contacts';
import News from './News';
import Popup from './Popup';

function App() {

  const [popup, setPopup] = useState(false);
  const [item, setItem] = useState({});

  // закрытие попапа
  const closePopup = () => {
    setPopup(false);
  }
  // закрываем попап по esc
  useEffect(() => {
    if (popup) {
      const closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
          document.removeEventListener('keydown', closePopupEsc);
          closePopup();
        }
      }
      document.addEventListener('keydown', closePopupEsc);
    }
  }, [popup])

  return (
    <div className='app'>
      <div className='page'>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route exact path='/main'>
            <Main item={setItem} isOpen={setPopup} />
          </Route>
          <Route path='/esse'>
            <Esse />
          </Route>
          <Route path='/colleagues'>
            <Colleagues />
          </Route>
          <Route path='/aboutme'>
            <AboutMe item={setItem} isOpen={setPopup} />
          </Route>
          <Route path='/students'>
            <Students />
          </Route>
          <Route path='/video'>
            <Video />
          </Route>
          <Route path='/parents'>
            <Parents />
          </Route>
          <Route path='/photo'>
            <Photo item={setItem} isOpen={setPopup} />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/news'>
            <News item={setItem} isOpen={setPopup} />
          </Route>
        </Switch>
        <Footer />
      </div>
      <Popup isOpen={popup} onClose={closePopup} name={item.name} link={item.link} />
    </div>
  );
}

export default App;
