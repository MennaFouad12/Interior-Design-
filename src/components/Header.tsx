import { Button } from "@/components/ui/button";

const Header = () => {
  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#" },
    { name: "Support", link: "#" },
  ];

  return (
    <header className="container mx-auto px-4 md:px-0 my-5 text-white flex justify-between items-center">
      <div className="w-[177px] h-[48px]">
        <img
          src="/images/Logo.png"
          alt="logo"
          
        />
      </div>
      <div className="hidden md:flex gap-6 text-black/60 text-lg font-semibold">
        {menuItems.map((item) => (
          <a
            href={item.link}
            className="hover:text-primary transform hover:scale-105 transition"
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
      <Button
        variant="default"
        className="w-[120px] h-[45px] px-4 py-2 rounded-[4px]"
      >
        Sign Up
      </Button>
    </header>
  );
};

export default Header;
