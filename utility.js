import { useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useOutletContext, Outlet ,useParams} from "react-router-dom";


//Link

<Link to="/Movies">Movies</Link> {"  "}

//useEffect

useEffect(() => {
}, []);

//Button on click


<button onClick={logOut}>log out</button><br />


//Navigate

navigate('/EditMovie/'+props.data._id

//Date Without Time

const date = props.data.premiered;
const [withoutTime] = date.split("T");


//Routes

<Routes>
<Route path="/Movies" element={<Movies />}>
  <Route path="AddMovie" element={<AddMovie />} />
  <Route path='EditMovie/:id' element={<EditMovie />} />
</Route>
</Routes>


//FORM
 
 <form onSubmit={handleSubmit}>
        Username:{" "}
        <input type="text" onInput={(e) => setUsername(e.target.value)} />{" "}
        <br />
        Password:{" "}
        <input type="text" onInput={(e) => setPassword(e.target.value)} />{" "}
        <br />
        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      </form>

      //Select And filter and Map And isVisible


      {
        props.isVisible &&
          
       <div>
      Select Product <br />
      <select
                name="product"
                onChange={(x) => setProduct(x.target.value)}
              >
                <option value="" defaultValue>
                  Select Product
                </option>
                {storeData.products
                  .filter((x) => x.quantity > 0)
                  .map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>{" "} 
              </div>

        }

        // axios post 

        const handleSubmit = async (e) => {
          e.preventDefault();
            const obj = { username: username, password: password };
            const resp = await axios.post(usersUrl, obj);
        }


      // edit item 

      const [customer, setCustomer] = useState({
        id: "",
        firstname: "",
        lastname: "",
        city: "",
      });

      <form onSubmit={(e) => updateCustomer(e)}>
        First Name:{" "}
        <input
          type="text"
          name="firstname"
          value={customer.firstName}
          onChange={(firstname) =>
            setCustomer({ ...customer, firstName: firstname.target.value })
          }
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastname"
          value={customer.lastName}
          onChange={(lastname) =>
            setCustomer({ ...customer, lastName: lastname.target.value })
          }
        />
        <br />
        City:{" "}
        <input
          type="text"
          name="city"
          value={customer.city}
          onChange={(city) =>
            setCustomer({ ...customer, city: city.target.value })
          }
        />
        <br />
        <input type="submit" value="Update" />{" "}
        <input
          type="button"
          value="Delete"
          onClick={(e) => deleteCustomer(e)}
        />{" "}
      </form>

      // use params
      const params = useParams();
