import { Navbar, PageStart, ArticleOne, ArticleTwo, Quote, Socials, Powered } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__page">
        <PageStart />
        <div className="App__main-body">
          <ArticleOne />
          <ArticleTwo />
        </div>
        <Quote />
        <Socials />
        <Powered />
      </div>
    </div>
  );
}

export default App;