import React from 'react'

export default function ServiceDetails({params}) {
    const data = [
        {
          _id: "60d21b4667d0d8992e610c85",
          service_name: "EcoClean",
          service_image: "/service_img_1.png",
          service_description:
            "EcoClean offers environmentally friendly cleaning services for homes and offices, using only non-toxic and biodegradable products.",
        },
        {
          _id: "60d21b4667d0d8992e610c86",
          service_name: "TechFix",
          service_image: "/service_img_2.png",
          service_description:
            "TechFix provides comprehensive repair and maintenance services for all your electronic devices, ensuring they run smoothly and efficiently.",
        },
        {
          _id: "60d21b4667d0d8992e610c87",
          service_name: "FitLife",
          service_image: "/service_img_3.png",
          service_description:
            "FitLife offers personalized fitness training and nutrition plans to help you achieve your health and wellness goals.",
        },
      ];
      const id = params.id
  return (
    <div>
    ServiceDetails
    <h2>id:{id}</h2>
    </div>
  )
}
