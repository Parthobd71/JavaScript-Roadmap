// =====================================
// 06 - API INTEGRATION WITH AXIOS
// =====================================
// NOTES:
// Axios = popular HTTP client for React
// Automatically parses JSON, supports interceptors

// Example 1: Basic GET request
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>console.log(res.data))
.catch(err=>console.error(err));

// Example 2: GET in useEffect
function UsersAxios(){
    const [users,setUsers] = React.useState([]);
    React.useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.error(err));
    },[]);
    return <ul>{users.map(u=><li key={u.id}>{u.name}</li>)}</ul>;
}

// Example 3: POST request
axios.post("https://jsonplaceholder.typicode.com/users",{name:"Axios User"})
.then(res=>console.log("Created:",res.data));

// Example 4: PUT request
axios.put("https://jsonplaceholder.typicode.com/users/1",{name:"Updated Axios User"})
.then(res=>console.log("Updated:",res.data));

// Example 5: DELETE request
axios.delete("https://jsonplaceholder.typicode.com/users/1")
.then(()=>console.log("Deleted user 1"));

// Example 6: Async/Await GET
async function getUsersAxios(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(res.data);
    }catch(err){ console.error(err); }
}

// Example 7: Async/Await POST
async function createUserAxios(){
    try{
        const res = await axios.post("https://jsonplaceholder.typicode.com/users",{name:"Async Axios"});
        console.log(res.data);
    }catch(err){ console.error(err); }
}

// Example 8: Axios with params
axios.get("https://jsonplaceholder.typicode.com/users",{params:{username:"Bret"}})
.then(res=>console.log("Query result:",res.data));

// Example 9: Axios with headers
axios.get("https://jsonplaceholder.typicode.com/users",{headers:{"Authorization":"Bearer TOKEN"}})
.then(res=>console.log(res.data));

// Example 10: Handling errors
axios.get("https://jsonplaceholder.typicode.com/invalid-url")
.catch(err=>console.error("Error:",err));
