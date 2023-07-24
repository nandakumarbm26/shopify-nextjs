import Link from "next/link";
import { useEffect, useRef } from "react";

const Slider = ({ title, children, open, setOpen, OutSideClick = false }) => {
  const ref = useRef();
  function useOutsideAlerter(ref, handleClickOutside) {
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(ref, (event) => {
    if (OutSideClick) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  });
  return (
    <div
      className={`fixed h-screen w-full max-w-[400px] transition-all duration-400 ease-in right-0 top-0 drop-shadow-xl z-10 bg-white px-2 ${
        !open && " translate-x-[900px]"
      }`}
      ref={ref}
    >
      <div className="flex w-full mb-4">
        <SliderItem
          title={title}
          style="border-b border-slate-900 h-[80px] flex items-center"
        />
        <div
          className="flex items-center mr-2 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          X
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export function SliderItem({ title, style, href = "#" }) {
  return (
    <Link href={href} className="w-full">
      <div className={style + " px-4 py-5 w-full text-xs"}>{title}</div>
    </Link>
  );
}

export default Slider;
