import React, { useEffect } from 'react'

export default function BotonTemas() {
    const handleThemeChange = (e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            const radioButton = document.querySelector(`input[value="${savedTheme}"]`);
            if (radioButton) {
                radioButton.checked = true;
            }
        }
    }, []);
    return (
        <div className="h-40 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-base-100">
            <div className="flex flex-wrap justify-center gap-3">
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Sistema"
                    onChange={handleThemeChange}
                    value="default" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Light"
                    onChange={handleThemeChange}
                    value="light" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Dark"
                    onChange={handleThemeChange}
                    value="dark" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Cupcake"
                    onChange={handleThemeChange}
                    value="cupcake" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Bumblebee"
                    onChange={handleThemeChange}
                    value="bumblebee" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Emerald"
                    onChange={handleThemeChange}
                    value="emerald" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Corporate"
                    onChange={handleThemeChange}
                    value="corporate" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Synthwave"
                    onChange={handleThemeChange}
                    value="synthwave" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Retro"
                    onChange={handleThemeChange}
                    value="retro" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Cyberpunk"
                    onChange={handleThemeChange}
                    value="cyberpunk" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Valentine"
                    onChange={handleThemeChange}
                    value="valentine" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Halloween"
                    onChange={handleThemeChange}
                    value="halloween" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Garden"
                    onChange={handleThemeChange}
                    value="garden" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Forest"
                    onChange={handleThemeChange}
                    value="forest" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Aqua"
                    onChange={handleThemeChange}
                    value="aqua" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Lofi"
                    onChange={handleThemeChange}
                    value="lofi" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Pastel"
                    onChange={handleThemeChange}
                    value="pastel" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Fantasy"
                    onChange={handleThemeChange}
                    value="fantasy" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Wireframe"
                    onChange={handleThemeChange}
                    value="wireframe" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Black"
                    onChange={handleThemeChange}
                    value="black" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Luxury"
                    onChange={handleThemeChange}
                    value="luxury" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Dracula"
                    onChange={handleThemeChange}
                    value="dracula" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Cmyk"
                    onChange={handleThemeChange}
                    value="cmyk" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Autumn"
                    onChange={handleThemeChange}
                    value="autumn" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Business"
                    onChange={handleThemeChange}
                    value="business" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Acid"
                    onChange={handleThemeChange}
                    value="acid" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Lemonade"
                    onChange={handleThemeChange}
                    value="lemonade" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Night"
                    onChange={handleThemeChange}
                    value="night" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Coffee"
                    onChange={handleThemeChange}
                    value="coffee" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Dim"
                    onChange={handleThemeChange}
                    value="dim" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Nord"
                    onChange={handleThemeChange}
                    value="nord" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Sunset"
                    onChange={handleThemeChange}
                    value="sunset" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Caramellatte"
                    onChange={handleThemeChange}
                    value="caramellatte" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Abyss"
                    onChange={handleThemeChange}
                    value="abyss" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item w-25"
                    aria-label="Silk"
                    onChange={handleThemeChange}
                    value="silk" />
            </div>
        </div>
    )
}
