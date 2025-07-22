
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { TwitterIcon } from "../../assets/icons/TwitterIcon";
import { YouTubeIcon } from "../../assets/icons/YoutubeIcon";
import { DiscordIcon } from "../../assets/icons/DiscordIcon";
import{LogoMerch} from "../../assets/logos/LogoMerch";
const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories"],
  },
  {
    title: "Important Links",
    items: ["Organization Team", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            {/* LOGO Y REDES SOCIALES */}
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0 flex flex-col items-center">
              {/* LOGOTIPO */}
              <div className="flex justify-center items-center ">
                <LogoMerch className="w-24 h-24" /> {/* Ajusta el tamaño con estas clases */}
              </div>
              {/* REDES SOCIALES */}
              <div className="flex justify-center items-center space-x-4">
                <a className="inline-block w-10 h-10 p-2 outlined-button" href="https://www.facebook.com/profile.php?id=61573583955659" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a className="inline-block w-10 h-10 p-2 outlined-button" href="https://x.com/merch3_"  aria-label="Twitter">
                  <TwitterIcon />
                </a>
                <a  className="inline-block w-10 h-10 p-2 outlined-button"  href="https://www.instagram.com/merch3.0/" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a className="inline-block w-10 h-10 p-2 outlined-button" href="https://www.youtube.com/@fruterotv" aria-label="Youtube" >
                  <YouTubeIcon />
                </a>
                <a className="inline-block w-10 h-10 p-2 outlined-button"  href="https://www.threads.com/@merch3.0" aria-label="Discord"  >
                  <DiscordIcon />
                </a>
              </div>
            </div>

            {/* INFORMACIÓN ADICIONAL */}
            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Products
                </h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Company
                </h3>
                <ul>
                  {footerData[2].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
