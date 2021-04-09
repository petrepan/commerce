import Link from "next/link";

export default function Filter(){
    return (
    <div className="w-100 md:block">
        <form className="text-sm">
            <div className="border-b pb-4">
                <h6 className="font-bold mb-3 hidden md:block">Category</h6>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="people"/>
                <span>People</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="premium"/>
                <span>Premium</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="pets"/>
                <span>Pets</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="food"/>
                <span>Food</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="landmarks"/>
                <span>Landmarks</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="cities"/>
                <span>Cities</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="nature"/>
                <span>Nature</span>
                </div>
            </div>
            <div>
                <h6 className="font-bold my-3 text-lg md:text-base">Price range</h6>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="<20"/>
                <span>Lower than $20</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="20-100"/>
                <span>$20 - $100</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name="100-200"/>
                <span>$100 - $200</span>
                </div>
                <div className="flex items-center py-1.5">
                    <input type="checkbox" className="mr-5" name=">200"/>
                <span>More than $200</span>
                </div>
            </div>
        </form>
    </div>
    )
}