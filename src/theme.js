/* eslint-disable max-lines */
'use client';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#25372a',
      contrastText: '#e9ebea'
    },
    secondary: {
      main: "#ebebe0",
      contrastText: '#25372a'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: 122,
          textTransform: 'none'
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#1A271D'
          }
        },
        textPrimary: {
          'background': '#E9EBEA',
          '&:hover': {
            backgroundColor: '#A6ADA8'
          }
        },
        outlinedPrimary: {
          '&:hover': {
            color: '#4A594E',
            borderColor: '#4A594E',
            background: 'transparent'
          }
        },
        containedSecondary: {
          'background': '#E9EBEA',
          '&:hover': {
            backgroundColor: '#A2A4A2'
          }
        },
        sizeSmall: {
          padding: '8px 24px',
          lineHeight: '24px',
          fontSize: '16px',
          fontWeight: 700,
          fontFamily: 'Lato',
          letterSpacing: '-0.48px'
        },
        sizeMedium: {
          padding: '16px 24px',
          fontSize: '20px',
          lineHeight: '20px',
          fontWeight: 700,
          fontFamily: 'Lato',
          letterSpacing: '-0.6px'
        },
        sizeLarge: {
          padding: '24px 72px',
          fontWeight: 700,
          justifyContent: 'center',
          lineHeight: '16px',
          letterSpacing: '-0.6px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          gap: '10px'
        },
        input: {
          'height': '2rem',
          'padding': '12px 16px !important',
          'lineHeight': '24px',
          'fontSize': '16px',
          'borderRadius': '12px',
          'alignItems': 'center',
          '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#7B7E7C',
            fontSize: '1rem',
            fontFamily: 'Lato',
            fontWeight: 400,
            lineHeight: '1.5rem',
            letterSpacing: '-0.48px'
          }
        }
      }
    },
    // MuiTextField: {
    //   defaultProps: {
    //     variant: 'outlined',
    //     fullWidth: true
    //   },
    //   styleOverrides: {
    //     root: {
    //       'borderRadius': '12px',
    //       '&:hover fieldset': {
    //         border: ' 1px solid #A2A4A2 !important',
    //         boxShadow: '0px 0px 4px 0px #A2A275'
    //       },
    //       '&:focus-within fieldset': {
    //         border: '2px solid #A2A275 !important',
    //         boxShadow: '0px 0px 4px 0px #797939'
    //       },
    //       '& .Mui-error fieldset': {
    //         border: '1px solid #AA250D !important'
    //       }
    //     }
    //   }
    // },
    // MuiOutlinedInput: {
    //   defaultProps: {
    //     variant: 'outlined'
    //   },
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '12px',
    //       padding: '0px 0px'
    //     },
    //     input: {
    //       padding: '12px 16px'
    //     }
    //   }
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: 'Lato',
    //       marginBottom: 0,
    //       // textDecorationColor:'#25372A',
    //       textUnderlineOffset: '4px'
    //     },
    //     caption: {
    //       color: '#7B7E7C',
    //       fontSize: '14px',
    //       fontFamily: 'Lato',
    //       fontWeight: 400
    //     },
    //     body1: {
    //       color: '#818B83',
    //       fontSize: '1rem',
    //       fontWeight: 400
    //     },
    //     body2: {
    //       color: '#1C211D',
    //       fontSize: '1rem',
    //       fontWeight: 700,
    //       lineHeight: '24px',
    //       letterSpacing: '-0.48px'
    //     },
    //     h1: {
    //       fontFamily: 'Taviraj',
    //       fontSize: '95px',
    //       lineHeight: '90%'
    //     },
    //     h2: {
    //       fontSize: '76px',
    //       fontFamily: 'Taviraj',
    //       letterSpacing: '-1.52px',
    //       lineHeight: '90%',
    //       fontWeight: 300,
    //       color: '#E8E9E8',
    //       ['@media (max-width:600px)']: {
    //         fontSize: '49px',
    //         lineHeight: '100%',
    //         letterSpacing: '-1.96px'
    //       }
    //     },
    //     h3: {
    //       fontFamily: 'Taviraj',
    //       fontSize: '61px',
    //       fontWeight: 300,
    //       lineHeight: '100%',
    //       letterSpacing: '-1.22px',
    //       ['@media (max-width:600px)']: {
    //         fontSize: '31px',
    //         lineHeight: '110%',
    //         letterSpacing: '-0.93px'
    //       }
    //     },
    //     h4: {
    //       fontFamily: 'Taviraj',
    //       fontSize: '49px',
    //       fontWeight: 300,
    //       lineHeight: '100%',
    //       letterSpacing: '-1.96px',
    //       color: '#25372A',
    //       ['@media (max-width:600px)']: {
    //         fontSize: '39px'
    //       }
    //     },
    //     h5: {
    //       fontFamily: 'Taviraj',
    //       letterSpacing: '-1.17px',
    //       fontSize: '39px',
    //       ['@media (max-width:600px)']: {
    //         fontSize: '31px'
    //       }
    //     },
    //     h6: {
    //       fontSize: '20px',
    //       lineHeight: '2rem',
    //       letterSpacing: '-0.6px'
    //     }
    //   }
    // },
    // MuiLink: {
    //   defaultProps: {
    //     fontWeight: 700,
    //     lineHeight: '1.5rem'
    //   }
    // },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       color: '#A2A4A2'
    //     }
    //   }
    // },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '1rem'
    //     }
    //   }
    // },

    // MuiMenu: {
    //   styleOverrides: {
    //     root: {
    //       'boxShadow': '0px 0px 4px 0px rgba(162, 162, 117, 0.50)',
    //       'elevation': 1,
    //       '& .MuiMenu-paper': {
    //         borderRadius: '16px',
    //         marginTop: '9px'
    //       },
    //       '& .MuiMenu-list': {
    //         paddingBottom: '0',
    //         paddingTop: '0'
    //       }
    //     }
    //   }
    // },

    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       display: 'flex',
    //       height: '56px',
    //       padding: '16px',
    //       alignItems: 'center',
    //       gap: '8px',
    //       alignSelf: 'stretch'
    //     }
    //   }
    // },

    // MuiAutocomplete: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiAutocomplete-tag': {
    //         display: 'flex',
    //         flexDirection: 'row-reverse',
    //         padding: '4px 8px',
    //         gap: '8px',
    //         backgroundColor: '#EBEBE0',
    //         color: '#5E5E11',
    //         fontSize: '16px',
    //         fontWeight: 400,
    //         fontFamily: 'Lato',
    //         lineHeight: '24px',
    //         letterSpacing: '-0.48px',
    //         justifyContent: 'center'
    //       },

    //       '& .MuiChip-deleteIcon': {
    //         margin: '0 !important',
    //         color: '#5E5E11 !important'
    //       },
    //       '& .MuiOutlinedInput-root': {
    //         padding: 0
    //       },
    //       '& .MuiSvgIcon-root': {
    //         fontSize: '26px'
    //       }
    //     }
    //   }
    // },
    // MuiInputAdornment: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiSvgIcon-root': {
    //         fontSize: '2rem',
    //         marginRight: '6px'
    //       }
    //     }
    //   }
    // },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       'padding': '0px',
    //       'margin': '0px 8px',
    //       'borderRadius': '4px',
    //       '& .MuiSvgIcon-root': {
    //         width: '24px',
    //         height: '24px',
    //         color: '#797939'
    //       }
    //     }
    //   }
    // },
    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiFormControlLabel-label': {
    //         color: '#434743',
    //         lineHeight: '24px',
    //         letterSpacing: '-0.48px'
    //       }
    //     }
    //   }
    // },
    // MuiTabs: {
    //   styleOverrides: {
    //     root: {
    //       '& .Mui-selected': {
    //         color: '#1C211D',
    //         fontSize: '20px',
    //         fontWeight: 700,
    //         lineHeight: '32px',
    //         letterSpacing: '-0.6px'
    //       }
    //     },
    //     indicator: {
    //       backgroundColor: '#1C211D'
    //     }
    //   }
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       'padding': '4px 8px 12px',
    //       'color': '#1C211D',
    //       'fontSize': '20px',
    //       'fontWeight': 400,
    //       'lineHeight': '32px',
    //       'letterSpacing': '-0.6px',
    //       'textTransform': 'none',
    //       '&:hover': {
    //         '&.Mui-selected': {
    //           color: '#1C211D'
    //         }
    //       }
    //     }
    //   }
    // }
  }
});

export default theme;
