import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../Images/notfound.png'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'

const RowContainer = ({flag, data, scrollValue}) => {
    const rowContainer = useRef()

    const [items, setItems] = useState([])

    const [{cartItems}, dispatch] = useStateValue()

    const addtocart = () =>{
        
        dispatch({
            type : actionType.SET_CARTITEMS,
            cartItems : items,
        })
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    }, [scrollValue])

    useEffect(() => {
        addtocart()
    }, [items])

  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
    }`}
    >
        {data && data.length > 0 ? (
            data.map((item) => (
            <div 
            key={item.id}
            className="w-300 h-[250px] min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">


            <div className="w-full flex items-center justify-between">
          
                <motion.div 
                className="w-40 h-40 -mt-8 drop-shadow-xl" whileHover={{scale: 1.2}} >
                <img 
                src={item?.imageURL} alt=""
                className="w-full h-full object-contain"
                 />
                </motion.div>
                
                 <motion.div  whileTap={{scale : 0.75}} 
                 className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:shadow-md" onClick={() => setItems([...cartItems, item])}>
                    <MdShoppingBasket className="text-white"/>
                 </motion.div>
            </div>
            <div className="w-full flex flex-col gap-3 -ml-3 items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item?.calories}</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold">
                        <span className="text-sm text-green-500">Ghc</span>{item?.price}
                        </p>
                </div>
            </div>
        </div>
        )) 
    ) : ( 
        <div className="w-full flex flex-col items-center justify-center">
                <img src={NotFound} className="h-340" />
                <p className="text-xl text-headingColor font-semibold my-2">Items Not Available. Come Again Later.</p>
            </div>
            )}
    </div>
  )
}

export default RowContainer