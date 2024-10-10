import logo from './logo.svg';
import './App.css';
import Soccer from './Mundial_Ronaldinho_Soccer_64.jpg';
import Produkty from "./sklep";
function App() {
  return (
    <div className="App">

        <Produkty  photo1={Soccer} nazwa1="cosik" description1 = "cosik" price1="420,69 zł"  photo2={Soccer} nazwa2="cosik" description2 = "cosik" price2="420,69 zł"  photo3={Soccer} nazwa3="cosik" description3 = "cosik" price3="420,69 zł"  />
        <Produkty  photo1={Soccer} nazwa1="cosik" description1 = "cosik" price1="420,69 zł"  photo2={Soccer} nazwa2="cosik" description2 = "cosik" price2="420,69 zł"  photo3={Soccer} nazwa3="cosik" description3 = "cosik" price3="420,69 zł"  />
        <Produkty  photo1={Soccer} nazwa1="cosik" description1 = "cosik" price1="420,69 zł"  photo2={Soccer} nazwa2="cosik" description2 = "cosik" price2="420,69 zł"  photo3={Soccer} nazwa3="cosik" description3 = "cosik" price3="420,69 zł"  />

    </div>
  );
}

export default App;
