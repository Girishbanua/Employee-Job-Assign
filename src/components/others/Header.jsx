const Header = ({ data }) => {  
  let empName = data.name.split(' ')[0]  
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }
  return (
    <div className="text-2xl flex items-center justify-between mb-6 ">
      <h1 className="font-bold">
        Hello <br />
        <span className="text-4xl">{empName} 😍</span>
      </h1>
      <button className="bg-red-500" onClick={logOutUser}>Log out</button>
    </div>
  );
};

export default Header;
