export const COLORS = {
  brownDark: "#5C3D2E",
  brownMid: "#8B5E3C",
  terracotta: "#C9956C",
  cream: "#F2E8D9",
  creamLight: "#FAF5EE",
  divider: "#D4B896",
  textDark: "#2C1A0E",
  white: "#FFFFFF",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/global-outreach", label: "Global Outreach" },
  { href: "/contact", label: "Contact" },
] as const;

export const TAGLINE = "Building Generational Self Sufficiency.";

export const MISSION =
  "We believe knowledge is the first step toward lasting change. Through education, advocacy, and meaningful connection, we empower families and communities to become self-sufficient and resilient. We do not reinvent what already works. Instead, we bring people together, strengthen existing resources, and create sustainable impact that lasts for generations.";

export const FOCUS_AREAS = [
  {
    number: "01",
    title: "Financial Literacy & Economic Self Sufficiency",
    teaser: "Equipping individuals and families with tools for financial stability.",
    description:
      "We support initiatives that equip individuals and families with the tools needed to build financial stability. From budgeting and debt management to long term wealth building, economic confidence forms the foundation of generational self sufficiency.",
  },
  {
    number: "02",
    title: "Education & Entrepreneurship",
    teaser: "Expanding access to learning, mentorship, and entrepreneurial development.",
    description:
      "Education creates opportunity. We support programs that expand access to learning, mentorship, and entrepreneurial development. By encouraging both academic growth and small business innovation, we help families build sustainable and independent futures.",
  },
  {
    number: "03",
    title: "Family Stability & Faith-Based Support",
    teaser: "Strengthening relationships and fostering long term family resilience.",
    description:
      "Strong families are the cornerstone of thriving communities. We support faith centered organizations and community leaders who strengthen relationships, encourage accountability, and foster long term family resilience.",
  },
  {
    number: "04",
    title: "Addiction Recovery & Restoration",
    teaser: "Supporting recovery pathways that create stability for generations.",
    description:
      "Recovery restores more than individuals. It restores families. We support programs that provide guidance, structure, and long term recovery pathways that create stability for generations.",
  },
  {
    number: "05",
    title: "Community Leadership Development",
    teaser: "Empowering individuals to serve, guide, and uplift others.",
    description:
      "Sustainable impact begins within the community. We invest in leadership initiatives that empower individuals to serve, guide, and uplift others in their own neighborhoods and nations.",
  },
] as const;

export const COUNTRIES = [
  {
    name: "Brazil",
    partners: "Mission Guadalupe & Men\u2019s Rehabilitation Clinic",
    description:
      "In Brazil, we support Mission Guadalupe, a local foundation dedicated to serving families and strengthening communities. Through sponsorship and ongoing support, we help advance initiatives focused on family stability, faith centered development, and long term community growth. We also support a men\u2019s rehabilitation clinic in Brazil, contributing to recovery and restoration programs that rebuild lives and strengthen families for generations.",
    link: { label: "Visit Mission Guadalupe", href: "#" },
  },
  {
    name: "India",
    partners: "Rising Star Outreach",
    description:
      "Through our support of Rising Star Outreach, we contribute to initiatives serving individuals and families living in leprosy colonies. By strengthening education access, community development, and economic empowerment efforts, these programs provide dignity, opportunity, and sustainable pathways forward.",
    link: { label: "Visit Rising Star Outreach", href: "#" },
    image: "/images/india-rising-star.jpg",
    imageAlt: "JJ Family Foundation team with children at Rising Star Outreach, India",
  },
  {
    name: "Uganda",
    partners: "Children\u2019s HopeChest",
    description:
      "Through our support of Children\u2019s HopeChest, we invest in child focused and community driven development programs. By strengthening education, leadership, and family support systems, we help create opportunities that extend far beyond a single generation.",
    link: { label: "Visit Children\u2019s HopeChest", href: "#" },
  },
] as const;
