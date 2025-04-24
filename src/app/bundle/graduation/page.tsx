import BundleDetails from "@/components/BundleDetails";

export default function Page() {
  return (
    <BundleDetails
      title="Graduation"
      baseFee={14600}
      defaultAddons={["Cricket", "Typewriting"]}
    />
  );
}
