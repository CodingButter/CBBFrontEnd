const Gradients = {
    /* Example chat gradient */
    PrimaryGradientStart: "#AD6E6E",
    PrimaryGradientEnd: "#4c302f",

    /* Eample Message gradient */
    SecondaryGradientStart: "#F5A19E",
    SecondaryGradientEnd: "#906C56"
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

const ReusedStyles = {
    PrimaryBorderStyle: `1px solid ${Forground.PrimaryForgroundColor}`
}

export default {
    ...Gradients,
    ...ContainerBackgrounds,
    ...Forground,
    ...ReusedStyles
}
