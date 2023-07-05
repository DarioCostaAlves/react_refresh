export default function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Sou um botão. Já me clicaste {count} vezes
    </button>
  );
}
