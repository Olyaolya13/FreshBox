import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface SubmitBtnProps {
  title?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  disableRipple?: boolean;
}

export default function SubmitBtn({
  title,
  width,
  backgroundColor,
  hoverBackgroundColor,
  height,
  disableRipple
}: SubmitBtnProps) {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    fontFamily: 'DMSans',
    fontSize: 14,
    textTransform: 'none',
    color: '#fff',
    backgroundColor: backgroundColor ? backgroundColor : '#FF8F52',
    '&:hover': {
      backgroundColor: hoverBackgroundColor ? hoverBackgroundColor : '#FFAB7E'
    },
    width: width,
    height: height ? height : '40px',
    transition: 'background-color 0.3s ease'
  }));
  return (
    <ColorButton variant="contained" disableElevation disableRipple={disableRipple}>
      {title}
    </ColorButton>
  );
}
