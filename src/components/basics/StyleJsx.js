// we can style jsx similar to that of HTML
// Internal, External and Inline

const StyleJsx = () => {
  const style = {
    background: "green",
    color: "white",
    marginBottom: "20px",
    paddingBottom: "10px",
  };
  return (
    <div>
      <h1 style={style}>THis is internal Styling</h1>
      <h1
        style={{
          color: "cyan",
          background: "black",
          paddingLeft: "20px",
        }}
      >
        This is inline styling
      </h1>
    </div>
  );
};

export default StyleJsx;
