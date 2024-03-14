import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import user from '../../assets/user.png';

function FormCustomer() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('www.google.com', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar. Tente novamente.')
      }
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
      });
      alert('Cliente registrado com sucesso!')
      navigate('/clients');
    } catch (error) {
      console.error('Erro ao registrar: ', error)
    }
  }

  return (
    <div className="ml-40" style={{ marginTop: "40px" }}>
      <div className="flex items-center mb-10">
        <img src={ user } alt="imagem do cliente" className="w-10 h-10 mr-4" />
        <h1 className="text-2xl font-light text-gray-dark">Painel de Clientes</h1>
      </div>
      <h4 className="mb-2 font-bold text-gray-dark">Novo usuário</h4>
      <p className="mb-10 text-gray-text">Informe os campos a seguir para criar novo usuário:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900"></label>
          <input
            type="text"
            id="first_name"
            value={formData.nome}
            onChange={handleChange}
            className="bg-white border border-custom-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-15 p-2.5"
            placeholder="Nome"
            required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border border-custom-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-15 p-2.5"
            placeholder="E-mail"
            required />
        </div>
        <div className="mb-6">
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="text"
            id="company"
            value={formData.cpf}
            onChange={handleChange}
            className="bg-white border border-custom-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-15 p-2.5"
            placeholder="CPF"
            required />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="tel"
            id="phone"
            value={formData.telefone}
            onChange={handleChange}
            className="bg-white border border-custom-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-15 p-2.5"
            placeholder="Telefone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required />
        </div>
        <div className="mb-3 relative">
          <button
            id="dropdown-button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-text bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 w-60 h-15 p-2.5 ${isOpen ? 'bg-blue-500' : ''}`}
            type="button">
            Status
            <svg className="w-2.5 h-2.5 ms-2.5" style={{ marginLeft: "150px" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          {isOpen && (
            <div id="dropdown" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 999 }} className="z-10 w-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 h-15 p-2.5">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ativo</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Inativo</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Aguardando ativação</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Desativado</a>
                </li>
              </ul>
            </div>
          )}
          </button>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="focus:outline-none text-white bg-custom-orange hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-20 mr-5" style={{ width: "115px", height: "40px"  }}
          >
            Criar
          </button>
          <button
            type="button"
            className="text-custom-orange bg-white border border-custom-orange focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-15 w-75" style={{ width: "115px", height: "40px" }}
          >
            <NavLink to='/clients'>
              Voltar
            </NavLink>
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormCustomer;
