import { useEffect, useRef } from "react";

const CarDetails = ({initialData}) => {
 const carRef = useRef()
  
useEffect(() => {
  carRef.current.reset()
},[initialData])
  
  return (
    <div>
  <form ref={carRef}>
      <p>
        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" defaultValue={initialData.brand} />
      </p>
      <p>
        <label htmlFor="model">Model:</label>
        <input type="text" name="model" defaultValue={initialData.model} />
      </p>
      <p>
        <label htmlFor="year">Year:</label>
        <input type="text" name="year" defaultValue={initialData.year} />
      </p>
      <p>
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" defaultValue={initialData.color} />
      </p>
    </form>
    </div>
  
  );
};

export default CarDetails;