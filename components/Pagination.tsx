import Link from "next/link";

export default function Pagination({product, setProduct}){
    const handlePrev = async(cursor) =>{
      const results = await fetch("/api/paginate",{
        method: "post",
        body: cursor
      })

      const {allProducts} = await results.json()
      setProduct(allProducts)
    }

    const handleNext = async(cursor) =>{
      
        const results = await fetch("/api/paginate",{
          method: "post",
          body: cursor
        })

        const {allProducts} = await results.json()
        setProduct(allProducts)
      
    }
    return (
        <div className="flex justify-center my-4">
             <button
             className={`flex items-center mx-2 ${product.before ? "border-black text-black": "border-gray-400 text-gray-400"} border px-2`}
              disabled={!product.before}
              onClick={()=>handlePrev(product.before)}>
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg> Prev
            </button>
            <button
              className={`flex items-center mx-2 ${product.after ? "border-black text-black": "border-gray-400 text-gray-400"} border px-2`}
              disabled={!product.after}
              onClick={()=>handleNext(product.after)}>
              Next <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
        </div>
    )
}