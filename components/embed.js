const Embed = (props) => (
  <iframe
    style={{ margin: "0 auto", display: "block" }}
    width="80%"
    height={props.height}
    src={props.src}
  />
);

Embed.defaultProps = {
  height: "700px",
};

export default Embed;
