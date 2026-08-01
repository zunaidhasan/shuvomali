export const profile = {
  name: "Rahul Roy Shuvo",
  firstName: "Rahul",
  lastName: "Roy Shuvo",
  shortName: "Shuvo",
  instagramHandle: "shuvomali499",
  followers: 10890,
  lives: "Mirpur, Dhaka, Bangladesh",
  from: "Pirojpur, Bangladesh",
  born: "December 1, 1999",
  relationship: "Single",
  gender: "Male",
  languages: ["English", "Bengali & regional dialects"],
  communities: ["Soft Skills Club", "NUTE"],
  facebook: "https://www.facebook.com/rahulroyshuvo1111",
  instagram: "https://www.instagram.com/shuvomali499",
  bio: "Dhaka-based, Pirojpur at heart. Chasing good light, better outfits, and the next great story to tell.",
};

export const education = [
  {
    id: "01",
    school: "Green University of Bangladesh",
    level: "University",
    place: "Dhaka",
    note: "Pursuing higher studies while building a life full of color.",
  },
  {
    id: "02",
    school: "Jessore Polytechnic Institute",
    level: "Diploma",
    place: "Jessore",
    note: "Where discipline met curiosity — and the camera came along.",
  },
  {
    id: "03",
    school: "Pirojpur Govt. High School",
    level: "Secondary",
    place: "Pirojpur",
    note: "Where it all began. Small town, big dreams.",
  },
];

export interface GalleryShot {
  src: string;
  caption: string;
  tag: string;
  tilt: number;
}

// To use Rahul's real photos: drop them into public/images/gallery/
// named g1.jpg … g8.jpg (same outfits/vibes are mocked here as placeholders).
export const gallery: GalleryShot[] = [
  { src: "/images/gallery/1785534216086-image.png", caption: "Eid morning, back home", tag: "Traditional", tilt: -3 },
  { src: "/images/gallery/1785534216789-image.png", caption: "Suit up, show up", tag: "Formal", tilt: 2.5 },
  { src: "/images/gallery/1785534217199-image.png", caption: "Me & the fluff ball", tag: "Soft life", tilt: -2 },
  { src: "/images/gallery/1785534217846-image.png", caption: "Never give up — it's on the sleeve", tag: "Street", tilt: 3 },
  { src: "/images/gallery/1785534218513-image.png", caption: "Field day, golden hour", tag: "Travel", tilt: -2.5 },
  { src: "/images/gallery/1785534219158-image.png", caption: "Festival season fit", tag: "Traditional", tilt: 2 },
  { src: "/images/gallery/1785534219548-image.png", caption: "Rooftop in full color", tag: "Street", tilt: -3 },
  { src: "/images/gallery/1785534220900-image.png", caption: "City skies, clear mind", tag: "Casual", tilt: 2.5 },
];

export const tickerWords = [
  "Rahul Roy Shuvo",
  "Mirpur · Dhaka",
  "Pirojpur",
  "Est. 1999",
  "Fashion",
  "Lifestyle",
  "10,890 Strong",
];
