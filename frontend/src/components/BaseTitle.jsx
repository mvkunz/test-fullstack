import user from '../assets/user.png';

function BaseTitle() {
  return(
    <div style={{ marginTop: "40px" }}>
      <div className="flex items-center mb-10">
        <img src={ user } alt="imagem do cliente" className="w-10 h-10 mr-4" />
        <h1 className="text-2xl font-light text-gray-dark">Painel de Clientes</h1>
      </div>
    </div>
  )
}

export default BaseTitle;
