import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="w-44"/>
      <h1 className="font-title text-amber-800 uppercase text-4xl sm:text-xl hover:bg-white">ReactArt</h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
