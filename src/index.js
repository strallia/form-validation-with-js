import "./styles.css";
import "./submitForm";
import { validateCountry } from "./validateCountry";
import { validateEmail } from "./validateEmail";
import { validatePassword } from "./validatePass";
import { validateZip } from "./validateZip";

// display defaults on first load
validateEmail();
validateCountry();
validateZip();
validatePassword();
