const Button = ({ text, onClick }) => {
    return (
      <button className="button submit-button"
        onClick={onClick}
        >
        {text}
      </button>
    );
  };

  export default Button;