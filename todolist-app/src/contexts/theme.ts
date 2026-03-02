import IconSun from '/images/icon-sun.svg';
import MoonIcon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: "light",
        layout: {
            backgroundColor: "bg-neutral-very-light-grayish-blue",
            textColor: "text-neutral-very-dark-grayish-blue",
        },
        todo: {
            backgroundColor: "bg-neutral-very-light-gray",
            borderColor: "border-neutral-very-light-grayish-blue",
            textColor: "text-neutral-very-dark-grayish-blue"
        },
        icon: IconSun
    },
    dark: {
        name: "dark",
        layout: {
            backgroundColor: "bg-neutral-very-dark-blue",
            textColor: "text-neutral-light-grayish-blue-dark",
        },
        todo: {
            backgroundColor: "bg-neutral-very-dark-desaturated-blue",
            borderColor: "border-neutral-very-dark-grayish-blue-dark",
            textColor: "text-neutral-light-grayish-blue-dark",
        },
        icon: MoonIcon
    }
}