import Notiflix from 'notiflix';

// Объект настроек библиотеки Notiflix.Notify
const notiflixOptions = Notiflix.Notify.init({
  width: '300px',
  position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '20px',
  opacity: 1,
  borderRadius: '20px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: '#F59256',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,

  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Manrope',
  fontSize: '16px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
  fontAwesomeIconSize: '18px',

  success: {
    background: '#FFFFFF',
    textColor: '#111111',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: '#111111',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: '#F59256',
  },

  failure: {
    background: '#F59256',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: '#F59256',
  },

  warning: {
    background: '#eebf31',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },

  info: {
    background: '#26c0d3',
    textColor: '#fff',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});

const notiflixReportOptions = Notiflix.Report.init({
  className: 'notiflix-report',
  width: '350px',
  backgroundColor: 'rgb(142, 142, 235)',
  borderRadius: '25px',
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  fontFamily: 'Quicksand',
  svgSize: '110px',
  plainText: true,
  titleFontSize: '16px',
  titleMaxLength: 34,
  messageFontSize: '24px',
  messageMaxLength: 400,
  buttonFontSize: '14px',
  buttonMaxLength: 34,
  cssAnimation: true,
  cssAnimationDuration: 360,
  cssAnimationStyle: 'fade',
  success: {
    svgColor: '#32c682',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#32c682',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  failure: {
    svgColor: '#ff5549',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#ff5549',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
  warning: {
    svgColor: '#eebf31',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#eebf31',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
    svgColor: '#26c0d3',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#26c0d3',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});

export { notiflixOptions, notiflixReportOptions };
