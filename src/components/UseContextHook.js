import React from "react";

const UserContext = React.createContext();
const ChannelContext = React.createContext();

function UseContextHook() {
  return (
    <div>
      UseContextHook
      <UserContext.Provider value="hehehe">
        <ChannelContext.Provider value="hehehe">
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
  return (
    <div>
      hehehe {user} - {channel}
    </div>
  );
}

export default UseContextHook;
