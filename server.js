const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const dbURI =
  "mongodb+srv://sheriffatiqa:0301Atiq@comp229-402.bqt8c73.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=COMP229-402";
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
