export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `w-24 h-24 border-2  border-neutral-900 grid justify-center items-center cursor-pointer text-3xl  ${
    isSelected ? "text-white bg-blue-500 opacity-100 " : "text-white"
  }`;
  

  
  const handleClickBoard = () =>{   
    updateBoard(index)

  }

  return <div onClick={handleClickBoard} className={className}>{children}</div>;
};




