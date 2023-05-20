 
import './App.css';
import Pocetna from './Pocetna';
import Kontakt from './Kontakt';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Ponuda from './Ponuda';
function App() {
  const [products] = useState([
    {
      id: 1,
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rainbow-candy-lolipop-shana-novak.jpg",
      name: "Lizalica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:250,
      amount: 0,
      category: "lizalica"
    },
    {
      id: 2,
      image:"https://madus.com.np/wp-content/uploads/2020/12/Chocolate-cake-recipe-1200a.jpg",
      name: "Cokoladna torta sa lesnicima", 
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price: 2000,
      amount: 0,
      category: "torta"
    },
    {
      id: 3,
      image:"https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg ",
      name: "Gumene bombone u raznim oblicima",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:750,
      amount: 0,
      category: "bombone"
    },
    {
      id: 4,
      image:"http://images.kurir.rs/slika-620x419/gumene-bombone-foto-profimedia-1460386556-884283.jpg",
      name: "Gumene bombone gliste",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:300,
      amount: 0,
      category: "bombone"
    },
    {
      id: 5,
      image:"https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=20&m=500545362&s=612x612&w=0&h=47BAAM62P7qU-m8rZcAJVJcINlidqv5jxvKj58VVBtk=",
      name: "Sareni sladoled",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:169,
      amount: 0,
      category: "sladoled"
    },
    {id: 6,
      image: "https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg",
      name: "Lizalica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:984,
      amount: 0,
      category: "lizalica"
    },
    {
      id: 7,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      name: "Cokoladna torta", 
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:354,
      amount: 0,
      category: "torta"
    },
    {
      id: 8,
      image:"https://i2.wp.com/mnemagazin.me/wp-content/uploads/2017/02/gumene-bombone-e1486640233242.jpg?ssl=1",
      name: "Gumene bombone u raznim oblicima",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:741,
      amount: 0,
      category: "bombone"
    },
    {
      id: 9,
      image:"https://s3.envato.com/files/240029552/DSC_2558.jpg",
      name: "Gumene bombone lubenica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:974,
      amount: 0,
      category: "bombone"
    },
    {
      id: 10,
      image:"https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      name: "Ljubicasti sladoled",      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:190,
      amount: 0,
      category: "sladoled"
    },
  ]);
  return (
 
      
        
         
        <BrowserRouter className="App">
        <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Pocetna></Pocetna>}
        />
          
         <Route path="/kontakt" element={<Kontakt></Kontakt>} />
         <Route path="/ponuda" element={<Ponuda products={products}></Ponuda>} />
      </Routes>
     
  </BrowserRouter>
  
  );
}

export default App;
