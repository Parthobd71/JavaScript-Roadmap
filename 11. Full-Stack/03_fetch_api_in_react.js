// =====================================
// 03 - FETCH API IN REACT
// =====================================
// NOTES:
// Use useEffect to fetch data from backend API

function UsersList(){
    const [users,setUsers] = React.useState([]);

    React.useEffect(()=>{
        async function getUsers(){
            const res = await fetch("http://localhost:3000/users");
            const data = await res.json();
            setUsers(data);
        }
        getUsers();
    },[]);

    return (
        <ul>
            {users.map(u=><li key={u.id}>{u.name} - {u.email}</li>)}
        </ul>
    );
}
