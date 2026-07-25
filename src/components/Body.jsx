import { useEffect, useState, useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Restaurants from "./Restaurants";
import Shimmer from "./shimmer";

import { resData } from "../assets/mockData";

function Body() {
  let [data, setData] = useState(null);
  const carouselRef = useRef(null);
  let [cardsData, setCardsData]=useState([]);
  // let [allCardsData, setAllCardsData] = useState([]);
  // console.log(resData)


  let imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/";

  // function getData() {
  //   let a = fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   );
  //   a.then((x) => x.json())
  //   // .then((y) => console.log(y));
  //   .then((y) => {
  //     setData(y);
  //     setCardsData(y.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  //     setAllCardsData(y.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  //   });
  // }

  function moveLeft() {
    carouselRef.current.scrollLeft -= 600;
  }

  function moveRight() {
    carouselRef.current.scrollLeft += 600;
  }

  //getData()

  // useEffect(() => getData(), []);

  useEffect(() => {
    setTimeout(()=>{
      setData(resData);
      setCardsData(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    },2000)
  }, []);


  let filterCards=()=>{
    let a=document.getElementById("search").value;
    let result=data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter((Restaurant,index)=>{
      return Restaurant.info.name.toLowerCase().includes(a.toLowerCase())
    })
    // let result=allCardsData.filter((Restaurant,index)=>{
    //   return Restaurant.info.name.toLowerCase().includes(a.toLowerCase())
    // })
    setCardsData(result)
  }


  if (!data) {
    return <Shimmer />;
  }

  return (
    <div className="Container font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="search flex items-center justify-end gap-2 p-4 my-4">
        <input type="text" placeholder="Search for Restaurant and food" id="search" onChange={filterCards}
         className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] px-4 py-2 border-2 border-[#1f1e1e] rounded-full text-sm md:text-base focus:outline-none focus:border-[#ff5200]"/>
        <button className="px-4 py-2 rounded-full bg-[#ff5200] text-white text-sm md:text-base hover:bg-[#e64a00] transition">Search</button>
        {/* <button onClick={filterCards}>Search</button> */}
      </div>
      
      <div className="mind-section mind-section p-3 md:p-5 relative">
        <h2 className="mb-4 text-lg md:text-2xl font-bold">What's on your mind?</h2>
        <div className="arrow hidden md:flex absolute top-[25px] right-[50px] gap-2">
          <FaArrowCircleLeft
            style={{ fontSize: 40, color: "#6B6A66" }}
            onClick={moveLeft}
          />
          <FaArrowCircleRight
            style={{ fontSize: 40, color: "#6B6A66" }}
            onClick={moveRight}
          />
        </div>

        <div className="carousel flex gap-5 overflow-x-auto scroll-smooth pb-[10px] [&::-webkit-scrollbar]:hidden" ref={carouselRef}>
          {data.data.cards[0].card.card.imageGridCards.info.map((item) => (
            <div className="carousel-item flex-none text-center" key={item.id}>
              <img src={imgurl + item.imageId} alt={item.action.text} 
              className="w-[70px] h-[90px]  sm:w-[100px] sm:h-[130px]  md:w-[140px] md:h-[180px]  object-cover cursor-pointer transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

     <div className="card-top">
      <h1 className="mb-4 font-bold text-lg md:text-2xl px-3 md:p-5">Top Restaurants in Coimbatore</h1>
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">

        {
        cardsData.map(
          (Restaurant,index) => {
            return (<Restaurants key={index} value={Restaurant} img={imgurl} />);
          },
        )}
      </div>
      </div>
     </div>
     </div>
    </div>
  );

}
export default Body;
