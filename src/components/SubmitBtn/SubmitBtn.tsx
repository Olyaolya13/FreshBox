import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface SubmitBtnProps {
  title?: string;
  width?: string;
}

export default function SubmitBtn({ title, width }: SubmitBtnProps) {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    fontFamily: 'DMSans',
    fontSize: 14,
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#FF8F52',
    '&:hover': {
      backgroundColor: '#FFAB7E'
    },
    width: width
  }));
  return (
    <ColorButton variant="contained" disableElevation>
      {title}
    </ColorButton>
  );
}
