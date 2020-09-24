import Link, { isExternalLink, isFileLink } from "components/link";
import Pdf from "components/pdf";
import { useRelative } from "components/post/hook";

export default function LinkPost(props) {
  const { href: h, children } = props;
  const localLink = useRelative(h);
  const href = isFileLink(h) && !isExternalLink(h) ? localLink : h;

  if (typeof children[0] === "string") {
    switch (true) {
      case children[0] === "pdf":
        return <Pdf src={href} />;

      case children[0].startsWith("pdf "): {
        const height = children[0].split(" ")[1];
        return <Pdf src={href} height={height} />;
      }
    }
  }

  return <Link {...props} href={href} />;
}
