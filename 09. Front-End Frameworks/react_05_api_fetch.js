// =====================================
// 05 - API INTEGRATION WITH FETCH
// =====================================
// NOTES:
// Fetch = built-in JS function for HTTP requests
// Can use GET, POST, PUT, DELETE

// Example 1: Basic GET request
React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.error(err));
},[]);

// Example 2: Fetch and display in state
function UsersFetch(){
    const [users,setUsers] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);
    return <ul>{users.map(u=><li key={u.id}>{u.name}</li>)}</ul>;
}

// Example 3: POST request
function addUser(){
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name:"New User"})
    }).then(res=>res.json())
    .then(data=>console.log("Created:",data));
}

// Example 4: PUT request (update)
function updateUser(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name:"Updated User"})
    }).then(res=>res.json())
    .then(data=>console.log("Updated:",data));
}

// Example 5: DELETE request
function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"DELETE"
    }).then(()=>console.log("Deleted user",id));
}

// Example 6: Async/Await GET
async function getUsers(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    }catch(err){ console.error(err); }
}

// Example 7: Async/Await POST
async function createUser(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({name:"Async User"})
        });
        const data = await res.json();
        console.log(data);
    }catch(err){ console.error(err); }
}

// Example 8: Error handling
React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(res=>{ if(!res.ok) throw new Error("Network error"); return res.json(); })
    .catch(err=>console.error(err));
},[]);

// Example 9: Fetch with query params
fetch("https://jsonplaceholder.typicode.com/users?username=Bret")
.then(res=>res.json())
.then(data=>console.log("Query result:",data));

// Example 10: Fetch in component with loading state
function UsersWithLoading(){
    const [users,setUsers] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{ setUsers(data); setLoading(false); });
    },[]);
    if(loading) return <p>Loading...</p>;
    return <ul>{users.map(u=><li key={u.id}>{u.name}</li>)}</ul>;
}
