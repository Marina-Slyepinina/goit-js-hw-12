import axios from "axios";

const myApiKey = "49653024-3e206daf7693dc60176f31220";

export async function getImagesByQuery(query, page = 1) {
    return await axios.get("https://pixabay.com/api/", {
        params: {
            key: myApiKey,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page
        }
    })

}   