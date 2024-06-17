import { useState } from "react";
import "../Menu/menu.css";

const Test = () =>  {
    const [elements, setElements] = useState([]);

    const handleClick = () => {
        const newElement = <div key={elements.length} className="fixed top-1/4 left-1/2 ml-[-90px] border-2 border-[#f5f5f5] px-4 py-2 rounded-md bg-red-500 text-[#f5f5f5] pop-up-delete">
                <h1>Berhasil diHapus</h1> 
        </div>;
        setElements([...elements, newElement]);
    };

    return (
        <div>
            <button onClick={handleClick} className="bg-red-500 rounded-lg hover:bg-red-600 p-2 text-[#f5f5f5] font-medium">Delete Btn</button>
            <div>
                {elements}
            </div>
        </div>
    );
}

export default Test;