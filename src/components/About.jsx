function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold mb-10 text-cyan-400">
        About Me
      </h2>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
        <p className="text-lg text-gray-300 leading-8">
          I am a B.Tech Electronics & Telecommunication student at PCCOE
          with strong programming fundamentals in Python, Java, C and C++.
          I enjoy building software solutions, exploring AI, and developing
          projects that solve real-world problems.
        </p>
      </div>
    </section>
  );
}

export default About;