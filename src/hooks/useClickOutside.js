import { useEffect } from "react";

function useClickOutside(ref, isOpen, onClickOutside) {
  useEffect(
    function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [isOpen, ref, onClickOutside]
  );
}

export default useClickOutside;
