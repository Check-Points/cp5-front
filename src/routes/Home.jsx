import '../style/home.css';
import '../style/global.css';

const Home = () => {

    return (
        <div className="home-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Bem-vindo ao Futuro das Bicicletas Elétricas</h1>
                    <p>
                        As bicicletas elétricas oferecem uma maneira ecológica, saudável e divertida de se locomover.
                        Perfeitas para a cidade, montanhas ou lazer, com as e-bikes você vai mais longe e com menos esforço.
                    </p>
                    <a href="/produtos" className="cta-button">Explore Nossas Bikes</a>
                </div>
            </header>

            <section className="about-section">
                <h2>Por que Escolher uma Bike Elétrica?</h2>
                <div className="about-cards">
                    <div className="card">
                        <h3>Mobilidade Sustentável</h3>
                        <p>
                            Reduza sua pegada de carbono enquanto aproveita uma viagem tranquila e sem esforço pelas ruas da cidade.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Mais Potência, Menos Esforço</h3>
                        <p>
                            Chegue mais longe sem se cansar. Com o auxílio elétrico, subidas íngremes e longas distâncias não são mais um obstáculo.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Economia</h3>
                        <p>
                            Esqueça os altos custos com combustível ou passagens. As bikes elétricas são uma alternativa econômica para o seu dia a dia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h2>Características das Nossas E-Bikes</h2>
                <ul className="features-list">
                    <li>Motor potente e silencioso para um passeio confortável.</li>
                    <li>Bateria de longa duração com carregamento rápido.</li>
                    <li>Design ergonômico para máximo conforto e estilo.</li>
                    <li>Sistema de freios de alta qualidade para maior segurança.</li>
                </ul>
            </section>
        </div>
    );
}

export default Home;