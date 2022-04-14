import {globalStyle} from '../globalStyle/globalStyleSheet'

var mainBodyHeight = "calc(100% - " +  (globalStyle.marginTop + globalStyle.marginBottom).toString() + "px)";

const mainBodyStyle={
    display:'flex',
    height: mainBodyHeight,
    flexWrap: 'nowrap',
    alignItems: 'stretch'
}

export default mainBodyStyle