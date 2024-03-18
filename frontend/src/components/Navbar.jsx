import uol from "../assets/uol.png";

function Navbar() {
  return (
    <nav className="bg-background-nav border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-center h-20"
    >
      <div className="flex justify-center items-center h-full">
        <img src={uol} alt="imagem do uol" width="90px"/>
      </div>
    </nav>
  );
}

export default Navbar;
