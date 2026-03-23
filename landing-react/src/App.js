import React from "react";

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">Sorriso Saudável</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuNavbar">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item"><a className="nav-link" href="#inicio">Início</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicos">Serviços</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
              <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
            </ul>
            <a className="btn btn-primary" href="#preatendimento">Agendar consulta</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">Cuide do seu sorriso com profissionais especializados</h1>
              <p className="mt-3">
                Atendimento humanizado, tecnologia moderna e foco no bem-estar.
              </p>
              <a href="#preatendimento" className="btn btn-primary mt-3">Solicitar atendimento</a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                className="img-fluid rounded"
                alt="Atendimento"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-5 bg-light">
        <div className="container text-center">
          <h2>Nossos Serviços</h2>
          <div className="row mt-4">
            {[
              "Limpeza Dental",
              "Restauração",
              "Ortodontia",
              "Clareamento"
            ].map((servico, index) => (
              <div className="col-md-3" key={index}>
                <div className="card p-3 shadow-sm h-100">
                  <h5>{servico}</h5>
                  <p>Descrição simples do serviço odontológico.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                className="img-fluid rounded"
                alt="Clínica"
              />
            </div>
            <div className="col-md-6">
              <h2>Sobre a Clínica</h2>
              <p>Atendimento de qualidade com foco na saúde bucal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-5 bg-light text-center">
        <div className="container">
          <h2>Contato</h2>
          <p>(62) 99999-9999</p>
          <p>Av. Exemplo, 123</p>
          <p>Seg - Sex 08h às 18h</p>
        </div>
      </section>

      {/* FORM */}
      <section id="preatendimento" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="text-center">Pré-Atendimento</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Dados enviados!");
              }}>
                <input className="form-control mb-2" placeholder="Nome" />
                <input className="form-control mb-2" placeholder="Contato" required />
                <textarea className="form-control mb-2" placeholder="Descreva" required />
                <button className="btn btn-primary w-100">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        © 2026 Clínica Sorriso Saudável
      </footer>
    </div>
  );
}
