import PropTypes from "prop-types";

const Footer = ({ data }) => {
  const { ImgLink, name } = data;
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-avatar">
            <img src={ImgLink} title="" alt="" />
          </div>
          <h6>{name}</h6>
        </div>
        <p className="copyright">© {currentYear} copyright all right reserved</p>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  data: PropTypes.object,
};

// Array satu dimensi
const satuDimensi = [1, 2, 3];

// Array dua dimensi
const duaDimensi = [
  [1, 2, 3],
  [4, 5, 6],
];

const campuran = [1, "dua", true, { name: "Ali" }];

const arr = [1, 2, 3];
console.log(arr.length); // Output: 3
import React, { useState } from "react";

function ContohArray() {
  const [angka, setAngka] = useState([3, 1, 4, 1, 5, 9]);

  const urutkanAngka = () => {
    setAngka([...angka].sort((a, b) => a - b));
  };

  return (
    <div>
      {angka.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={urutkanAngka}>Urutkan</button>
    </div>
  );
}

export default Footer;
