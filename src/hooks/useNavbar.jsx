import { useState } from "react";


function useNavBar() {
    const [isOpen, setisOpen] = useState(false);

    const setOpen = (bool) => {
        setisOpen(bool);
    }

    return [isOpen , setOpen]
}

export default useNavBar;