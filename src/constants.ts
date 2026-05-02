export const STUDIO_INFO = {
  name: "Ernest & Bros Studio",
  phone: "+237 6 74 17 12 41",
  email: "ernestbros14@gmail.com",
  location: "Biyem-Assi, Yaounde, Cameroon",
  website: "https://eb-studio.vercel.app",
  socials: {
    instagram: "",
    facebook: "",
  },
  whatsappMessage:
    "Hello, I am interested in your photography and video services. I would like more information about your availability and pricing.",
};

export const WHATSAPP_URL = `https://wa.me/${STUDIO_INFO.phone.replace(/\s+/g, "")}?text=${encodeURIComponent(STUDIO_INFO.whatsappMessage)}`;

export const SERVICES = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    description:
      "We capture every moment of your wedding day, from preparation to celebration. Our focus is on emotions, details, and unforgettable memories.",
    longDescription:
      "High-quality photo coverage for weddings, capturing every important moment from start to finish.",
    includes: ["Full-day coverage", "Couple shots", "Ceremony highlights", "Group photos"],
    image: "/images/weddings/IMG_4858.jpg",
  },
  {
    id: "event-video",
    title: "Event Video Coverage",
    description:
      "Professional video recording for ceremonies, events, and celebrations. We create clean and engaging videos that tell your story.",
    longDescription: "Professional video recording for ceremonies, events, and celebrations.",
    includes: ["Full event coverage", "Highlight videos", "Clean editing"],
    image: "/images/birthday/IMG_4848.jpg",
  },
  {
    id: "photo-shooting",
    title: "Photo Shooting",
    description:
      "Studio or outdoor photo sessions for individuals, couples, or special occasions.",
    longDescription: "Studio or outdoor photoshoots for individuals, couples, or groups.",
    includes: ["Portraits", "Couple shoots", "Lifestyle photos"],
    image: "/images/professional/IMG_4861.jpg",
  },
  {
    id: "photo-albums",
    title: "Photo Albums",
    description:
      "We create high-quality albums designed to preserve your best memories in a professional and elegant format.",
    longDescription:
      "Clean, well-designed albums that preserve your memories in a timeless format.",
    includes: ["Premium leather binding", "High-quality print", "Custom layout design"],
    image: "/images/children/IMG_4851.jpg",
  },
];

export const GALLERY_CATEGORIES = ["All", "Wedding", "Birthday", "Professional", "Children"];

export const GALLERY_IMAGES = [
  { id: 1, category: "Wedding", url: "/images/weddings/IMG_4853.jpg", title: "Wedding Story" },
  { id: 2, category: "Wedding", url: "/images/weddings/IMG_4854.jpg", title: "Ceremony Moments" },
  { id: 3, category: "Wedding", url: "/images/weddings/IMG_4855.jpg", title: "Couple Portrait" },
  { id: 4, category: "Wedding", url: "/images/weddings/IMG_4856.jpg", title: "Reception Highlights" },
  { id: 5, category: "Wedding", url: "/images/weddings/IMG_4857.jpg", title: "Elegant Details" },
  { id: 6, category: "Birthday", url: "/images/birthday/IMG_4846.jpg", title: "Birthday Celebration" },
  { id: 7, category: "Birthday", url: "/images/birthday/IMG_4847.jpg", title: "Party Moments" },
  { id: 8, category: "Birthday", url: "/images/birthday/IMG_4849.jpg", title: "Family Joy" },
  { id: 9, category: "Professional", url: "/images/professional/IMG_4862.jpg", title: "Professional Session" },
  { id: 10, category: "Professional", url: "/images/professional/IMG_4863.jpg", title: "Studio Lighting" },
  { id: 11, category: "Professional", url: "/images/professional/IMG_4864.jpg", title: "Creative Portrait" },
  { id: 12, category: "Children", url: "/images/children/IMG_4852.jpg", title: "Childhood Memories" },
];
