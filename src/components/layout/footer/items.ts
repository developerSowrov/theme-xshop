import { instagram, twitter, facebook, github } from "@/public/img";

type itemsType = {
   label: string;
   href: string;
};

type socialsType = {
   src: string;
   href: string;
   title: string;
};


// Menu items
export const company: itemsType[] = [
   { label: "About Store", href: "/" },
   { label: "All Products", href: "/" },
   { label: "Shoping Cart", href: "/" },
];

export const categories: itemsType[] = [
   { label: "Category 1", href: "/" },
   { label: "Category 2", href: "/" },
   { label: "Category 3", href: "/" },
];

export const help: itemsType[] = [
   { label: "FAQs", href: "/" },
   { label: "Support", href: "/" },
   { label: "Contact", href: "/" },
];

export const policies: itemsType[] = [
   { label: "Privacy Policy", href: "/" },
   { label: "Terms Of Service", href: "/" },
   { label: "Return Policy", href: "/" },
];

// Social
export const social: socialsType[] = [
   { title: "Twitter", src: twitter, href: "/" },
   { title: "Facebook", src: facebook, href: "/" },
   { title: "Instagram", src: instagram, href: "/" },
   { title: "Github", src: github, href: "/" },
];
