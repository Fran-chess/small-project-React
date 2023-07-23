import React, { useState } from "react";

const TwitterCard = ({ children, userName, initialIsFollowing }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const buttonText = isFollowing ? "Following" : "Follow";
  const handleClick = (event) => {
    setIsFollowing(!isFollowing);
  };

  return (
    <nav className="">
      <article className="hover:border-y hover:border-neutral-600 hover:bg-neutral-700  transition-none transition-colors ease-in flex justify-between p-2">
        <header className="text-white flex">
          <img
            src={`https://unavatar.io/${userName}`}
            alt="Avatar del usuario"
            className="w-16 rounded-full"
          />
          <div className="ml-4 flex flex-col">
            <strong className="text-xl">{children}</strong>
            <span className="font-light">@{userName}</span>
          </div>
        </header>
        <aside className="ml-20">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className={`font-bold w-40 h-10 rounded-3xl cursor-pointer transition-colors  ${
              isFollowing ? 
              "border border-neutral-500 hover:border-red-500 hover:text-red-700 hover:bg-transparent":
              "border border-neutral-500 bg-transparent text-white hover:bg-neutral-900"
            }`}
          >
        {isFollowing && isHovered ? <span>Stop Follow</span> : <span>{buttonText}</span>}
          </button>
        </aside>
      </article>
    </nav>
  );
};

export default TwitterCard;
