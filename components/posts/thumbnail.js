export default function Thumbnail(props) {
  let { src } = props;

  function onError(ev) {
    if (ev.target.src.endsWith(".jpg"))
      ev.target.src = ev.target.src.replace(".jpg", ".webp");
    else ev.target.src = "/no-thumbnail.svg";
  }

  return <img {...props} src={src} onError={onError} />;
}
