import Pdf from "components/pdf";

export default function AdditionalService() {
  return (
    <>
      <p>Платних освітніх послуг заклад не надає.</p>
      <Pdf src="/public-info/circles.pdf" />
    </>
  );
}
