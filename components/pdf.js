const Pdf = (props) => (
  <object
    style={{ margin: "20px auto", display: "block" }}
    width="80%"
    height={props.height}
    type="application/pdf"
    data={`${props.src}#view=FitW`}
  />
);

Pdf.defaultProps = {
  height: "700px",
};

export default Pdf;
