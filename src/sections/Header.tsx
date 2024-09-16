import ScrollLink from '../components/ScrollLink';

export const Header = () => {

  return (
    <div className="flex justify-center items-center relative top-3 z-10">
      <nav className="flex gap-1 p-0.5 bg-white/10 backdrop-blur border border-white/15 rounded-full fixed mt-8">
        <ScrollLink id="home" className="nav-item">Home</ScrollLink>
        <ScrollLink id="projects" className="nav-item">Projects</ScrollLink>
        <ScrollLink id="about" className="nav-item">About</ScrollLink>
        <ScrollLink id="contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</ScrollLink>
      </nav>
    </div>
  )
};
