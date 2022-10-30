import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [isOpenButton, setIsOpenButton] = useState(false);

    const handleOpen = () => {
        if (window.scrollY >= 150) {
            setIsOpenButton(true)
        } else {
            setIsOpenButton(false)
        }
    }

    const scrollUp = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    window.addEventListener('scroll', handleOpen)

    return (
        <AnimatePresence>
            {isOpenButton ? <motion.button onClick={scrollUp} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ type: "tween" }} className="fixed  p-3 md:p-4 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 bottom-3 right-3 md:bottom-10 md:right-10 border-[3px] rounded-lg border-slate-400 dark:border-slate-700">
                <FaArrowUp />
            </motion.button> : ""}
        </AnimatePresence>
    );
}

export default BackToTop;