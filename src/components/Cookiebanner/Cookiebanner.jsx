import { useEffect, useState } from "react";
import style from "../Cookiebanner/Cookiebanner.module.scss";
import ReactGA from 'react-ga4';

export const Cookiebanner = () => {

const [showBanner, setShowBanner] = useState(true);


useEffect(() => {
    if (!localStorage.getItem("cookiebanner")) {
        setShowBanner(true);
        ReactGA.intialize("G-J3JWPMZ548")
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
    <div class={style.cookiebanner} id="cookiebanner">
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
        <button onClick={() => accept()}>Accepter</button>
        <button onClick={() => deny()}>Afslå</button>
        </div>
    </div>
    )}
    </>
  );
};