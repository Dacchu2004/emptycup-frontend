import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


export type Dtype={
    id:number,
    name:string,
    rating:number,
    description:string,
    projects:number,
    years:number,
    price:number|string,
    phone:string[],
    shortlisted:boolean,
};

type Props={
    data:Dtype,
    onShortlist:(id:number)=>void,
};

export const Dcard:React.FC<Props>=({data,onShortlist})=>{
    const stars=Array(5)
        .fill(0)
        .map((_, i) =>
            i + 1 <= Math.floor(data.rating)
                ? "★"
                : i < data.rating
                ? "⯪" 
                : "☆"
        )
        .join("");

    return (
        <div className="bg-[#FFF5E9] p-4 rounded-lg shadow-md flex justify-between">
            <div className="w-[75%]">
                <h2 className="text-lg font-bold">{data.name}</h2>
                <div className="text-sm">{stars}</div>
                <p className="text-sm mt-2">{data.description}</p>
                <div className="flex space-x-6 mt-4 text-center text-sm font-semibold">
                    <div className="projects">{data.projects} <br />Projects</div>
                    <div className="years">{data.years} <br />
                    Years</div>
                    <div className="price">{data.price} <br />
                    Price</div>
                </div>
                <div className="phone mt-4 space-y-1 text-sm">
                {data.phone.map((phone, index) => (
                    <div key={index}>{phone}</div>
                ))}
                </div>
            </div>
                <div className="flex flex-col items-center justify-between text-xs text-right">
                <button className="text-orange-800">Details</button>
                <button className="text-orange-800">Hide</button>
                <button
                onClick={() => onShortlist(data.id)}
                className={data.shortlisted ? "text-red-600 font-bold" : "text-orange-800"}
                >
                <FontAwesomeIcon
                    icon={data.shortlisted ? solidHeart : regularHeart}
                    className="mr-1"
                /> Shortlist
                </button>
                <button className="text-orange-800">Call</button>
                <button className="text-orange-800">Report</button>
            </div>   
        </div>
    );
};
