import React from 'react';

const DeliverySmCard = ({image, title}) => {
    return (
        <>
            <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56">
                <div className="w-full h-20 ">
                    <img
                        src={image}
                        alt="pizza"
                        className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div className="text-sm my-1 text-center font-semibold">
                    <h3>{title}</h3>
                </div>

            </div>
        </>
    );
}

const DeliveryLgCard =({image, title}) => {
    return (
        <>
            <div className="hidden lg:block w-64 h-48">
                <div className="w-full h-full">
                    <img
                        src={image}
                        alt="pizza"
                        className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                </div>
                <div className="text-xl my-1 font-medium">
                    <h3>{title}</h3>
                </div>

            </div>
        </>
    );
};

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    ); 
};

export default DeliveryCategory;
