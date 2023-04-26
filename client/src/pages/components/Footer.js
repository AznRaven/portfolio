export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="fixed-bottom bg-dark">© Copyright {currentYear} AznRaven. All rights reserved. </div>
    </>
  );
}
