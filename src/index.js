import "./styles.css";
import "./submitForm";
import { validateCountry } from "./validateCountry";
import { validateEmail } from "./validateEmail";
import { validateZip } from "./validateZip";

// display defaults on first load
validateEmail();
validateCountry();
validateZip();
