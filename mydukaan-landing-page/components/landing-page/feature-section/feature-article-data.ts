import launchBackground from "@/public/assets/feature-section/launch.svg"
import scaleBackground from "@/public/assets/feature-section/scale.svg"
import manageBackground from "@/public/assets/feature-section/manage.svg"


export const featureArticleData = [
  {
    id: 1,
    title: "Launch Fast",
    features: [
      "Fully responsive e-commerce website & mobile app.",
      "Loads 6X faster than existing solutions.",
      "Upload /import products and inventory in bulk.",
      "Integrate payment gateways.",
      "Easily customizable themes.",
    ],
    color: "#ab47bc",
    backgroundImg: launchBackground,
  },
  {
    id: 2,
    title: "Scale Faster",
    features: [
      "Guaranteed 99.5% uptime for your store - We keep you open for business.",
      "60 + third party plugins.",
      "Marketing tools and discounts to drive repeat orders.",
      "Add staff accounts, assign different roles.",
      "Unlimited transactions, minimal transaction fees.",
    ],
    color: "#42a5f5",
    backgroundImg: scaleBackground,
  },
  {
    id: 3,
    title: "Manage Better",
    features: [
      " Order tracking, invoicing and order reports.",
      "Bulk edit product prices, variants, inventory.",
      "Manage global deliveries.",
      "In - depth business analytics.",
      "Automate all tax calculations.",
    ],
    color: "#66bb6a",
    backgroundImg: manageBackground,
  },
]