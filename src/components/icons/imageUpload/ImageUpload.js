import { useState } from "react"
import "./ImageUpload.css"

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    
    function handleChange(e){
        const newImage = e.target.files[0]; 
        console.log(newImage); 
        setImage(URL.createObjectURL(newImage));
    }

    return (
        <div>
            <label
                htmlFor="img"
                className="file-upload"
            >Select image</label>
            <input
                id="img"
                type="file"
                onChange={handleChange}
                className="file-input"
            />
            <img src={image}/>
        </div>
    )
}
export default ImageUpload; 