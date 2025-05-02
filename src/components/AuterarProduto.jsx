import React, { useState, useEffect } from 'react';

function AuterarProduto() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [estoque, setEstoque] = useState('');
  const [preco, setPreco] = useState('');
  const [loading, setLoading] = useState(true);
  const [sku, setSku] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');


  useEffect(() => {
    //receber o produto pelo id
    fetch('http://host.docker.internal:3000/produtos/1')
      .then(response => response.json())
      .then(data => {
        setNomeProduto(data.nome || '');
        setSku(data.id || '');
        setEstoque(data.estoque || '');
        setPreco(data.preco || '');
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
        setLoading(false);
      });
  }, []);
 

// Atualizar produto
// Enviar os dados atualizados para o servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const dadosParaEnviar = {
      nome: nomeProduto,
      id: sku,
      estoque: estoque,
      preco: preco
    };
  
    try {
      const response = await fetch('http://host.docker.internal:3000/produtos/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosParaEnviar)
      });
  
      if (!response.ok) throw new Error('Erro ao atualizar');
  
      const resultado = await response.json();
      setMensagem('Produto atualizado com sucesso!');
      setTipoMensagem('sucesso');
    } catch (error) {
      setMensagem('Erro ao atualizar produto.');
      setTipoMensagem('erro');
    }
  };
 




  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center font-sans">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">

{/* mensagem da confirmação de sucesso ou erro da requisição */}
{mensagem && (
  <div
    className={`mb-4 px-4 py-2 rounded-md text-sm font-medium ${
      tipoMensagem === 'sucesso'
        ? 'bg-green-100 text-green-800 border border-green-300'
        : 'bg-red-100 text-red-800 border border-red-300'
    }`}
  >
    {mensagem}
  </div>
)}


  <h2 className="text-xl font-semibold text-gray-900 mb-6">Atualizar produto</h2>

     <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                value={nomeProduto}
                onChange={e => setNomeProduto(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
              <input
                type="text"
                id="sku"
                readOnly
                value={sku}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Estoque</label>
                <input
                  type="number"
                  id="quantity"
                  value={estoque}
                  onChange={e => setEstoque(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Preço</label>
                <input
                  type="text"
                  id="price"
                  value={preco}
                  onChange={e => setPreco(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
            >
              Atualizar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuterarProduto;
