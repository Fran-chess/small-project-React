import React from "react";
import TwitterCard from "./components/TwitterCard";
import Logo from "./components/Logo";

const users = [
  {
    userName: "John",
    name: "John",
    isFollowing: false,
  },
  {
    userName: "Peter",
    name: "Peter",
    isFollowing: true,
  },
  {
    userName: "Angela",
    name: "angela",
    isFollowing: false,
  },
  {
    userName: "Fred",
    name: "Fred",
    isFollowing: true,
  },
];

function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <div className="container mx-auto  font-mont">
      <div className="mt-3">
        <Logo />
      </div>
      <section className="mt-12 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col gap-2.5 bg-neutral-800 py-8 px-6 rounded-lg">
          {users.map(( {userName, name, isFollowing}) => {
            return (
              <TwitterCard key={userName} userName={userName} isFollowing={isFollowing}>
                {name}
              </TwitterCard>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
