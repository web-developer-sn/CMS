import mongoose from "mongoose";
const navLinkSchema = new mongoose.Schema({
  label: { type: String, required: true },
  href: { type: String, required: true }
});

const headerSchema = new mongoose.Schema(
  {
    logo: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
      name: { type: String, required: true }
    },

    navLinks: {
      type: [navLinkSchema],
      default: []
    },

    applyButton: {
      label: { type: String, required: true },
      href: { type: String, required: true }
    }
  },
  { timestamps: true }
);

 const Header = mongoose.models.Header || mongoose.model('Header', headerSchema);

export default Header
