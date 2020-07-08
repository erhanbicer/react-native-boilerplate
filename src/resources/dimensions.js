import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const tiny = 4;
const small = tiny * 2; // 8
const normal = tiny * 3; // 12
const medium = tiny * 4; //16
const large = tiny * 6; //24
const extraLarge = tiny * 8; //32

export default {
   width,
   height,
   tiny,
   small,
   normal,
   medium,
   large,
   extraLarge
};
