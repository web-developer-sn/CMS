import Header from "../../models/home/header.model.js";

export const getHeader = async (req, res) => {
  try {
    const headerData = await Header.findOne().select("-_id -__v");
    if (!headerData) {
      return res.status(404).json({ message: 'Header content not found' });
    }
    res.status(200).json(headerData);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// POST or PUT header content (Upsert)
export const saveHeader = async (req, res) => {
  try {
    const data = req.body;
    const updatedHeader = await Header.findOneAndUpdate({}, data, {
      new: true,
      upsert: true, // Create if not exists
      runValidators: true,
    });
    res.status(200).json(updatedHeader);
  } catch (error) {
    res.status(400).json({ message: 'Error saving header', error });
  }
};
