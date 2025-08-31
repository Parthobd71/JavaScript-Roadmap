// =====================================
// 04 - ROUTING WITH REACT-ROUTER
// =====================================
// NOTES:
// Use react-router-dom for navigation
// BrowserRouter, Routes, Route, Link components

// Example 1: Basic BrowserRouter
// <BrowserRouter>
//   <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/about" element={<About />} />
//   </Routes>
// </BrowserRouter>

// Example 2: Home component
function Home(){ return <h1>Home Page</h1>; }

// Example 3: About component
function About(){ return <h1>About Page</h1>; }

// Example 4: Link navigation
// <Link to="/">Home</Link> <Link to="/about">About</Link>

// Example 5: Nested routes
// <Route path="/dashboard/*" element={<Dashboard />}>
//   <Route path="stats" element={<Stats />} />
// </Route>

// Example 6: useNavigate hook
// const navigate = useNavigate(); navigate("/about");

// Example 7: useParams hook
// function Product(){ const {id} = useParams(); return <p>Product {id}</p>; }

// Example 8: Redirect
// <Route path="*" element={<Navigate to="/" />} />

// Example 9: Route protection
// <Route path="/profile" element={isLoggedIn?<Profile />:<Navigate to="/login" />} />

// Example 10: Programmatic routing
// function goHome(){ const navigate=useNavigate(); navigate("/"); }
