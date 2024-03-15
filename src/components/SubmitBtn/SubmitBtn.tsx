import Button, { ButtonProps } from '@mui/material/Button';
import { SumbitBtnData } from '../../utils/constants';
import { styled } from '@mui/material/styles';

export default function SubmitBtn() {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    fontFamily: 'DMSans',
    fontSize: 14,
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#FF8F52',
    '&:hover': {
      backgroundColor: '#FFAB7E'
    }
  }));
  return (
    <ColorButton variant="contained" disableElevation>
      {SumbitBtnData.browse}
    </ColorButton>
  );
}
