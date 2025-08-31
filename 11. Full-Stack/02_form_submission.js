// =====================================
// 02 - FORM SUBMISSION HANDLING
// =====================================
// NOTES:
// React form -> send data to backend API

function UserForm(){
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({name,email})
        });
        const data = await res.json();
        console.log(data);
        setName(""); setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" required/>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required/>
            <button type="submit">Submit</button>
        </form>
    );
}
