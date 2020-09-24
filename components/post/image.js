import Image from "components/image";
import { isExternalLink } from "components/link";
import { useRelative } from "components/post/hook";
import { useEffect, useState } from "react";

export default function ImagePost(props) {
  const { src } = props;
  const [link, setLink] = useState(src);
  const relative = useRelative(src);
  useEffect(() => setLink(getLink(src, relative)), []);

  return <Image src={link} />;
}

function getLink(src, relative) {
  if (isExternalLink(src)) return src;
  if (isLocal(src)) return relative;

  return src;
}

function isLocal(src) {
  const c = src.split("/");

  if (c.length === 1) return true;
  if (c[0] !== "") return true;

  return false;
}
