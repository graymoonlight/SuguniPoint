import React from 'react';

function Footer() {
  return (
    <footer className='home-foot'>
        <p>&copy; 2023 SuguniPoint. All rights reserved.</p>
        <div className="footer-section">
            <a href="#" className="footer-link"><h2>About</h2></a>
            <p>Discover the best Asian products at SuguniPoint. We strive to bring you a curated selection of quality items from Asia.</p>
        </div>
        <div className="footer-section">
            <a href="#" className="footer-link"><h2>Support</h2></a>
            <p>Have questions or need assistance? Contact our support team at support@sugunipoint.com or call us at null number.</p>
        </div>
        <div className="footer-section">
            <a href="#" className="footer-link"><h2>Contact</h2></a>
            <p>Email: novikov1108@gmail.com <br/>Adress: Vladivostok, Russia <br/>Site Project</p>
        </div>
    </footer>
  );
}

export default Footer;