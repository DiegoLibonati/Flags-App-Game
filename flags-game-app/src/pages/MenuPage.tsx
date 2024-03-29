import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FlagsContext } from "../context/FlagsContext";
import { BsChevronLeft } from "react-icons/bs";
import "./MenuPage.css";

export const MenuPage = (): JSX.Element => {
  const { flagsArr, setFlagsArr, setScore } = useContext(FlagsContext)!;

  useEffect(() => {
    if (flagsArr.length > 0) setFlagsArr([]);
    setScore(0);
  });

  return (
    <main>
      <Link to="/">
        <BsChevronLeft id="go-back"></BsChevronLeft>
      </Link>
      <section className="menu_container">
        <h1>Choose a MODE</h1>
        <article className="menu_container_option">
          <Link to={`/menu/normal`}>Normal MODE</Link>
          <Link to={`/menu/hard`}>Hard MODE</Link>
          <Link to={`/menu/hardcore`}>Hardcore MODE</Link>
        </article>
      </section>
    </main>
  );
};
