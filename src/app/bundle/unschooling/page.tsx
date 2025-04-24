import BundleDetails from "@/components/BundleDetails";

export default function Page() {
  return (
    <BundleDetails
      title="Unschooling"
      baseFee={11000}
      defaultAddons={["Cooking"]}
    />
  );
}
