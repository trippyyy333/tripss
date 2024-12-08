const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = 5000;

// API Endpoint to fetch data from Streamtape
app.get("/api/files", async (req, res) => {
    const apiUrl = "https://api.streamtape.com/file/listfolder?login=a40a577c51e84a08ea5e&key=DqzxxdklagTVay";
    try {
        const response = await axios.get(apiUrl);
        res.json(response.data.result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data from Streamtape" });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
