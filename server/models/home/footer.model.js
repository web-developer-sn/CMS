import mongoose  from "mongoose";

const footerSchema = new mongoose.Schema({
  collegeInfo: {
    logo: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  quickLinks: [
    {
      label: { type: String, required: true },
      href: { type: String, required: true },
    },
  ],
  contact: {
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  socialLinks: [
    {
      platform: { type: String, required: true }, // e.g., "Facebook"
      iconClass: { type: String, required: true }, // e.g., "fab fa-facebook-f"
      href: { type: String, required: true },
    },
  ],
}, {
  timestamps: true,
});

 const Footer = mongoose.model("Footer", footerSchema);
export default Footer