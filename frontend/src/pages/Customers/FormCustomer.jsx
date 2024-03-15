import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BaseTitle from "../../components/BaseTitle";
import Button from "../../components/Button";
import BaseInput from "../../components/BaseInput";
import DropdownStatus from "../../components/DropdownStatus";

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
      const response = await fetch('http://localhost:5173/customers/create', {
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
      <BaseTitle />
      <h4 className="mb-2 font-bold text-gray-dark">Novo usuário</h4>
      <p className="mb-10 text-gray-text">Informe os campos a seguir para criar novo usuário:</p>
      <form onSubmit={handleSubmit}>
        <BaseInput type="text" id="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        <BaseInput type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <BaseInput type="text" id="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
        <BaseInput type="text" id="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
        <div className="mb-3 relative">
          <DropdownStatus status={formData.status} setStatus={setFormData} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="mb-6">
          <Button to='/customers/list' text='Criar' initialColor="custom-orange"/>
          <Button to='/customers/list' text='Voltar' />
        </div>
      </form>
    </div>
  )
}

export default FormCustomer;
