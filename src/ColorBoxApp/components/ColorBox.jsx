function ColorBox({ text, color, onClick }) {
  return (
    <>
      <div className={`box ${color}`} onClick={onClick}>
        {text}
      </div>
    </>
  );
}

export default ColorBox;
