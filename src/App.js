import './App.css';

import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import firstBgImg from './assets/bg2.jpg';
import secondBgImg from './assets/bg3.jpg';


function App() {
  return (
    <div className="App">
      <Header title={"Заголовок"} descr={"Описание"}/>
      <Layout title={"Первый Layout заголовок"} descr={"Первый Layout описание"} urlBg={firstBgImg}/>
      <Layout title={"Второй Layout заголовок"} descr={"Второй Layout описание"} colorBg={"#6495ED"}/>
      <Layout title={"Второй Layout заголовок"} descr={"Второй Layout описание"} urlBg={secondBgImg}/>
      <Footer />
    </div>
  );
}

export default App;
