// =====================================
// 01 - REACT COMPONENTS
// =====================================
// NOTES:
// Components = reusable UI blocks
// Two types: Functional and Class (Functional preferred)

// Example 1: Functional component
function Greeting(){
    return <h1>Hello, React!</h1>;
}

// Example 2: Rendering component
ReactDOM.render(<Greeting />, document.getElementById("root"));

// Example 3: Component with props
function User({name, age}){
    return <p>{name} is {age} years old.</p>;
}
ReactDOM.render(<User name="Partho" age={25} />, document.getElementById("root"));

// Example 4: Component inside another
function App(){
    return (
        <div>
            <Greeting />
            <User name="Kumar" age={30} />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));

// Example 5: Default props
function Product({name="Product", price=0}){
    return <p>{name} costs ${price}</p>;
}
ReactDOM.render(<Product />, document.getElementById("root"));

// Example 6: Nested components
function ListItem({text}){ return <li>{text}</li>; }
function List(){ 
    const items=["Item1","Item2"];
    return <ul>{items.map((i,index)=><ListItem key={index} text={i} />)}</ul>;
}

// Example 7: Using children prop
function Container({children}){ return <div className="container">{children}</div>; }
ReactDOM.render(<Container><p>Inside container</p></Container>, document.getElementById("root"));

// Example 8: Conditional rendering
function Status({isOnline}){
    return <p>{isOnline ? "Online" : "Offline"}</p>;
}

// Example 9: List with keys
const users = ["Partho","Kumar"];
function UserList(){ return <ul>{users.map((u,i)=><li key={i}>{u}</li>)}</ul>; }

// Example 10: Fragment usage
function Multiple(){ 
    return <>
        <p>First</p>
        <p>Second</p>
    </>;
}