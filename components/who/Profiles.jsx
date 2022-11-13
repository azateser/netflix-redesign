import classNames from "classnames";

import { motion, AnimatePresence } from "framer-motion";
import { HiPencil } from "react-icons/hi";


const Profiles = ({data, showUserEditIcon}) => {
  return (
    <>
      {data.map((user) => (
        <div key={user.id} className="group flex flex-col items-center gap-5 lg:gap-8">
          <div className="relative flex cursor-pointer items-center justify-center">
            <div className="z-20 w-32 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.3)] transition-all duration-1000 group-hover:scale-110 md:w-36 lg:w-40">
              <img className="rounded-full" src={`./assets/images/default_profile/${user.profile_image}.jpg`} alt="" />
            </div>
            <div
              className={classNames({
                "absolute z-10 h-36 w-36 rounded-full bg-[#3a3635] transition-all duration-500 md:h-40 md:w-40 lg:h-44 lg:w-44": true,
                "group-hover:h-40 group-hover:w-40 group-hover:bg-primary md:group-hover:h-44 md:group-hover:w-44 lg:group-hover:h-52 lg:group-hover:w-52": !showUserEditIcon,
              })}
            ></div>
            <AnimatePresence>
              {showUserEditIcon && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="absolute z-30 flex h-full w-full items-center justify-center rounded-full bg-black/60"
                >
                  <HiPencil size={40} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="font-montserrat text-xl font-normal uppercase text-white/80 transition-all duration-500 group-hover:font-medium group-hover:text-white md:text-2xl">{user.name}</div>
        </div>
      ))}
    </>
  );
};

export default Profiles;
