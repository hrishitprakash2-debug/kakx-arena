export const siteConfig = {
  name: "KAKX ARENA",
  tagline: "Fuel Your Play",
  description:
    "KAKX Arena — Wave City's premium sports destination in Sector-11, Ghaziabad. Box Cricket, Cricket Academy, Badminton & Pickleball. Open 24 hours, floodlit nights. Book your slot on WhatsApp.",
  address: "Sector-11, Wave City, Ghaziabad, Uttar Pradesh 201015",
  phoneDisplay: "083750 60708",
  phone: "+918375060708",
  whatsapp: "918375060708",
  instagram: "https://www.instagram.com/kakx.arena",
  website: "kakx.in",
  rating: 4.8,
  reviews: 82,
  openHours: "Open 24 Hours",
  mapsEmbed:
    "https://www.google.com/maps?q=KAKX+Arena,+Sector-11,+Wave+City,+Ghaziabad,+Uttar+Pradesh+201015&output=embed",
  mapsLink: "https://maps.google.com/?q=KAKX+Arena,+Sector-11,+Wave+City,+Ghaziabad",
};

export type Sport = {
  id: string;
  name: string;
  surface: string;
  price: number;
  unit: string;
  emoji: string;
  image: string;
  tagline: string;
  features: string[];
  accent: string; // tailwind color token
  badge?: string;
  featured?: boolean;
};

export const sports: Sport[] = [
  {
    id: "box-cricket",
    name: "Box Cricket",
    surface: "Enclosed Turf Pitch",
    price: 325,
    unit: "/hr",
    emoji: "🏏",
    image: "/images/g1.jpg",
    tagline: "Non-stop boundary hitting in a fully enclosed turf arena.",
    features: ["Enclosed netting", "Turf pitch", "Floodlights", "Ball & kit rental"],
    accent: "orange",
  },
  {
    id: "academy",
    name: "Pro Academy",
    surface: "Cricket & Badminton Coaching",
    price: 300,
    unit: "/session",
    emoji: "🎯",
    image: "/images/g3.jpg",
    tagline: "Pro coaching for cricket and badminton — bowling machine, footwork drills and match practice.",
    features: ["Bowling machine", "Cricket & badminton coaching", "All skill levels", "Match practice"],
    accent: "gold",
    badge: "PRO COACHING",
    featured: true,
  },
  {
    id: "badminton",
    name: "Badminton",
    surface: "Synthetic Court",
    price: 200,
    unit: "/hr",
    emoji: "🏸",
    image: "/images/g4.jpg",
    tagline: "International-standard synthetic courts, day or night.",
    features: ["Synthetic court", "International lighting", "Racket rental", "Open 24 hrs"],
    accent: "green",
  },
  {
    id: "pickleball",
    name: "Pickleball",
    surface: "Dedicated Court",
    price: 300,
    unit: "/hr",
    emoji: "🏓",
    image: "/images/g2.jpg",
    tagline: "The fastest-growing sport in India — easy to learn, hard to stop.",
    features: ["Dedicated court", "Paddles available", "Beginner friendly", "Night play"],
    accent: "blue",
  },
];

export const timeSlots = [
  "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM",
];

export const gallery = [
  { src: "/images/hero.jpg", alt: "KAKX Arena — floodlit turf under the night sky", tag: "Turf" },
  { src: "/images/g1.jpg", alt: "Box cricket action at KAKX Arena", tag: "Box Cricket" },
  { src: "/images/g3.jpg", alt: "Cricket academy training session", tag: "Academy" },
  { src: "/images/g2.jpg", alt: "Pickleball court at KAKX Arena", tag: "Pickleball" },
  { src: "/images/g4.jpg", alt: "Badminton courts — international standard lighting", tag: "Badminton" },
  { src: "/images/g3.jpg", alt: "Coaching with the bowling machine", tag: "Coaching" },
];

// NOTE: placeholder reviews — replace with real Google review text before launch.
export const reviews = [
  {
    name: "Rohit S.",
    text: "Best box cricket turf in Ghaziabad. The floodlights make night matches feel like a stadium. Booking on WhatsApp is super easy.",
    tag: "Box Cricket",
  },
  {
    name: "Aman K.",
    text: "The academy coaches really know their stuff. Bowling machine practice has improved my batting timing a lot in just a month.",
    tag: "Academy",
  },
  {
    name: "Priya M.",
    text: "Clean courts, good rackets available, and open 24 hours — played at 1 AM and it was fully lit and safe. Highly recommend.",
    tag: "Badminton",
  },
];

export const stats = [
  { value: 4.8, decimals: 1, suffix: "★", label: "Google Rating" },
  { value: 82, decimals: 0, suffix: "+", label: "Happy Players" },
  { value: 24, decimals: 0, suffix: "/7", label: "Always Open" },
  { value: 4, decimals: 0, suffix: "+", label: "Sports" },
];

export const marqueeItems = [
  "BOX CRICKET", "PRO ACADEMY", "BADMINTON", "PICKLEBALL",
  "OPEN 24 HOURS", "FLOODLIT NIGHTS", "PRO COACHING", "BOOK ON WHATSAPP",
];

export const whatsappNumber = siteConfig.whatsapp;

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
