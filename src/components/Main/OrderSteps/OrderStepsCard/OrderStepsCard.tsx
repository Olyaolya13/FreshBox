import './OrderStepsCard.css';
import SubmitBtn from '../../../SubmitBtn/SubmitBtn';

interface OrderStepsCardProps {
  title?: string;
  text?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export default function OrderStepsCard({
  title,
  text,
  backgroundColor,
  hoverBackgroundColor
}: OrderStepsCardProps) {
  return (
    <div className="steps-instruction__content">
      <SubmitBtn
        title={title}
        width="100px"
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
      />
      <p className="steps-instruction__text">{text}</p>
    </div>
  );
}
