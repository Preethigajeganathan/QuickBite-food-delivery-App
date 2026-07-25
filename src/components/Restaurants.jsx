import { MdStars } from "react-icons/md";
import { resData } from "../assets/mockData";
import { Link } from "react-router";

function Restaurants({value,img}){
    return (<Link to={"restaurant/" + value.info.id} key={value.info.id} 
    className="flex md:block w-full gap-4 p-4 rounded-[10px] shadow-[2px_2px_10px_#6362627e] transition-transform duration-300 hover:scale-105">
                <img
                  src={img + value.info.cloudinaryImageId}
                  className="w-[120px] h-[120px] md:w-[280px] md:h-[180px] rounded-[10px] object-cover shrink-0 "
                />
                <div className="flex flex-col justify-center flex-1 md:block">
                  <div className="name text-[18px] font-[550] mt-[5px] text-[#1f1e1e] line-clamp-1">
                  {value.info.name}
                </div>
                <div className="details text-[#817E7E] text-[15px] font-[500] line-clamp-1">
                  {value.info.cuisines.join(", ")}
                </div>
                <div className="details text-[#817E7E] text-[15px] font-[500]">
                  {value.info.areaName}
                </div>
                <div className="rating flex items-center gap-1 mt-[10px] text-[#0D0D0D] font-[500]">
                  <MdStars className="text-green-600 text-lg" />
                  {value.info.avgRating}
                </div>
                </div>
              </Link>)
}


export default Restaurants;