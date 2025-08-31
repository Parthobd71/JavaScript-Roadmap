// =====================================
// 02 - STATE & HOOKS
// =====================================
// NOTES:
// useState = store component state
// useEffect = side effects (API calls, timers)

// Example 1: Basic useState
function Counter(){
    const [count,setCount] = React.useState(0);
    return <button onClick={()=>setCount(count+1)}>Count: {count}</button>;
}

// Example 2: Multiple states
function MultiState(){
    const [name,setName] = React.useState("Partho");
    const [age,setAge] = React.useState(25);
    return <p>{name} is {age} years old.</p>;
}

// Example 3: Updating object state
function Person(){
    const [person,setPerson] = React.useState({name:"Partho", age:25});
    return <button onClick={()=>setPerson({...person, age:26})}>{person.name} Age: {person.age}</button>;
}

// Example 4: useEffect example
function Timer(){
    const [time,setTime] = React.useState(0);
    React.useEffect(()=>{
        const id = setInterval(()=>setTime(t=>t+1),1000);
        return ()=>clearInterval(id); // cleanup
    },[]);
    return <p>Timer: {time}</p>;
}

// Example 5: Fetch API with useEffect
function Users(){
    const [users,setUsers] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);
    return <ul>{users.map(u=><li key={u.id}>{u.name}</li>)}</ul>;
}

// Example 6: Conditional state rendering
function Toggle(){
    const [show,setShow] = React.useState(true);
    return <>
        <button onClick={()=>setShow(!show)}>Toggle</button>
        {show && <p>Visible</p>}
    </>;
}

// Example 7: Form input with state
function InputForm(){
    const [value,setValue] = React.useState("");
    return <input value={value} onChange={e=>setValue(e.target.value)} />;
}

// Example 8: Derived state
function Derived(){
    const [count,setCount] = React.useState(0);
    return <p>{count} squared = {count*count} <button onClick={()=>setCount(c=>c+1)}>+</button></p>;
}

// Example 9: State with array
function ArrayState(){
    const [items,setItems] = React.useState([]);
    return <button onClick={()=>setItems([...items, items.length+1])}>{items.join(",")}</button>;
}

// Example 10: useEffect with dependencies
function WatchName({name}){
    React.useEffect(()=>console.log("Name changed:",name), [name]);
    return <p>{name}</p>;
}
