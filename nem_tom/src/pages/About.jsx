const About = () => {
  return (
    <div className="page-container">
      <h1>Rólunk / Információ</h1>
      <p>A projekt fejlesztése során az alábbi kötelező technológiákat alkalmaztuk[cite: 3, 33]:</p>
      <ul>
        <li><strong>React (Vite):</strong> A keretrendszer és az építőkörnyezet[cite: 4].</li>
        <li><strong>React Router:</strong> Az útvonalválasztásért és a navigációért felelős könyvtár[cite: 5].</li>
        <li><strong>Axios:</strong> A HTTP kérések (API lekérések) lebonyolításához[cite: 6].</li>
        <li><strong>DummyJSON API:</strong> Külső adatforrás a termékek listázásához[cite: 37].</li>
      </ul>
      <p>A fejlesztés során kiemelt figyelmet fordítottunk a rendezett mappaszerkezetre és a komponens-alapú felépítésre[cite: 59, 60].</p>
    </div>
  );
};

export default About;