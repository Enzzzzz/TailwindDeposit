
function Navbar() {
  return (
    <div className="fixed top-0 md:mt-7 w-full z-50 sm:bg-gray-200 md:bg-transparent ">
      <div className="bg-gray-200 md:rounded-full shadow-2xl flex flex-wrap items-center border-b border-primary justify-between md:mx-[10%] p-3">
        <a href="/" className="flex items-center md:space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" alt="logo" className="size-8 md:size-12" />
          <span className="self-center text-sm md:text-2xl text-gradient font-semibold text-sky-800">
            Enzzzzz
          </span>
        </a>

        <div className=" w-[50%] md:w-[30%] cursor-pointer flex flex-how items-center justify-between px-5 bg-white hover:bg-gray-100 duration-300 rounded-lg h-10 neon-blue">
          <h1 className="transform animate-pulse duration-200 text-lg font-bold text-secondary">
            AVISO
          </h1>
          <p className="text-sm font-felix text-secondary">NOVO TEMPLATE DISPONÍVEL</p>

        </div>
        <div className="flex flex-row space-x-10">
          <h1 className="navbutton">
            Contato
          </h1>
          <h1 className="navbutton">
            Templates
          </h1>
          <h1 className="navbutton">
            Projetos
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
