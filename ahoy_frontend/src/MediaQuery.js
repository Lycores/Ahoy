import {useMediaQuery} from 'react-responsive'
import globalStyle from './stylesheets/globalStyle/globalStyleSheet'
export const DesktopOrTablet = ({ children }) => {
    const isDesktopOrTablet = useMediaQuery({ minWidth:  globalStyle.desktopOrTabletMin})
    return isDesktopOrTablet ? children : null
}
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth:  globalStyle.mobileMax})
    return isMobile ? children : null
}