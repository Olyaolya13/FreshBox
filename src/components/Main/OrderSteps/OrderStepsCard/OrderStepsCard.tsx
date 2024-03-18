import './OrderStepsCard.css';
import { Tooltip, Box, Typography, tooltipClasses } from '@mui/material';

interface OrderStepsCardProps {
  title?: string;
  text?: string;
  backgroundColor?: string;
  tooltip?: string;
}

export default function OrderStepsCard({
  title,
  text,
  tooltip,
  backgroundColor
}: OrderStepsCardProps) {
  return (
    <div className="steps-instruction__content">
      <Tooltip
        title={tooltip}
        placement="top"
        slotProps={{
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                {
                  marginBottom: '15px',
                  width: '170px',
                  height: '120px',
                  color: '#F7F7F7',
                  fontSize: '13px',
                  backgroundColor: backgroundColor,
                  display: 'flex',
                  alignItems: 'center'
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                {
                  marginLeft: '0px'
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                {
                  marginRight: '0px'
                }
            }
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '50px',
            cursor: 'pointer',
            borderRadius: 1,
            backgroundColor: backgroundColor
          }}
        >
          <Typography sx={{ fontSize: '16px', color: '#fff' }}>{title}</Typography>
        </Box>
      </Tooltip>
      <p className="steps-instruction__text">{text}</p>
    </div>
  );
}
