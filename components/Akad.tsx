import { FiMapPin } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Akad = () => {
  return (
    <div className="akad-container" id="add-wed">
      <div className="pembuka" data-aos="fade-up">
        <p>﷽</p>
      </div>
      <div className="judul" data-aos="fade-up">
        <p>Akad Nikah dan Walimatul &#39;Ursy</p>
      </div>
      <div className="text" data-aos="fade-up">
        <p>Akad Nikah</p>
      </div>
      <div className="info" data-aos="fade-up">
        <div className="info-judul">
          <h2>Waktu dan Tempat</h2>
          <div></div>
        </div>
        <div className="detail">
          <div className="detail-wl">
            <BiTimeFive size="3vmax" color="white" />
            <p>08.00 WIB</p>
          </div>
          <div className="detail-wl">
            <FaCalendarAlt size="3vmax" color="white" />
            <p>Jum&#39;at, 10 September 2021</p>
          </div>
          <div className="detail-wl">
            <FiMapPin size="3vmax" color="white" />
            <p>
              Jl. Maid Badir RT 10 <br />
              Kel. Madurejo
            </p>
          </div>
        </div>
      </div>
      <div className="text" data-aos="fade-up">
        <p>Walimatul ‘Ursy</p>
      </div>
      <div className="info" data-aos="fade-up">
        <div className="info-judul">
          <h2>Waktu dan Tempat</h2>
          <div></div>
        </div>
        <div className="detail">
          <div className="detail-wl">
            <BiTimeFive size="3vmax" color="white" />
            <p>08.00 WIB - Selesai</p>
          </div>
          <div className="detail-wl">
            <FaCalendarAlt size="3vmax" color="white" />
            <p>Minggu, 12 September 2021</p>
          </div>
          <div className="detail-wl">
            <FiMapPin size="3vmax" color="white" />
            <p>
              Jl. Belimbing RT 8/02 <br />
              Kel. Candi
            </p>
          </div>
        </div>
      </div>
      <div className="btn" data-aos="fade-up">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/apzdV5RdktusTnkk9"
          className="btn-link"
        >
          <ImLocation size="3vmax" color="#9CB8C4" />
          <p>Akad</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/q37eDzvXDcHthRJJ6"
          className="btn-link"
        >
          <ImLocation size="3vmax" color="#9CB8C4" />
          <p>Walimatul ‘Ursy</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kang_fen017/"
          className="btn-link"
        >
          <FaInstagram size="3vmax" color="#9CB8C4" />
          <p>Live Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default Akad;
