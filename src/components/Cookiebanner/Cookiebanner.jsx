import { useEffect, useState } from "react";
import style from "../Cookiebanner/Cookiebanner.module.css";
import ReactGA from 'react-ga4';

export const Cookiebanner = () => {

const [showBanner, setShowBanner] = useState(true);


useEffect(() => {
    if (!localStorage.getItem("cookiebanner")) {
        setShowBanner(true);
        ReactGA.intialize("")
    }
}, [showBanner]);


const accept = () => {
    localStorage.setItem("cookieAccept", true);
    setShowBanner(false);
  };

  // afslå og sæt en local state
  const deny = () => {
    localStorage.setItem("cookieAccept", false);
    setShowBanner(false);
  };

  return (
    <>  
    {showBanner && (
    <div className="cookiebanner">
        <div className="content">
        <p>
            This website uses cookies to enhance the user experience.{" "}
            <a
            href="/cookies"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn more
            </a>
        </p>
        <button onClick={accept}> Accept</button>
        <button onClick={deny}> Deny</button>
        </div>
    </div>
    )}
    </>
  );
};