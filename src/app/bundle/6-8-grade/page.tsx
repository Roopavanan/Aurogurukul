import BundleDetails from "@/components/BundleDetails";

export default function Page() {
  return (
    <BundleDetails
      title="6–8 Grade"
      baseFee={12450}
      defaultAddons={["Keyboard", "Tennis"]}
    />
  );
}
