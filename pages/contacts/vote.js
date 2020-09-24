import Link from "components/link";

export default function Vote() {
  return (
    <>
      <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevXQR5mf3ipHGu63fBl47CIgYZrx3jPqoCBmoPK32U3Axnig/viewanalytics">
        Переглянути відповіді
      </Link>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSevXQR5mf3ipHGu63fBl47CIgYZrx3jPqoCBmoPK32U3Axnig/viewform?embedded=true&amp;bc=transparent"
        width="760"
        height="1500"
        frameBorder="0"
      />
    </>
  );
}
