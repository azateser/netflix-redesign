
import { HiPlusSm } from "react-icons/hi";


const AddProfile = ({Data, setShowAddModal}) => {
  return (
    <>
      {Data < 4 && (
        <div onClick={() => setShowAddModal(true)} className="group flex cursor-pointer flex-col items-center gap-8">
          <div className="z-10 flex h-36 w-36 items-center justify-center rounded-full border-8 border-dashed border-[#3a3635] text-[#3a3635] transition-all group-hover:text-[#fe0101] md:h-40 md:w-40 lg:h-44 lg:w-44">
            <HiPlusSm className="h-20 w-20 transition-all group-hover:h-24 group-hover:w-24 md:h-24 md:w-24 md:group-hover:h-28 md:group-hover:w-28 lg:h-28 lg:w-28 lg:group-hover:h-32 lg:group-hover:w-32" />
          </div>
        </div>
      )}
      {Data < 3 && (
        <div onClick={() => setShowAddModal(true)} className="group flex cursor-pointer flex-col items-center gap-8">
          <div className="z-10 flex h-36 w-36 items-center justify-center rounded-full border-8 border-dashed border-[#3a3635] text-[#3a3635] transition-all group-hover:text-[#fe0101] md:h-40 md:w-40 lg:h-44 lg:w-44">
            <HiPlusSm className="h-20 w-20 transition-all group-hover:h-24 group-hover:w-24 md:h-24 md:w-24 md:group-hover:h-28 md:group-hover:w-28 lg:h-28 lg:w-28 lg:group-hover:h-32 lg:group-hover:w-32" />
          </div>
        </div>
      )}
      {Data < 2 && (
        <div onClick={() => setShowAddModal(true)} className="group flex cursor-pointer flex-col items-center gap-8">
          <div className="z-10 flex h-36 w-36 items-center justify-center rounded-full border-8 border-dashed border-[#3a3635] text-[#3a3635] transition-all group-hover:text-[#fe0101] md:h-40 md:w-40 lg:h-44 lg:w-44">
            <HiPlusSm className="h-20 w-20 transition-all group-hover:h-24 group-hover:w-24 md:h-24 md:w-24 md:group-hover:h-28 md:group-hover:w-28 lg:h-28 lg:w-28 lg:group-hover:h-32 lg:group-hover:w-32" />
          </div>
        </div>
      )}
    </>
  );
};

export default AddProfile;
