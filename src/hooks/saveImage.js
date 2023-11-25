import axios from "axios";


const imageHostinSecurityApi = import.meta.env.VITE_MIAGE_HOSTING_KEY;
const imageUploadHoltinUrl = `https://api.imgbb.com/1/upload?key=${imageHostinSecurityApi}`;

const saveImage = async (image) => {
    const imageFile = { image: image }
    console.log(image);
    const res = await axios.post(imageUploadHoltinUrl, imageFile, {
        headers: {
            "content-type": "multipart/form-data",
        },
    })
    return res.data
};

export default saveImage;