export default function Portfolio() {
  const projects = [
    {
      title: "Gait-Based Biometric Authentication System",
      desc: "Developed a biometric authentication system using human gait patterns and pose estimation for non-intrusive user authentication.",
      tech: ["Python", "Deep Learning", "MediaPipe", "Computer Vision"],
    },
    {
      title: "Deepfake Detection System",
      desc: "Built a real-time deepfake detection web application using EfficientNetB4, OpenCV, and Flask for image and video analysis.",
      tech: ["EfficientNetB4", "OpenCV", "Flask", "TensorFlow"],
    },
  ];

  const skills = [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "MediaPipe",
    "Flask",
    "Machine Learning",
    "Deep Learning",
    "Git",
    "HTML/CSS",
    "JavaScript",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm tracking-widest mb-3">
              Abinsha.dev
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-cyan-400">Abinsha</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning. 
              Passionate about Deep Learning, Computer Vision, and AI-driven solutions, 
              with hands-on experience developing AI applications using Python, TensorFlow, OpenCV, and Flask.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:abinsha1221@gmail.com"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold text-black"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/Abinsha1221"
                target="_blank"
                className="border border-slate-700 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">
              Quick Overview
            </h2>

            <div className="space-y-5 text-slate-300">
              <div>
                <p className="font-semibold text-white">Education</p>
                <p>B.Tech CSE (AI & ML)</p>
                <p>College of Engineering Attingal</p>
                <p>Graduated 2026</p>
              </div>

              <div>
                <p className="font-semibold text-white">Interests</p>
                <p>Deep Learning, Computer Vision, AI Systems</p>
              </div>

              <div>
                <p className="font-semibold text-white">Technologies</p>
                <p>Python, TensorFlow, OpenCV, Flask, MediaPipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-200 hover:border-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-20 py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-slate-800 px-3 py-2 rounded-xl text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-20 py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Internships</h2>

          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                AI Intern — Teachnook
              </h3>
              <p className="text-slate-400 mb-4">Mar 2023 – Apr 2023</p>
              <p className="text-slate-300">
                Participated in AI and machine learning training focused on problem-solving, data analysis, and model development. 
                Gained practical exposure to machine learning workflows, Python-based implementation, and AI-driven solutions through guided projects and assignments.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                Robotics with AI Intern — Genzee Technologies LLP
              </h3>
              <p className="text-slate-400 mb-4">Jun 2024 – Jul 2024</p>
              <p className="text-slate-300">
                Undertook hands-on training in robotics and artificial intelligence, exploring automation, intelligent systems, and practical AI applications. 
                Acquired foundational knowledge of integrating AI concepts into robotic and real-world automation scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            I’m actively looking for opportunities in AI/ML, Deep Learning,
            and Software Development where I can contribute, learn, and grow.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <a
              href="mailto:abinsha1221@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-4 rounded-2xl font-semibold text-black"
            >
              abinsha1221@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/abinsha-n-0840a9255"
              target="_blank"
              className="border border-slate-700 hover:border-cyan-400 transition px-6 py-4 rounded-2xl font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
