import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuButton({title, pagesList}) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    const handlePageClick = (path) => {
        navigate(path);
        setIsOpen(false);
    };
    
    return (
        <div style={{position: "relative"}}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && (
                <div style={{position: "absolute", padding: "25px", zIndex: 1, top: "100%", minWidth: "50px"}}>
                    {pagesList.map((page) => (
                        <div 
                            key={page.path}
                            onClick={() => handlePageClick(page.path)}
                            style={{cursor: "pointer", padding: "5px", hover: {background: "#eee"}}}
                        >
                            {page.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MenuButton