// CadastrarProduto.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastrarProduto = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    // Cria um novo objeto de produto
    const newProduct = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      name,
      description,
      price,
      imageUrl,
    };

    // Obtém os produtos atuais do sessionStorage (ou inicializa como array vazio se não houver produtos)
    const products = JSON.parse(sessionStorage.getItem('products')) || [];
    
    // Adiciona o novo produto à lista
    products.push(newProduct);

    // Armazena os produtos atualizados no sessionStorage
    sessionStorage.setItem('products', JSON.stringify(products));

    // Redireciona para a página de Produtos
    navigate('/produtos');
  };

  return (
    <div className="cadastrar-produto-container">
      <h1>Cadastrar Novo Produto</h1>
      <form onSubmit={handleCadastro}>
        <div>
          <label>Nome do Produto:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Preço:</label>
          <input 
            type="text" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>URL da Imagem:</label>
          <input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default CadastrarProduto;
