import { Route, Routes } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/footer/Footer";
import NavbarLink from "./components/layout/NavbarLink";
import Main_doble from "./components/main/Main_doble";
import PrimeraC from './components/primeraC/PrimeraC';
import Noticias from './components/noticias/Noticias';

function App() {
  const images = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeHJPniKOCh4A5AvHNmZ9d1P3MDdEKsn-ZupmrmvLXTL8o6K2Z4Yloacg1GYTj_IIVmG1OxQtLXc28N4C2prbT0ExWO6QSt_4XtQ3w3hrdw0NzSh84GBV8rg776a_hqDVJbRIYCnjBDCSoXs-KrNm6YCDwY4Ii91a71HmNphlK233LUivyCWWlO3WIdy8-/s1600/363443303_139436005854078_9025107545377518119_n.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDife6YKv5qo6zxfaPY8cL-sqsOwnufckUTixYFW4-O3AG5iZQhMc9tlLlIkWU5hu4g89fDTVGmAuy4ZkEzzhn4tLvAl-9XBSbVR3B3TKCE4blz86tf-dzQby_3SBDFcwpH882wOss0ziXibr3aZWxYgGofjRjdcHS4BlJiVdNjlLthNZYaQQPq0e7H-_9/s960/358624738_128079130323099_8644498319330530980_n.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLs1p-Z_8joy7ckhHYwC5HcXvpRFed90TiGmYaVIRT4almb1Fxl_o-IYSbMKqiMRRtth0oYtjSmiB5DCj6Ysfjz5FRyYMZcvJkV3LQPs3TJhLH7sZfV_EXNxHbJs8XQI4yZOCuMVuIw7YFAf2gzkEKPKbGEC1pPPYekIq-ybGbt_VZMPqBjaRbHFHQ0hjy/s1600/357449547_139436035854075_4861659865390776933_n.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8sqxjh3maUzvqCzhsgzjtVcDipNWVnpgHSnqJpo8t94XU1ecYaL8TgkMVsVVCWxPJMaUVWeNTVQeN_kZrrPYx0kH1UqEXnYzmkiWKXcx6PKYDGGyAGBb6CMiOz2XoojMK8uPxBXOi_xOmsp5NEjNJJPfLhe_hooMs-YVuWyA_JtbcVo68tdU-UaR972tb/s1080/347599734_128079323656413_821136885774886062_n.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_mEvzWN24UZRPXZBHnQkdhC63Zvg_aj75vQGcpmHpRsP1vX53_IWgIXk73Eh_Pk08tMj4f-0RTEYTAJfZWAZf3z_Hb5eT8ioniz4CM96mTzSE5LsTAQD8-cs6M8ZVjss2Sc6Ozgy_db9hRyXFk2qxzKE5X3qIadNfZFqeC7o78qJ5jgN-sb9ekaaBUZgZ/s960/352748180_175542408541687_6957213510172385739_n.jpg"
  ];
  return (
    <div className="container_principal">
      <Navbar />
      <NavbarLink />
      <Routes>
        <Route path='/' element={<Main_doble images={images}/>}/>
        <Route path='/primerac' element={<PrimeraC />}/>
        <Route path='/noticias' element={<Noticias />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
