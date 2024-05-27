export interface IProduct {
  id: number;
  slug: string;
  title: string | React.JSX.Element;
  description?: string | React.JSX.Element;
  featureList?: string[] | React.JSX.Element[];
  images: string[];
  category:
    | "mobile-accessories"
    | "computer-accessories"
    | "auto-accessories"
    | "home-appliances"
    | "travel-electronic-accessories"
    | "electronic-beauty-products";
  tag?: "new" | "hot" | "sale";
}

export const PRODUCT_LIST: IProduct[] = [
  {
    id: 1,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 3,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w3",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-2.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "computer-accessories",
    tag: "new",
  },
  {
    id: 2,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w2",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
  },
  {
    id: 4,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w4",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 5,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w5",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 6,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w6",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 7,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w7",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 8,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w8",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },

  {
    id: 9,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w9",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },

  {
    id: 10,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w10",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 11,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w11",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 12,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w12",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 13,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w13",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 14,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w14",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 15,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w15",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 16,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w16",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 17,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w17",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 18,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w18",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 19,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w19",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "mobile-accessories",
    tag: "new",
  },
  {
    id: 20,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w20",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "electronic-beauty-products",
    tag: "new",
  },
  {
    id: 21,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w21",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "home-appliances",
  },
  {
    id: 22,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w22",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "auto-accessories",
    tag: "new",
  },
  {
    id: 23,
    slug: "trusmi-magpro-magnetic-wireless-power-bank-5000mah-20w23",
    title: (
      <>
        <span className="text-primary">Trusmi</span> MagPro Magnetic <br />{" "}
        Wireless Power Bank 5000mAh 20W
      </>
    ),
    description:
      "Trusmi Cube Pro USB-C Charger is a smaller Fast Charger and Adapter with powerful 140W Power and 3 Ports, 2 USB-C, and 1 USB-A, for Charging with Laptops, Mobile phones, iPads, and Switches.",
    featureList: [
      "140W Fast Charging for Device",
      "Upgraded GaN V Technology",
      "Compact Design",
      "3 Ports for Charging",
      "50% in 20 minutes",
    ],
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
      "/images/products/prod-1.png",
      "/images/products/prod-3.png",
    ],
    category: "travel-electronic-accessories",
    tag: "new",
  },
];
