import {
 FiFacebook,
 FiInstagram,
 FiLinkedin,
 FiTwitter,
 FiYoutube,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { traxo_light } from 'assets'
import { FOOTER_LINKS } from 'constants/FOOTER-LINKS'

const Footer = () => {
 return (
  <div className="w-full flex flex-col py-4 px-8 bg-secondary">
   <div className="w-full flex items-start gap-4 flex-wrap">
    <div className="w-[300px] flex flex-col">
     <img src={traxo_light} alt="traxo logo" className="w-[150px]" />
    </div>
    {FOOTER_LINKS.map((item, index: number) => (
     <div key={index} className="flex flex-col gap-4">
      <p className="w-[300px] text-white text-2xl font-bold">{item.heading}</p>
      <div className="flex flex-col gap-2">
       {item.links.map((link, index: number) => (
        <Link
         to={link.target}
         key={index}
         className="text-white hover:text-primary font-light w-fit">
         {link.title}
        </Link>
       ))}
      </div>
     </div>
    ))}
   </div>
   <div className="w-full my-12">
    <div className="flex items-center gap-4">
     <a
      href="http://facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary text-xl">
      <FiFacebook />
     </a>
     <a
      href="http://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary text-xl">
      <FiInstagram />
     </a>
     <a
      href="http://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary text-xl">
      <FiTwitter />
     </a>
     <a
      href="http://linkedin.com/com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary text-xl">
      <FiLinkedin />
     </a>
     <a
      href="http://youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary text-xl">
      <FiYoutube />
     </a>
    </div>
   </div>
   <div className="w-full flex items-center justify-between">
    <p className="text-white">
     &copy; {new Date().getFullYear()} Traxo. All rights reserved.
    </p>
   </div>
  </div>
 )
}

export default Footer
