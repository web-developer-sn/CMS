import HomeContent from "../../models/home/home.model.js";


export const getHome = async (req, res) => {
  try {
    const data = await HomeContent.findOne().select("-_id -createdAt -updatedAt -__v");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home content" });
  }
};
