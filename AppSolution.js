import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactContainer() {
  return (
    <div>
      <h1>Contact</h1>
      <Routes>
          <Route path=":id" element={<ContactDetails />} />
          <Route path="*" element={<ContactDefault />} />
      </Routes>
    </div>
  );
}

function ContactDetails(){
    let params = useParams();
    return <div>Contact Details {params.id}</div>
}

function ContactDefault() {
  return <h1>Contact Default</h1>;
}

export default App;