import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Header from "./Header/Header";
import '../../mstyle.scss';
import './Footer/footer.scss';
import './Main/main.scss';
import './Header/header.scss';

function Register() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
export default Register;