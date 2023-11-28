import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import '../../mstyle.scss';
import '../Profile/Header/header.scss';
import '../Profile/Main/main.scss';
import '../Profile/Footer/footer.scss';

function Profile() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Profile;