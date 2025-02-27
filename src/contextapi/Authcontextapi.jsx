import { createContext,useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


 export const Usercontext=createContext()

const Authcontextapi = ({children}) => {
    const navigate = useNavigate();
    // login
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      // signup
      const [newformData, setnewFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    const[auth,setauth]=useState(false)
    const [cart, setCart] = useState([]);

    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get("http://localhost:3000/users");
          const users = response.data;
          
          const user = users.find(
            (user) => user.email === formData.email && user.password === formData.password
          );
          
          if (user) {
            console.log("Login successful", user);
            sessionStorage.setItem("userId", user.id); // Store user ID
            setauth(true);
            setFormData({
              email: "",
              password: "",
            })
            navigate("/")
          } else {
            console.error("Invalid credentials");
            alert("inavlid credentials try again")
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };



    //   signup
    
      const newhandleChange = (e) => {
        setnewFormData({ ...newformData, [e.target.name]: e.target.value });
      };
    
      const newhandleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { ...newformData, cart: [], previousOrders: [] };
        setnewFormData({
          name: "",
          email: "",
          password: "",
        })
        
        try {
          await axios.post("http://localhost:3000/users", newUser);
          console.log("login sucessfully")
          navigate("/login")
        } catch (error) {
          console.error("Error:", error);
        }
      };


      const handleLogout = () => {
        console.log("removed")
        sessionStorage.removeItem("userId");
        setauth(false);
        setCart([]);
        navigate("/")
      };
    
    // cart functionality
    useEffect(() => {
      const userId = sessionStorage.getItem("userId");
      if (userId) {
          setauth(true);
          getCartItems(userId);
      } else {
          setCart([]); // ✅ Ensure cart is cleared when user logs out
      }
  }, [auth]);
  
      // Function to fetch cart items for the logged-in user
    const getCartItems = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    // Function to add items to the cart
    const addToCart = async (product) => {
      const userId = sessionStorage.getItem("userId");
      if (!userId) return alert("Please login to add items to the cart.");
  
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const user = response.data;
  
        const updatedCart = [...user.cart, product];
  
        await axios.patch(`http://localhost:3000/users/${userId}`, { cart: updatedCart });
  
        setCart(updatedCart);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    };
  
    const removeFromCart = async (productId) => {
      const userId = sessionStorage.getItem("userId");
      if (!userId) return;
  
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const user = response.data;
  
        const updatedCart = user.cart.filter((item) => item.id !== productId);
  
        await axios.patch(`http://localhost:3000/users/${userId}`, { cart: updatedCart });
  
        setCart(updatedCart);
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    };
  


  return (
    <Usercontext.Provider value={{name:"akash",formData,handleChange,handleSubmit,newformData,newhandleChange,newhandleSubmit,auth,handleLogout, cart, addToCart, removeFromCart }}>
        {children}
    </Usercontext.Provider>
  )
}

export default Authcontextapi