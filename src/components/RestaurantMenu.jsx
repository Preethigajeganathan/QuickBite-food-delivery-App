import { useParams } from "react-router";
import { resMenuData } from "../assets/resMockData";
import { useState, useEffect } from "react";
import Restaurants from "./Restaurants";
import MenuShimmer from "./MenuShimmer";
import { GiRoundStar } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  increaseQuantity,
  decreaseQuantity,
} from "../Constants/AppSlice";
import { IoChevronDownOutline } from "react-icons/io5";

let RestaurantMenu = () => {
  let { id } = useParams();
  // console.log(id)
  // console.log(resMenuData)

  let img = "https://media-assets.swiggy.com/swiggy/image/upload/";

  let [MenuData, setMenudata] = useState(null);
  let [FoodData, setFoodData] = useState([]);
  const [collapsed, setCollapsed] = useState({});

  let dispatch = useDispatch();

  const cartItems = useSelector((store) => store.Cart.data);

  let result = resMenuData.filter((Restaurants, index) => {
    return id === Restaurants.data.cards[2].card.card.info.id;
  });
  // console.log(result[0])

  useEffect(() => {
    setTimeout(() => {
      setMenudata(result[0]);
      let show =
        result[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (item, value) => {
            return item.card.card.title ? true : false;
          },
        );
      setFoodData(show);
      // console.log(show)
    }, 2000);
  }, []);

  const toggleCategory = (index) => {
    setCollapsed((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  let AddCart = (x) => {
    dispatch(addItems(x));
  };

  const getQuantity = (id) => {
    const item = cartItems.find((cart) => cart.card.info.id === id);

    return item ? item.quantity : 0;
  };

  return !MenuData ? (
    <MenuShimmer />
  ) : (
    <div className="font-sans">
      <div className="menuContainer  w-full max-w-4xl mx-auto px-2 sm:px-4 ">
        <div className="Title py-8 bg-white rounded-2xl px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            {MenuData.data.cards[2].card.card.info.name}
          </h1>
        </div>
      </div>
      <div>
        <div>
          {FoodData.map((Menu, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => toggleCategory(index)}
                  className="w-full max-w-4xl mx-auto px-4 py-4 flex justify-between items-center cursor-pointer bg-gray-100 rounded-lg mb-2"
                >
                  <h2 className="text-xl font-bold">{Menu.card.card.title}</h2>

                  <span className="text-xl">
                    <IoChevronDownOutline
                      className={`duration-300 ${collapsed[index] ? "rotate-180" : "rotate-0"}`}
                    />
                  </span>
                </div>
                {!collapsed[index] && (
                  <div>
                    {Menu.card.card.itemCards
                      ? Menu.card.card.itemCards.map((items, index) => {
                          return (
                            <div key={index}>
                              <div className="menuItem w-full max-w-4xl mx-auto flex justify-between items-start gap-4 p-3 sm:p-4 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200">
                                <div className="menuContent flex-1 pr-2">
                                  <div className="foodName text-lg sm:text-xl font-bold text-gray-800 ">
                                    {items.card.info.name}
                                  </div>
                                  <div className="Description line-clamp-3 text-gray-500 mt-2 text-sm sm:text-base leading-6">
                                    {items.card.info.description}
                                  </div>
                                  <div className="price mt-3 text-base sm:text-lg font-bold">
                                    ₹
                                    {items.card.info.finalPrice
                                      ? items.card.info.finalPrice / 100
                                      : items.card.info.defaultPrice
                                        ? items.card.info.defaultPrice / 100
                                        : items.card.info.price / 100}
                                  </div>
                                  {items.card.info.ratings?.aggregatedRating
                                    ?.rating && (
                                    <div className="foodRatingmt-3 flex items-center gap-1 font-semibold">
                                      <GiRoundStar className="icon text-green-600 " />
                                      {
                                        items.card.info.ratings.aggregatedRating
                                          .rating
                                      }
                                    </div>
                                  )}
                                </div>
                                <div className="menuImag relative w-32 sm:w-40 h-36 sm:h-40 shrink-0 flex justify-center items-start">
                                  <img
                                    src={
                                      items.card.info.imageId
                                        ? img + items.card.info.imageId
                                        : "https://placehold.net/main.svg"
                                    }
                                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl object-cover"
                                  />

                                  {getQuantity(items.card.info.id) === 0 ? (
                                    <button
                                      onClick={() => AddCart(items)}
                                      className="absolute left-1/2  -translate-x-1/2 bottom-1 sm:bottom-0 bg-white  text-green-600  text-sm  font-bold  px-5 py-2 rounded-lg shadow-md border border-gray-200"
                                    >
                                      ADD
                                    </button>
                                  ) : (
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-0 bg-white text-green-600 font-bold px-3 py-2 rounded-lg shadow-md border border-gray-200 flex items-center gap-3">
                                      <button
                                        onClick={() =>
                                          dispatch(
                                            decreaseQuantity(
                                              cartItems.findIndex(
                                                (cart) =>
                                                  cart.card.info.id ===
                                                  items.card.info.id,
                                              ),
                                            ),
                                          )
                                        }
                                      >
                                        -
                                      </button>

                                      <span>
                                        {getQuantity(items.card.info.id)}
                                      </span>

                                      <button
                                        onClick={() =>
                                          dispatch(
                                            increaseQuantity(
                                              cartItems.findIndex(
                                                (cart) =>
                                                  cart.card.info.id ===
                                                  items.card.info.id,
                                              ),
                                            ),
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : Menu.card.card.categories.map((Category, index) => {
                          return (
                            <div key={index}>
                              <div>
                                {Category.itemCards.map((combo, index) => {
                                  return (
                                    <div key={index}>
                                      <div className="menuItem w-full max-w-4xl mx-auto flex justify-between items-start gap-4 p-3 sm:p-4 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200">
                                        <div className="menuContent flex-1 pr-2">
                                          <div className="foodName text-lg sm:text-xl font-bold text-gray-800">
                                            {combo.card.info.name}
                                          </div>
                                          <div className="Description line-clamp-3 text-gray-500 mt-2 text-sm sm:text-base leading-6">
                                            {combo.card.info.description}
                                          </div>
                                          <div className="price mt-3 text-base sm:text-lg font-bold">
                                            {" "}
                                            ₹
                                            {combo.card.info.defaultPrice
                                              ? combo.card.info.defaultPrice /
                                                100
                                              : combo.card.info.finalPrice
                                                ? combo.card.info.finalPrice /
                                                  100
                                                : combo.card.info.price / 100}
                                          </div>
                                          {combo.card.info.ratings
                                            ?.aggregatedRating?.rating && (
                                            <div className="foodRating mt-3 flex items-center gap-1 font-semibold">
                                              <GiRoundStar className="icon text-green-600" />
                                              {
                                                combo.card.info.ratings
                                                  .aggregatedRating.rating
                                              }
                                            </div>
                                          )}
                                        </div>

                                        <div className="menuImag relative w-32 sm:w-40 h-36 sm:h-40 shrink-0 flex justify-center items-start">
                                          <img
                                            src={
                                              combo.card.info.imageId
                                                ? img + combo.card.info.imageId
                                                : "https://placehold.net/main.svg"
                                            }
                                            className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl object-cover"
                                          />
                                          {getQuantity(combo.card.info.id) ===
                                          0 ? (
                                            <button
                                              onClick={() => AddCart(combo)}
                                              className="absolute left-1/2  -translate-x-1/2 bottom-1 sm:bottom-0 bg-white  text-green-600  text-sm  font-bold  px-5 py-2 rounded-lg shadow-md border border-gray-200"
                                            >
                                              ADD
                                            </button>
                                          ) : (
                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-0 bg-white text-green-600 font-bold px-3 py-2 rounded-lg shadow-md border border-gray-200 flex items-center gap-3">
                                              <button
                                                onClick={() =>
                                                  dispatch(
                                                    decreaseQuantity(
                                                      cartItems.findIndex(
                                                        (cart) =>
                                                          cart.card.info.id ===
                                                          combo.card.info.id,
                                                      ),
                                                    ),
                                                  )
                                                }
                                              >
                                                -
                                              </button>

                                              <span>
                                                {getQuantity(
                                                  combo.card.info.id,
                                                )}
                                              </span>

                                              <button
                                                onClick={() =>
                                                  dispatch(
                                                    increaseQuantity(
                                                      cartItems.findIndex(
                                                        (cart) =>
                                                          cart.card.info.id ===
                                                          combo.card.info.id,
                                                      ),
                                                    ),
                                                  )
                                                }
                                              >
                                                +
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
