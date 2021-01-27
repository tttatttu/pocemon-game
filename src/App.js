import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import BgLayout from './assets/bg1.jpg'


function App() {
  return (
    <div className="App">
      <Header title={'This is title'} desc={'This is Description!'} />
      <Layout id={1} title={'Layout1'} desc={'test1'} urlBg={`url(${BgLayout})`} colorBg={''} />
      <Layout id={2} title={'Layout2'} desc={'test2'} urlBg={''} colorBg={'#6d3c3c'} />
      <Layout id={3} title={'Layout3'} desc={'test3'} urlBg={`url(${BgLayout})`} colorBg={''} />
      <Footer />
    </div>
  );
}

export default App;
