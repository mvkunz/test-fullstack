function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333333',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '7px', // mudar para 70 depois
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}
      className="text-center">
      <div>
        <h3 style={{ color: 'white' }}>UOL</h3>
      </div>
    </nav>
  );
}

export default Navbar;
