import Timer from "./Timer";
const SectionHeader = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex gap-20 items-end">
      <div>
        <p className="flex gap-4 items-center font-semibold text-Secondary-2">
          <span className="w-5 h-10 bg-Secondary-2 rounded-[4px] inline-block "></span>
          {heading}
        </p>
        <p className="font-inter font-semibold text-36 mt-6">{subHeading}</p>
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default SectionHeader;
