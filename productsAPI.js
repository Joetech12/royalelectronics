export const products = [
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "RR-Y380",
    img: "/1.png",
    img2: "/1a.png",
    img3: "/1b.png",
    img4: "/1c.png",
    lref: "/products/category/refrigerator",
    feat1: "Royal 250-Litre Silver Chest Freezer",
    feat2: "High quality & efficient compressor",
    feat3: "Universal castor for easy moving",
    feat4: "Safety lock",
    feat5: "Outside condenser",
    featdesc: `Open up to real, freezing goodness that would keep the arctic blue with envy with Royal Chest Freezers. This 350-litre frosty box delivers epic speedy freezing thanks to its supreme quality and efficient compressor. Royal freezers are the best when it comes to total cooling and freezing. It also features an outside condenser, key & lock, and universal castor to ease its mobility.
    `,
  },
  {
    slug: "chest-freezer",
    id: "2",
    title: "Royal 350-L Chest Freezer",
    desc: "RCF-S350",
    lref: "/products/category/chest-freezer",
    img: "/2.png",
    img2: "/2a.png",
    img3: "/2b.png",
    img4: "/2c.png",
    feat1: "Royal 250-Litre Silver Chest Freezer",
    feat2: "High quality & efficient compressor",
    feat3: "Universal castor for easy moving",
    feat4: "Safety lock",
    feat5: "Outside condenser",
    featdesc: `Open up to real, freezing goodness that would keep the arctic blue with envy with Royal Chest Freezers. This 350-litre frosty box delivers epic speedy freezing thanks to its supreme quality and efficient compressor. Royal freezers are the best when it comes to total cooling and freezing. It also features an outside condenser, key & lock, and universal castor to ease its mobility.
    `,
  },
  {
    slug: "washing-machine",
    id: "3",
    title: "Royal Washing Machine",
    desc: "RWMTT75HW",
    img: "/3.png",
    img2: "/3a.png",
    img3: "/3b.png",
    img4: "/3c.png",
    feat1: "Royal 250-Litre Silver Chest Freezer",
    feat2: "High quality & efficient compressor",
    feat3: "Universal castor for easy moving",
    feat4: "Safety lock",
    feat5: "Outside condenser",
    featdesc: `Open up to real, freezing goodness that would keep the arctic blue with envy with Royal Chest Freezers. This 350-litre frosty box delivers epic speedy freezing thanks to its supreme quality and efficient compressor. Royal freezers are the best when it comes to total cooling and freezing. It also features an outside condenser, key & lock, and universal castor to ease its mobility.
    `,
    lref: "/products/washing-machine",
  },
  {
    slug: "refrigerator2",
    id: "4",
    title: "Royal Gas Cooker",
    desc: "85RFTGH - Model",
    img: "/4.png",
    lref: "/products/refrigerator2",
  },
  {
    slug: "refrigerator3",
    id: "5",
    title: "Royal Blender",
    desc: "85RFTGH - Model",
    img: "/5.png",
    lref: "/products/refrigerator3",
  },
  {
    slug: "refrigerator4",
    id: "6",
    title: "Royal Microwave",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator4",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
  {
    slug: "refrigerator",
    id: "1",
    title: "Royal Refrigerator",
    desc: "85RFTGH - Model",
    img: "/1.png",
    lref: "/products/refrigerator",
  },
];

export const fetchProjectID = (id) => {
  const fetchedProject = portfolioProject.find(
    (project) => project.slug === id
  );
  return fetchedProject;
};
