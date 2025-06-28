import { createTheme } from '@mui/material/styles';
import { customColors } from './colors';

const theme = createTheme({
  palette: {
    // You can override default primary/secondary if you want
    custom: {
      colorp: customColors.brand.colorp,
      colorbody: customColors.brand.colorbody,
    },
  }
});

export default theme;
