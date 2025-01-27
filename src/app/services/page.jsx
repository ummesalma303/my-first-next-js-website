import Link from 'next/link';
import React from 'react'

export default function ServicesPage() {
  //  const id = params.id 
   const data = [
    {
      _id: "60d21b4667d0d8992e610c85",
      service_name: "EcoClean",
      service_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-1JV62SlRKDPW1g2uNT6suo_QiTGT3fZdw&s",
      service_description:
        "EcoClean offers environmentally friendly cleaning services for homes and offices, using only non-toxic and biodegradable products.",
    },
    {
      _id: "60d21b4667d0d8992e610c86",
      service_name: "TechFix",
      service_image: "https://miro.medium.com/v2/resize:fit:2000/1*sj_xp8Jq32-M6Yf7u9CoEg.jpeg",
      service_description:
        "TechFix provides comprehensive repair and maintenance services for all your electronic devices, ensuring they run smoothly and efficiently.",
    },
    {
      _id: "60d21b4667d0d8992e610c87",
      service_name: "FitLife",
      service_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-1JV62SlRKDPW1g2uNT6suo_QiTGT3fZdw&s",
      service_description:
        "FitLife offers personalized fitness training and nutrition plans to help you achieve your health and wellness goals.",
    },
  ];
  return (
    <div className='grid grid-cols-3 gap-5'>
      {
        data?.map(service=>(
        <div>
          
          <Link href={`/services/:${service._id}`}>
          <div className="">
           <img className='w-60 h-36' src={service?.service_image} alt="" />
          <h2>{service?. service_name}</h2> <br />
           {/* <p>{service?.service_description}</p> */}
          </div>
           </Link>
        </div>))
      }
      
     
    </div>
  )
}
