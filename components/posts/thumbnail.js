export default function Thumbnail(props) {
  let { src } = props;

  function onError(ev) {
    ev.target.src = "/no-thumbnail.svg";
  }

  return <img {...props} src={src} onError={onError} />;
}
