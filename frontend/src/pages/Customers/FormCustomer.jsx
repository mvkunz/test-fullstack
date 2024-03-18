import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BaseTitle from "../../components/BaseTitle";
import Button from "../../components/Button";
import BaseInput from "../../components/BaseInput";
import DropdownStatus from "../../components/DropdownStatus";
import OrangeButton from "../../components/OrangeButton";

function FormCustomer() {
  const navigate = useNavigate();

  const [formCompleted, setFormCompleted] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: '',
  });

  const handleChangeInput = (event) => {
    console.log(event.target.name);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/v1/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar. Tente novamente.')
      }
      // if (response.ok) {
      //   setFormData({
      //     name: formData.name,
      //     email: formData.email,
      //     cpf: formData.cpf,
      //     phone: formData.phone,
      //     status: formData.status,
      //   });
    // }
      setFormCompleted([...formCompleted, formData])
      setFormData({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        status: '',
      })
      alert('Cliente registrado com sucesso!')
      navigate('/customers');
    } catch (error) {
      console.error('Erro ao registrar: ', error)
    }
  }

  const setStatus = (status) => {
    setFormData({
      ...formData,
      status,
    });
  }

  return (
    <div className="ml-40" style={{ marginTop: "40px" }}>
      <BaseTitle />
      <h4 className="mb-2 font-bold text-gray-dark">Novo usuário</h4>
      <p className="mb-10 text-gray-text">Informe os campos a seguir para criar novo usuário:</p>
      <form onSubmit={handleSubmit}>
        <BaseInput 
          type="text"
          id="name"
          placeholder="Nome"
          value={formData.name}
          name="name"
          onChange={handleChangeInput}
        />
        <BaseInput
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChangeInput}
        />
        <BaseInput
          type="number"
          id="cpf"
          placeholder="CPF"
          value={formData.cpf}
          name="cpf"
          onChange={handleChangeInput}
        />
        <BaseInput
          type="number"
          id="phone"
          placeholder="Telefone"
          value={formData.phone}
          name="phone"
          onChange={handleChangeInput}
        />
        <div className="mb-3 relative">
          <DropdownStatus status={formData.status} setStatus={setStatus} />
        </div>
      <div className="mb-6" style={{ display: "flex", gap: "5px" }}>
        <OrangeButton width={"120px"} click={handleSubmit} text='Criar' />
        <Button width={"120px"} to='/customers' text='Voltar' />
      </div>
      </form>
    </div>
  )
}

export default FormCustomer;
