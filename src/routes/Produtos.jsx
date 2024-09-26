// Produtos.jsx
import { useEffect, useState } from 'react';
import '../style/global.css';
import '../style/produtos.css';

// Importando imgs
import imgbike1 from '../assets/image/bike1.png';
import imgbike2 from '../assets/image/bike2.png';
import imgbike3 from '../assets/image/bike3.png';
import imgSport from '../assets/image/bike-sport.png';
import imgMont from '../assets/image/bike-montain.png';
import imgUrban from '../assets/image/bike-urban1.png';

// Produtos fixos
const initialProductsData = [
    {
        id: 1,
        name: 'Bicicleta Elétrica X1',
        description: 'A bicicleta elétrica perfeita para a cidade.',
        price: 'R$ 3.500',
        imageUrl: imgbike1,
    },
    {
        id: 2,
        name: 'Bicicleta Elétrica Y2',
        description: 'Ideal para passeios longos e aventuras.',
        price: 'R$ 4.200',
        imageUrl: imgbike2,
    },
    {
        id: 3,
        name: 'Bicicleta Elétrica Z3',
        description: 'Compacta e fácil de armazenar.',
        price: 'R$ 2.800',
        imageUrl: imgbike3,
    },
    {
        id: 4,
        name: 'Bicicleta Elétrica Sport',
        description: 'Para quem busca desempenho e estilo.',
        price: 'R$ 5.500',
        imageUrl: imgSport,
    },
    {
        id: 5,
        name: 'Bicicleta Elétrica Mountain',
        description: 'Feita para trilhas e terrenos acidentados.',
        price: 'R$ 4.800',
        imageUrl: imgMont,
    },
    {
        id: 6,
        name: 'Bicicleta Elétrica Urban',
        description: 'Design moderno e funcionalidade.',
        price: 'R$ 3.200',
        imageUrl: imgUrban,
    },
];

const Produtos = () => {
  const [products, setProducts] = useState(initialProductsData);

  useEffect(() => {
    // Recupera os produtos salvos no sessionStorage
    const storedProducts = JSON.parse(sessionStorage.getItem('products')) || [];
    
    // Combina os produtos fixos com os produtos cadastrados pelo usuário
    setProducts([...initialProductsData, ...storedProducts]);
  }, []);

  return (
    <div className="products-container">
      <h1>Nossos Produtos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-button">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
