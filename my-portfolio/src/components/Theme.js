import { ThemeProvider, createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#001A23',
      },
      secondary: {
        main: '#F18F01',
      },
      success: {
        main: '#9BC53D',
      },
      error: {
        main: '#31493C',
      },
      warning: {
        main: '#E8F1F2',
      },
      info: {
        main: '#E8F1F2',
      },
    },
  });
  
  export const ThemeProviderComponent = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  };

  
  