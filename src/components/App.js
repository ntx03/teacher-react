import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  // открытие попапа
  function handleOpenPopup() {
    debugger;
    setPopup(true);
    const item = {
      name: document.querySelector('.me_image').alt,
      link: document.querySelector('.me_image').src,
    }
  }

  return (
    <div className='app'>
      <div className='page'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/esse'>
            <Esse />
          </Route>
          <Route path='/colleagues'>
            <Colleagues />
          </Route>
          <Route path='/aboutme'>
            <AboutMe handleOpenPopup={handleOpenPopup} />
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
            <Photo />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
        </Switch>
        <Footer />
      </div>
      <Popup isOpen={popup} onClose={closePopup} name={item.name} link={require('../images/aboutMe.jpg')} />
    </div>
  );
}

export default App;
