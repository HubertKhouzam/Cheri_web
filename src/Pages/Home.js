import Navigation from '../Components/Navbar';


function Home() {
  return (
    <div>
      <div className='tamere'>
      <Navigation color ="white"/>
      <img src='https://lh3.googleusercontent.com/pw/ADCreHcJoLaQet9l5YgN6ze-FwYALeIM3PvwpVrJHh0PJBbKHX5KGr9nvmfREEHV31lhTMMLJokE5-3ChjiP1LHV9ZIkR9zIfn6XhCtKd__cdtv9aez_YdD09gEBJyUcp55rv1fm-beAj_XjcThdXlSQNj4Z=w500-h500-s-no?authuser=0' alt='logo' style={{ 
        Width: '300px', 
        height: 'auto', 
        position: 'absolute', top: '37%', left: '50%', transform: 'translate(-50%, -50%)', 
        }}/>
      </div>
    </div>
  );
}

export default Home;
