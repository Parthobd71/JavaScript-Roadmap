// =====================================
// 03 - PROPS & CUSTOM HOOKS
// =====================================
// NOTES:
// Props = pass data to components
// Custom hooks = reusable logic

// Example 1: Simple props
function Display({msg}){ return <p>{msg}</p>; }
ReactDOM.render(<Display msg="Hello!" />, document.getElementById("root"));

// Example 2: Props with default
function Show({text="Default Text"}){ return <p>{text}</p>; }

// Example 3: Props object
function Info(props){ return <p>{props.name} is {props.age}</p>; }
ReactDOM.render(<Info name="Partho" age={25} />, document.getElementById("root"));

// Example 4: Passing function as prop
function Button({onClick}){ return <button onClick={onClick}>Click Me</button>; }
function App(){ return <Button onClick={()=>alert("Clicked")} />; }

// Example 5: Nested props
function Child({msg}){ return <p>{msg}</p>; }
function Parent(){ return <Child msg="Hello from parent" />; }

// Example 6: Destructuring props
function User({name,age}){ return <p>{name}-{age}</p>; }

// Example 7: Conditional prop rendering
function Status({isOnline}){ return <p>{isOnline ? "Online":"Offline"}</p>; }

// Example 8: Custom hook - useWindowWidth
function useWindowWidth(){
    const [width,setWidth] = React.useState(window.innerWidth);
    React.useEffect(()=>{
        const resizeHandler = ()=>setWidth(window.innerWidth);
        window.addEventListener("resize", resizeHandler);
        return ()=>window.removeEventListener("resize", resizeHandler);
    },[]);
    return width;
}
function WidthDisplay(){ const width = useWindowWidth(); return <p>Width: {width}</p>; }

// Example 9: Pass array as prop
function List({items}){ return <ul>{items.map((i,index)=><li key={index}>{i}</li>)}</ul>; }

// Example 10: Pass object as prop
function Card({user}){ return <p>{user.name}-{user.age}</p>; }
