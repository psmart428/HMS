interface Data {
  name: string;
  onClick: () => void;
}
export default function AddNewButton({ name, onClick }: Data) {
  return (
    <button
      onClick={onClick}
    >
      <i className="fas fa-plus mr-2"></i>Add New {name}
    </button>
  );
}
