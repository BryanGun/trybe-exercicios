function handleClick(messageText: string) {
  alert(messageText);
}

type buttonProp = {
  children: string;
}

function Button({ children }: buttonProp) {
  return (
    <button onClick={() => handleClick(`Clique do ${children}`)}>
      {children}
    </button>
  )
}

export default Button;
