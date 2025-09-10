import Footer from"../../models/home/footer.model.js";

export const getFooter = async (req, res) => {
  try {
    const data = await Footer.findOne().select("-__v -updatedAt -createdAt -_id");
    if (!data) {
      return res.status(404).json({ message: "Footer content not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching footer content", error });
  }
};

// POST: /api/footer
export const createFooter = async (req, res) => {
  try {
    const footer = new Footer(req.body);
    await footer.save();
    res.status(201).json(footer);
  } catch (error) {
    res.status(400).json({ message: "Error creating footer content", error });
  }
};


 export const updateFooter = async (req, res) => {
  try {
    const updated = await Footer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Footer not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating footer", error });
  }
};
