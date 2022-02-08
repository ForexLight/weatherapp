import {Theme} from "../context/ThemeContext";

export function changeCssRootVars(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement

    const components = ['--body-background','--components-background', '--card-background', '--card-shadow', '--text-color' ]

    components.forEach(element => {
        root.style.setProperty(`${element}-default`, `var(${element}-${theme})`)
    })

    root.style.setProperty('--body-background-default', `var(--body-background-${theme})`)
}