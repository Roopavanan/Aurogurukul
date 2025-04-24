import BundleDetails from "@/components/BundleDetails";

export default function Page() {
  return (
    <BundleDetails
      title="9–12 Grade"
      baseFee={13800}
      defaultAddons={["Dance"]}
    />
  );
}
