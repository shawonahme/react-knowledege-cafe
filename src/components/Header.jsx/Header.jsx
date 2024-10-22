import profile from '../../assets/profile.png'

const Header = () => {
    return (
        
      <div className='flex justify-between py-4 items-center border-b-2'>
        <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
        <div><img src={profile} alt="" /></div>
      </div>
      
    
    );
};

export default Header;