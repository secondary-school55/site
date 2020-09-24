export default function Thumbnail(props) {
  let { src } = props;

  return (
    <img
      {...props}
      src={src}
      onError={(ev) => (ev.target.src = "/no-thumbnail.svg")}
    />
  );
}
