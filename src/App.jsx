import { useTranslation } from "react-i18next";

import "./App.css";

const App = () => {
    const { t, i18n } = useTranslation("messages");

    // To know the current selected language of the browser
    console.log("Current Language :", i18n.resolvedLanguage);

    return (
        <div className="App">
            <h1>{t("hello", { ns: "messages" })}</h1>
            <button onClick={() => i18n.changeLanguage("mal")}>
                Malayalam
            </button>
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
        </div>
    );
};

export default App;
