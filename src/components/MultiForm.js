import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import LocationInfo from "./LocationInfo";
import ShippingInfo from "./ShippingInfo";

const MultiForm = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="checkout pb-5 mb-2">
      <div className="container ">
        <div className="p-3">
          {
            {
              1: <ShippingInfo handleChange={handleChange} />,
              2: <DeliveryInfo handleChange={handleChange} />,
              3: <LocationInfo handleChange={handleChange} />,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 ? (
              <button className="btn btn-warning" onClick={prevStep}>
                Back
              </button>
            ) : null}
            <button className="btn btn-warning" onClick={nextStep}>
              {step === 3 ? "Place Order" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
