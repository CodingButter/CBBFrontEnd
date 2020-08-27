import styled from "styled-components"

export default styled.div`
    min-height: 100%;
    min-width: 100%;
    padding: 10px;
    background: #4c302f; /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  ${props =>
        props.theme.PrimaryGradientStart} 0%, ${props =>
    props.theme.PrimaryGradientEnd} 100%); /* FF3.6-15 */,
    background: -webkit-radial-gradient(center, ellipse cover,  ${props =>
        props.theme.PrimaryGradientStart} 0%,${props =>
    props.theme.PrimaryGradientEnd} 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  ${props =>
        props.theme.PrimaryGradientStart} 0%,${props =>
    props.theme
        .PrimaryGradientEnd} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props =>
        props.theme.PrimaryGradientStart}', endColorstr='${props =>
    props.theme
        .PrimaryGradientEnd}',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        `
