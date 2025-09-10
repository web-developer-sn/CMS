import mongoose from "mongoose";

const { Schema } = mongoose;

const ProgramItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkText: { type: String, required: true },
  href: { type: String, required: true },
});

const HomeSchema = new Schema({
  hero: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    ctaText: { type: String, required: true },
    ctaLink: { type: String, required: true },
  },
  about: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ctaText: { type: String, required: true },
    ctaLink: { type: String, required: true },
  },
  programs: {
    heading: { type: String, required: true },
    items: [ProgramItemSchema],
  },
  ctaBanner: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
  },
}, { timestamps: true });

const HomeContent = mongoose.models.HomeContent || mongoose.model("home", HomeSchema);

export default HomeContent;
