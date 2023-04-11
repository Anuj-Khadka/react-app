import React, { useContext } from "react";

const UserContext = React.createContext();
const ChannelContext = React.createContext();

function UseContextHook() {
  return (
    <div>
      UseContextHook
      <UserContext.Provider value="hehehe">
        <ChannelContext.Provider value="cecece">
          <ChildOne />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

function ChildOne() {
  return (
    <div>
      <ChildTwo />
    </div>
  );
}

function ChildTwo() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      okay, {user} - {channel}
    </div>
  );
}

export default UseContextHook;
