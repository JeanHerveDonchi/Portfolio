import { TEXT,COLORS } from "../config/constants";
import { useTheme } from "../context/themeContext";

const Hero = () => {
     const { darkMode } = useTheme();

return (
    <section className="text-start py-5">
        <p>
            {TEXT.greeting}
        </p>
        <h1 style={{fontSize: "3rem", fontWeight: "bold"}}>
            {TEXT.name}
        </h1>
        <h3 style={{fontSize: "1.5rem"}}>
            {TEXT.title}
        </h3>
    </section>
);
}; 

export default Hero;