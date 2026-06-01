function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl font-bold text-cyan-400">
          Harshali
        </h1>

        <div className="flex gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;