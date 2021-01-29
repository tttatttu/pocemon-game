import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import BgLayout from './assets/bg1.jpg'


function App() {
  return (
    <div className="App">
      <Header title={'This is title'} desc={'This is Description!'} />
      <Layout id={1} title='Layout1' desc='test1' urlBg={BgLayout} colorBg={''} />
      <Layout id={2} title='Layout2' desc='test2' urlBg={''} colorBg={'#a65b16'} />
      <Layout id={3} title='Layout3' desc='test3' urlBg={BgLayout} colorBg={''} />
      <Footer />
    </div>
  );
}

export default App;
