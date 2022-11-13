import { motion, AnimatePresence } from "framer-motion";
import { HiPencil, HiX, HiOutlineUserAdd } from "react-icons/hi";

const Modal = ({ showAddModal, setShowProfileEditIcon, setShowAddModal, showProfileEditIcon }) => {
  return (
    <>
      <AnimatePresence>
        {showAddModal && (
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
            className="fixed top-1/3 z-50 rounded-lg bg-background py-4 px-6 text-white shadow-xl"
          >
            <div onClick={() => setShowAddModal(false)} className="flex items-end justify-end">
              <HiX className="cursor-pointer text-white/70 transition-all hover:scale-125 group-hover:text-white" size={24} />
            </div>
            <div>
              <div className="mt-4 flex w-max gap-6 rounded-full">
                <div className="relative cursor-pointer" onMouseEnter={() => setShowProfileEditIcon(true)} onMouseLeave={() => setShowProfileEditIcon(false)}>
                  <img className="w-24 rounded-lg" src="./assets/images/default_profile/p_red.jpg" alt="" />
                  <AnimatePresence>
                    {showProfileEditIcon && (
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
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 flex h-full w-full items-center justify-center rounded-md bg-black/60"
                      >
                        <HiPencil size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div>
                    <input className="rounded-lg bg-[#232323] px-2 py-2 text-white outline-none" placeholder="Name" type="text" name="" id="" />
                  </div>
                  <div className="flex w-full items-end justify-end gap-4">
                    <label htmlFor="kids" className="cursor-pointer text-white/70">
                      Kids profile
                    </label>
                    <div className="flex h-max w-max items-center justify-center rounded-md border border-gray-700 p-1">
                      <input className="h-4 w-4 cursor-pointer appearance-none rounded-sm checked:bg-gray-700" placeholder="Name" type="checkbox" name="kids" id="kids" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary py-3">
                <div>
                  <HiOutlineUserAdd size={18} />
                </div>
                <div className="select-none leading-none">Add Profile</div>
              </div>
            </div>
          </motion.div>
        )}
        {showAddModal && (
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
            className="fixed z-40 h-screen w-full bg-black/70"
            onClick={() => setShowAddModal(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
