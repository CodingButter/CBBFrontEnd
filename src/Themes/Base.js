const Gradients = {
    /* Example chat gradient */
    PrimaryGradientStart: "#AD6E6E",
    PrimaryGradientEnd: "#4c302f",

    /* Eample Message gradient */
    SecondaryGradientStart: "#906C56",
    SecondaryGradientEnd: "#F5A19E"
}

const ContainerBackgrounds = {
    /* Example.. SubheaderWithFilter background */
    PrimaryContainerBackground: "#1F1F21",

    /* Example.. MessageBody background */
    SecondaryContainerBackground: "#342828",

    /* Eaxmple.. ProgressBar Bar background*/
    TertiaryContainerBackground: "#18181A"
}

const Forground = {
    /* Main Font and border color */
    PrimaryForgroundColor: "#EFE3B2",
    SecondaryForgroundColor: ContainerBackgrounds.SecondaryContainerBackground
}

export default { ...Gradients, ...ContainerBackgrounds, ...Forground }
