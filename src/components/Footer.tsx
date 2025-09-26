import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialMedia = [
    { icon: Facebook, link: "https://www.facebook.com" },
    { icon: Twitter, link: "https://www.twitter.com" },
    { icon: Instagram, link: "https://www.instagram.com" },
    { icon: Linkedin, link: "https://www.linkedin.com" },
  ];

  return (
    <div className="bg-[#1f1f1f]">
      <footer
        id="newsletter"
        className="container mx-auto bg-[#1f1f1f] min-h-[400px]"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 px-6">
          {/* col 1 */}
          <div className="flex flex-col gap-6 justify-between h-60 ">
            <img src="/images/Logo-2.png" alt="Logo-2" width={150} />
            <div className="max-w-[200px]">
              <p className="text-[#D1D1D1] text-sm text-pretty">
                VivaDecor your premier destination for luxury and modern
                interior design
              </p>
            </div>
            <div className="flex gap-4 text-white ">
              {socialMedia.map((social, index) => (
                <a
                  className="bg-[#313131] w-10 h-10 flex items-center justify-center rounded-sm"
                  href={social.link}
                  key={index}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
          {/* col 2 */}
          <div className="p-6 flex flex-col justify-between">
            <h2 className="text-white text-[20px] mb-6">Our Services</h2>
            <ul className="text-[#D1D1D1] text-[18px] space-y-2">
              <li className="cursor-pointer">Interior design</li>
              <li className="cursor-pointer">Outdoor design</li>
              <li className="cursor-pointer">Lightning design</li>
              <li className="cursor-pointer">Office design</li>
            </ul>
          </div>
          {/* col 3 */}
          <div className="p-6 flex flex-col">
            <h2 className="text-white text-[20px] mb-6">Our Steps</h2>
            <ul className="text-[#D1D1D1] text-[18px] space-y-2">
              <li className="cursor-pointer">Start Project</li>
              <li className="cursor-pointer">Craft</li>
              <li className="cursor-pointer">Execute</li>
            </ul>
          </div>
          {/* col 4*/}
          <div className=" p-6">
            <h2 className="text-white text-[20px] mb-6">Contact Us</h2>
            <ul className="text-[#D1D1D1] text-[18px] space-y-2">
              <li>info@vivadecor.com</li>
              <li>
                Design Avenue Cityville,
                <br />
                CA 90210 United States
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
