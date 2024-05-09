import React from "react";

function Header() {
  return (
    <header>
      <h1 id="test">Moja Aplikacja</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Strona główna</a>
          </li>
          <li>
            <a href="/about">O nas</a>
          </li>
          <li>
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
