import "./Backdrop.css";

export default function BackDrop({ show, click }) {
  return show && <div className="backdrop" onClick={click}></div>;
}
