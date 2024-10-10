import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/product-add">Ürün Ekle</Link>
          </li>
        </ul>
      </nav>{' '}
    </div>
  );
}
