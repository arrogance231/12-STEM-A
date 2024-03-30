import React from "react";
import { classmatesRow1 } from ".";

function CardRow1() {
    return(
        <div>
             <ul className="flex justify-evenly mx-10" >
                {classmatesRow1.map((item, index) => (
                    <li className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-250' key={item.name}>
                        <div className="card card-compact w-60 bg-base-100 shadow-xl sm:h-[300px]">
                            <figure><img src={item.picture} alt="" className=" object-scale-down"/></figure>
                            <div className="card-body">
                                <span className="text-center"><h2 className="card-title">{item.name}</h2></span>
                            </div>
                        </div>
                    </li>
                ))}
             </ul> 
        </div>
    );
}


export default CardRow1
