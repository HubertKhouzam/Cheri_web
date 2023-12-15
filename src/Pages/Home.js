import Navigation from '../Components/Navbar';

function Home() {
  return (
    <div className='tamere'>
      <Navigation color="white"/>
      <img 
        src='/photos_khai/No_back_white_cheri.PNG' 
        alt='logo' 
        style={{ 
          maxWidth: '90%', 
          maxHeight: '80vh',
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
}

export default Home;
