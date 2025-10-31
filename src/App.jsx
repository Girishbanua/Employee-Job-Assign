import { useCallback, useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);  
  const authData = useContext(AuthContext);
  console.log(authData);
  console.log(loggedInUserData);

  const handleUser = (usr) => {
    setUser(usr)
  }

  const handleLogin = useCallback(
    (email, pass) => {
      if (email === "admin@example.com" && pass === "123") {
        const admin = authData?.admin?.find(
          (e) => e.email === email && e.password === pass
        );
        if (admin) {
          setUser("admin");
          setLoggedInUserData(admin);
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ role: "admin", data: admin })
          );
        } else {
          alert("Invalid credentials");
        }
      } else if (authData) {
        const employee = authData.employees.find(
          (e) => e.email === email && e.password === pass
        );
        if (employee) {
          setUser("employee");
          setLoggedInUserData(employee);
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ role: "employee", data: employee })
          );
        } else {
          console.log("Invalid credentials");
        }
      }
    },
    [authData]
  );

  useEffect(() => {
    if (authData) {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.role);
        setLoggedInUserData(parsedUser.data);
        handleLogin(parsedUser.data.email, parsedUser.data.password);
      }      
    }
  }, [authData, handleLogin]);

  return (
    <div className="app">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard handleUser={handleUser} data={loggedInUserData} /> : ""}
      {user == "employee" ? <EmployeeDashboard handleUser={handleUser} data={loggedInUserData} /> : ""}
    </div>
  );
};
export default App;
