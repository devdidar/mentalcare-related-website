import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import './ServiceDetails.css'
const ServiceDetail = () => {
  const { servicesID } = useParams();
  const [servicesDetail, setServicesDetail] = useState([]);
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("/servicesDetail.json")
      .then((res) => res.json())
      .then((data) => {
        setServicesDetail(data.services);
      });
  }, []);
  useEffect(() => {
    const filteredService = servicesDetail.find(
      (service) => service.id === parseInt(servicesID)
    );
    setSingleService(filteredService);
  }, [servicesDetail]);
  return (
    <div className="flex justify-center items-center bg-green-100 h-screen	">
      <div className=" detail w-1/4 text-center bg-white px-2 py-4 rounded-xl">
        <h1 className="font-medium	">General Information:</h1>
        <h1>Name: {singleService?.title}</h1>
        <img src={singleService?.img} alt="" className="inline-block py-2" />
        <p>{singleService?.description}</p>
        <Link  to="/contact-us">
          <button className="bg-green-400 ml-2 px-3 py-2 rounded my-2">
            Get This
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
