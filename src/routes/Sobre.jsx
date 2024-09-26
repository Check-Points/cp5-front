import '../style/sobre.css'

const Sobre=()=> {
    return (
        <>
        <div className="about-container">
            <h1>Sobre Nós</h1>
            <section className="mission-section">
                <h2>Missão</h2>
                <p>
                    Nossa missão é oferecer bicicletas elétricas de alta qualidade que promovam uma mobilidade sustentável, saudável e acessível para todos.
                </p>
            </section>
            <section className="vision-section">
                <h2>Visão</h2>
                <p>
                    Ser reconhecida como a principal fornecedora de soluções de mobilidade elétrica, contribuindo para um futuro mais verde e conectado.
                </p>
            </section>
            <section className="values-section">
                <h2>Valores</h2>
                <ul>
                    <li>Inovação</li>
                    <li>Sustentabilidade</li>
                    <li>Qualidade</li>
                    <li>Compromisso com o Cliente</li>
                </ul>
            </section>
            <section className="team-section">
                <h2>Nossa Equipe</h2>
                <p>
                    Contamos com uma equipe apaixonada e dedicada, pronta para oferecer o melhor atendimento e suporte para nossos clientes.
                </p>
                <p>Membros: Milena Codinhoto, Evellyn Valencia e Carolina Ferraz</p>
            </section>
        </div>
        </>
    )
}

export default Sobre