import React from "react";

/**
 * SocialIcons component, renders social icons
 * @returns a JSX element that holds the social icons
 */
function SocialIcons() {
  return (
    <div className="socials block mt-10">
      <a
        href="https://github.com/MichiyoYo/notflix-db"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/cristinalesterrocks/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://www.facebook.com/kittensurimi/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  );
}

export default SocialIcons;
