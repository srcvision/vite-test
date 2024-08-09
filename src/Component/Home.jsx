import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import imagePath from "../assets/image/Header.png";
import img1 from "../assets/image/Group 5334.png";
import img2 from "../assets/image/img11.png";
import img3 from "../assets/image/img12.png";
import img4 from "../assets/image/img13.png";
import img5 from "../assets/image/img14.png";
import img6 from "../assets/image/img01.png";
import img7 from "../assets/image/img02.png";
import img8 from "../assets/image/img03.png";
import img9 from "../assets/image/img04.png";
import img10 from "../assets/image/img05.png";
import img11 from "../assets/image/img06.png";
import img12 from "../assets/image/icon1.png";
import img13 from "../assets/image/icon2.png";
import img14 from "../assets/image/icon3.png";
import img15 from "../assets/image/icon4.png";
import img16 from "../assets/image/icon5.png";
import img017 from "../assets/image/icon6.png";
import img018 from "../assets/image/icon7.png";
import img019 from "../assets/image/icon8.png";
import img17 from "../assets/image/frame1.png";
import img18 from "../assets/image/frame2.png";
import img19 from "../assets/image/frame3.png";
import img20 from "../assets/image/frame4.png";
import img21 from "../assets/image/frame5.png";
import img22 from "../assets/image/frame6.png";
import img23 from "../assets/image/frame7.png";
import img24 from "../assets/image/frame8.png";
import img25 from "../assets/image/frame9.png";
import img26 from "../assets/image/frame10.png";
import img27 from "../assets/image/frame11.png";
import img28 from "../assets/image/frame12.png";
import img29 from "../assets/image/frame13.png";
import img30 from "../assets/image/frame14.png";
import img31 from "../assets/image/frame15.png";
import img32 from "../assets/image/frame16.png";

const Home = () => {
  const btn =
    "px-6 mt-6 py-2 bg-gradient-to-r from-indigo-600 animate-bounce via-purple-500 to-pink-500 text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg hover:shadow-sky-200";

  const images = [
    { image: img6, title: "Project Title", description: "UI art, Artist" },
    { image: img7, title: "Project Title", description: "UI art, Artist" },
    { image: img8, title: "Project Title", description: "UI art, Artist" },
    { image: img9, title: "Project Title", description: "UI art, Artist" },
    { image: img10, title: "Project Title", description: "UI art, Artist" },
    { image: img11, title: "Project Title", description: "UI art, Artist" },
  ];
  const frames = [
    [img17, img18, img19, img20],
    [img21, img22, img23, img24],
    [img25, img26, img27, img28],
    [img29, img30, img31, img32],
  ];

  return (
    <div>
      <div className="flex flex-col w-full h-screen bg-black text-white mt-2 p-8">
        <div className="flex flex-wrap justify-between items-center h-full">
          <div className="my-6 w-full sm:w-1/2 p-4">
            <p className="text-gray-400 font-bold">Branding | Image Making</p>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Visual Designer
            </h1>
            <p className="mt-4 bg-blend-lighten hover:bg-blend-darken">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <button className={btn}>Contact</button>
          </div>
          <div className="my-6 w-full sm:w-1/2 p-4 flex justify-center">
            <img
              src={imagePath}
              alt="Visual Designer"
              className="object-contain h-80 w-96 border-none truncate p-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-32 mt-2">
        <div className="mx-12">
          <ul className="flex flex-wrap justify-between item-center h-full ">
            <li>
              <img src={img1} className="py-11" alt="goggle" />
            </li>
            <li>
              <img src={img2} className="py-12" alt="nike" />
            </li>
            <li>
              <img src={img3} className="py-10" alt="apple" />
            </li>
            <li>
              <img src={img4} className="py-14" alt="samsung" />
            </li>
            <li>
              <img src={img5} className="py-11" alt="adidas" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-2 mx-10 w-full">
        <h1 className="text-gray-800 font-bold text-4xl text-center mt-10">
          Latest Work
        </h1>
        <div className="flex flex-wrap justify-between items-center mt-11 w-11/12">
          {images.map((item, index) => (
            <div
              key={index}
              className="w-96 sm:w-1/3 p-4 shadow-lg shadow-gray-900 hover:shadow-gray-500 rounded-3xl transition duration-300"
            >
              <img
                src={item.image}
                alt="Project"
                className="object-cover w-96 h-2/3 rounded-2xl"
              />
              <h3 className="text-gray-200 font-bold mt-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-24 mt-16 ">
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center rounded-2xl shadow-2xl ">
          <div className="p-8 max-w-4xl mt-6 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Notre méthodologie</h1>
              <p className="text-lg">
                Créer une équipe pour votre projet c'est bien, avoir une
                organisation sans faille c'est mieux. Pourquoi ? Pour gagner en
                productivité, en temps et en ébullition d'idées.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src={img16}
                    alt="Ateliers"
                    className="mx-auto animate-bounce"
                  />
                </div>
                <h2 className="text-xl font-bold">Ateliers</h2>
                <p className="mt-2">
                  Qui vont nous permettre d'échanger, de débattre, de proposer,
                  de co-créer et de valider.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src={img15}
                    alt="Figjam"
                    className="mx-auto animate-bounce"
                  />
                </div>
                <h2 className="text-xl font-bold">Figjam</h2>
                <p className="mt-2">
                  Pour itérer sur votre projet, Figjam est un grand tableau
                  blanc digital : Brainstorming, idées.. vous allez adorer
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src={img14}
                    alt="Figma"
                    className="mx-auto animate-bounce"
                  />
                </div>
                <h2 className="text-xl font-bold">Figma</h2>
                <p className="mt-2">
                  Pour imaginer ensemble le design et l'expérience de votre
                  projet, Figma est l'outil que nous privilégions.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src={img12}
                    alt="Développement"
                    className="mx-auto animate-bounce"
                  />
                </div>
                <h2 className="text-xl font-bold">Développement</h2>
                <p className="mt-2">
                  Pour développer vos sites et applications nous favorisons :
                  Webflow, Bubble, Adalo, Shopify et Wordpress.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src={img13}
                    alt="Asana"
                    className="mx-auto animate-bounce"
                  />
                </div>
                <h2 className="text-xl font-bold">Asana</h2>
                <p className="mt-2">
                  Pour la gestion de votre projet : planning, tâches, ticketing,
                  gestion d'équipe, Asana est un indispensable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-black text-white mt-2 p-8">
        <div className="flex flex-wrap justify-between items-center h-full ">
          <div className="my-6 w-full sm:w-1/2 pl-24 pr-16 ">
            <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-5% to-red-500 to-20%">
              Design.
            </h1>
            <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 from-5% to-sky-500 to-20%">
              Create.
            </h1>
            <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-900 from-5% to-indigo-600 to-20%">
              Inspire.
            </h1>
            <p className="text-sm pr-20 justify-center align-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              voluptate mollitia accusamus dolor sunt deserunt nihil itaque
              fugit dignissimos non expedita?
            </p>
            <button className={btn}>Explore</button>
          </div>
          <div className="my-6 w-full sm:w-1/2 grid grid-cols-4 gap-4">
            {frames.map((frame, index) => (
              <div key={index}>
                {frame.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Frame ${index + 1} Image ${i + 1}`}
                    className="rounded-lg object-cover mt-2 transition duration-500 ease-in-out hover:scale-110"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-40 mx-16 mr-16 text-white">
        <div className="flex flex-wrap justify-between mr-36">
          <div className="flex space-x-16">
            <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 from-5% to-sky-500 to-20%">
              Designpo
            </h1>
            <p className="text-sm pr-20 justify-center mt-2 align-center text-white mt-2">
              © 2020 Designmodo. All rights reserved.
            </p>
            </div>
        <div className="mt-2">
          <ul className="flex space-x-3">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Login</li>
          </ul>
          </div>
        </div>
      </div>
      <hr className="text-white w-full mt-6 ml-16"/>
      <div className="flex flex-col w-full mt-10 mx-16 mr-16 text-white">
        <div className="flex flex-wrap justify-between mr-36">
          <p className="text-gray-500 font-sm underline font-bold">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
           <img src={img017} alt="" className="w-6"/>
           <img src={img018} alt="" className="w-6"/>
           <img src={img019} alt="" className="w-2"/>
          </div>
          </div>

    </div>
  );
};

export default Home;
