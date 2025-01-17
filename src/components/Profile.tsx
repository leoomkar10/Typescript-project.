import {  useState } from "react"
import { FaCamera } from "react-icons/fa";
import Tab from "./Tab";

const Profile = () => {

    const [bannerUrl, setbannerUrl] = useState("https://via.placeholder.com/1500x400");

    const [profileUrl, setprofileUrl] = useState("https://via.placeholder.com/100");

    const handleBannerChange = (event: any) => {
        const file = event.target.files[0];
        if(file){
            setbannerUrl(URL.createObjectURL(file));
        }
        
    }
    const handleProfileChange = (event: any) => {
        const file = event.target.files[0];
        if(file){
            setprofileUrl(URL.createObjectURL(file));
        }
        
    }

  return (
    <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
            <img src={bannerUrl} alt="background image" className="w-full h-60 object-cover"  />

            <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <label htmlFor="banner-upload" className="cursor-pointer">
                    <FaCamera size={24}/>
                </label>

                <input type="file" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange} />
            </button>
        </div>

        <div className="flex items-center ml-4 mt-[2rem]">
            <img src={profileUrl} alt="channel logo" className="w-40 h-40 object-cover rounded-full border-white relative" />

            <button className="absolute ml-[3.8rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <label htmlFor="profile-upload" className="cursor-pointer">
                    <FaCamera size={24} />
                </label>
                <input type="file" id="profile-upload" accept="image/*" className="hidden" onChange={handleProfileChange} />
            </button>

            <div className="ml-4 mt-4">
                <h1 className="text-2xl font-bold ml-[4rem]">Leo Omkar</h1>
                <p className="ml-[4rem]">20M Views</p>
                <p className="mt-2 ml-[4rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt at quibusdam, assumenda exercitationem corporis quae, iste impedit atque consectetur sint autem? Tempora repudiandae dignissimos exercitationem vel, consequuntur nisi quam!
                    Vel sint cupiditate quaerat placeat, magnam asperiores. Voluptates est ipsum libero quae, voluptatibus in officia illum atque hic. Dicta consequatur odit quaerat impedit maiores, ut deserunt nulla eaque recusandae. Laborum.
                </p>
                <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
            </div>
        </div>
        <Tab/>
    </div>
  )
}

export default Profile