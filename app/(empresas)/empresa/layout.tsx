import { Metadata } from "next";
import Layout from "../../../layout/layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Zarcol ",
  description: "Zarcol  .",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "Zarcol ",
    url: "https://www.maroil.com.ve",
    description: "Zarcol  .",

    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

export default function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;
}
