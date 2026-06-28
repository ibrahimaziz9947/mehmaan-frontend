import VendorLayout from "@/layouts/VendorLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Host Dashboard | Mehmaan",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VendorLayout>{children}</VendorLayout>;
}
