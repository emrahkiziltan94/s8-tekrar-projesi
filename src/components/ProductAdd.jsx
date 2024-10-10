import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialFormData = {
  id: 0,
  title: '',
  description: '',
  price: 0,
};
const initialErrors = {
  title: '',
  description: '',
  price: '',
};
export default function ProductAdd(props) {
  const { addNewProduct } = props;
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isErrorExist, setIsErrorExist] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addNewProduct(formData);
    history.push('/');
  };
  const validate = (name, value) => {
    const regex = /\d/;
    if (regex.test(value) || value) {
      setErrors({ ...errors, [name]: 'Sayısal değer yada null olamaz' });
      setIsErrorExist(true);
    } else {
      setErrors({ ...errors, [name]: '' });
      setIsErrorExist(false);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title' || name === 'description') {
      validate(name, value);
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>ürün ekleme sayfası</h1>
        <div>
          <label htmlFor="title">Başlık</label>
          <input
            type="text"
            placeholder="başlık ekleyin"
            name="title"
            id="title"
            value={formData.title}
            onChange={onChange}
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>
        <div>
          <label
            htmlFor="description"
            style={{ color: `${errors.description ? 'red' : 'black'}` }}
          >
            Ürün detayı
          </label>
          <input
            type="text"
            placeholder="detay ekleyin"
            name="description"
            id="description"
            value={formData.description}
            onChange={onChange}
          />
          {errors.description && (
            <p style={{ color: 'red' }}>{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="price">Ürün Fiyatı</label>
          <input
            type="number"
            placeholder="fiyat ekleyin"
            name="price"
            id="price"
            value={formData.price}
            onChange={onChange}
          />
        </div>

        <div>
          <button disabled={isErrorExist}>Ürün ekle</button>
        </div>
      </div>
    </form>
  );
}
