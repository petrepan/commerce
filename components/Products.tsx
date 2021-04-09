import {useState} from "react"
import reset from '../styles/Reset.module.css'
import Filter from "../components/Filter"
import ProductList from "../components/ProductList"

export default function Products({product, setProduct, cartList, setCartList, showCart, setShowCart}){
    const [showCategory, setShowCategory] = useState(false)
    const toggleCategory = (e) =>{
        e.preventDefault()
        setShowCategory(!showCategory)
            }
    return (
        <section className="py-6">
            <div className={`fixed ${showCategory ? "block" : "hidden"} md:hidden left-0 top-0 w-full h-full z-10 pt-8 bg-black bg-opacity-50`}>
                <div className="p-4 h-full bg-white">
                <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg">Filter</h4>
            <button onClick={toggleCategory} className="text-right">
               <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L20 20" stroke="black" strokeWidth="4"/>
            <path d="M2 20L20 2" stroke="black" strokeWidth="4"/>
            </svg>
            </button>
            </div>
            <Filter />
                </div>
           

            
            </div>
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Photography / <span className="text-gray-400">Premium Photos</span></h3>
                <div className="items-center text-sm hidden md:flex">
                    <span className="flex items-center text-gray-600">
                    <svg className="text-gray-600" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z" fill="gray"/>
                    <path d="M11.4592 14.6367C11.5328 14.7103 11.6278 14.7471 11.7259 14.7471C11.824 14.7471 11.919 14.7103 11.9926 14.6367L14.8896 11.7397C15.0368 11.5926 15.0368 11.3565 14.8896 11.2094C14.7425 11.0622 14.5064 11.0622 14.3593 11.2094L12.103 13.4657V0.626917C12.103 0.418456 11.9344 0.249847 11.7259 0.249847C11.5174 0.249847 11.3488 0.418456 11.3488 0.626917V13.4657L9.09561 11.2094C8.94846 11.0622 8.71241 11.0622 8.56526 11.2094C8.41811 11.3565 8.41811 11.5926 8.56526 11.7397L11.4592 14.6367Z" fill="gray"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="15" height="15" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p className="px-2">Sort By</p>
                    </span>
                    <div>
                    <select name="sort" className={`block py-3 focus:outline-none focus:bg-white ${reset.select}`} id="sort">
                        <option value="Price">Price</option>
                        <option value="Alphabet">A - Z</option>
                        <option value="Alphabet">Z - A</option>
                    </select>
                    </div>
                </div>
                <div onClick={toggleCategory} className="md:hidden">
                    <button>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8119 0H5.18805C2.32736 0 0 2.32736 0 5.18805V23.812C0 26.6726 2.32736 29 5.18805 29H23.812C26.6726 29 29 26.6726 29 23.8119V5.18805C29 2.32736 26.6726 0 23.8119 0ZM27.3008 23.8119C27.3008 25.7357 25.7357 27.3008 23.8119 27.3008H5.18805C3.26431 27.3008 1.69922 25.7357 1.69922 23.8119V5.18805C1.69922 3.26431 3.26431 1.69922 5.18805 1.69922H23.812C25.7357 1.69922 27.3008 3.26431 27.3008 5.18805V23.8119Z" fill="black"/>
                    <path d="M24.5103 6.3702H11.5701C11.2143 5.31357 10.2149 4.55017 9.03986 4.55017C7.86479 4.55017 6.86537 5.31357 6.50961 6.3702H4.48975C4.02054 6.3702 3.64014 6.7506 3.64014 7.21981C3.64014 7.68902 4.02054 8.06942 4.48975 8.06942H6.50966C6.86542 9.12605 7.86485 9.88946 9.03991 9.88946C10.215 9.88946 11.2144 9.12605 11.5702 8.06942H24.5103C24.9795 8.06942 25.3599 7.68902 25.3599 7.21981C25.3599 6.7506 24.9795 6.3702 24.5103 6.3702ZM9.03986 8.19024C8.50477 8.19024 8.06943 7.7549 8.06943 7.21981C8.06943 6.68473 8.50477 6.24939 9.03986 6.24939C9.57494 6.24939 10.0103 6.68473 10.0103 7.21981C10.0103 7.7549 9.57494 8.19024 9.03986 8.19024Z" fill="black"/>
                    <path d="M24.5103 13.6504H22.4904C22.1346 12.5938 21.1351 11.8304 19.9601 11.8304C18.7851 11.8304 17.7857 12.5938 17.4299 13.6504H4.48975C4.02054 13.6504 3.64014 14.0308 3.64014 14.5C3.64014 14.9692 4.02054 15.3496 4.48975 15.3496H17.4299C17.7857 16.4063 18.7852 17.1697 19.9602 17.1697C21.1352 17.1697 22.1347 16.4063 22.4904 15.3496H24.5103C24.9795 15.3496 25.3599 14.9692 25.3599 14.5C25.3599 14.0308 24.9795 13.6504 24.5103 13.6504ZM19.9602 15.4704C19.4251 15.4704 18.9897 15.0351 18.9897 14.5C18.9897 13.9649 19.4251 13.5296 19.9602 13.5296C20.4953 13.5296 20.9306 13.9649 20.9306 14.5C20.9306 15.0351 20.4953 15.4704 19.9602 15.4704Z" fill="black"/>
                    <path d="M24.5103 20.9306H15.2102C14.8545 19.8739 13.855 19.1105 12.68 19.1105C11.5049 19.1105 10.5055 19.8739 10.1497 20.9306H4.48975C4.02054 20.9306 3.64014 21.311 3.64014 21.7802C3.64014 22.2494 4.02054 22.6298 4.48975 22.6298H10.1497C10.5055 23.6864 11.5049 24.4498 12.68 24.4498C13.855 24.4498 14.8545 23.6864 15.2102 22.6298H24.5103C24.9795 22.6298 25.3599 22.2494 25.3599 21.7802C25.3599 21.311 24.9795 20.9306 24.5103 20.9306ZM12.68 22.7507C12.1449 22.7507 11.7096 22.3153 11.7096 21.7802C11.7096 21.2452 12.1449 20.8098 12.68 20.8098C13.2151 20.8098 13.6504 21.2451 13.6504 21.7802C13.6504 22.3153 13.2151 22.7507 12.68 22.7507Z" fill="black"/>
                    </svg>
                    </button>               

                </div>
            </div>
            <div className="py-3 flex justify-between">
                <div className="hidden md:block md:w-1/5">
                <Filter />
                </div>
                <ProductList showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList} product={product} setProduct={setProduct} />
            </div>
        </section>
    )
}