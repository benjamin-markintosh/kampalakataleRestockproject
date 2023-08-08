import Card from '../components/cards/Card'

function Team() {
  return (
    <div>
      <h2 className="text-center text-kkwhite font-bold text-2xl">Our Team</h2>
      <div className="flex gap-10 justify-center mt-12 w-1/7 ">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
export default Team;
