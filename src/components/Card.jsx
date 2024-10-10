import './Card.css';
export default function Card(props) {
  const { id, title, description, price, changeTitle } = props; // destruct

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{price}</span>
      <button onClick={(e) => changeTitle(id)}>ChangeTitle</button>
    </div>
  );
}
