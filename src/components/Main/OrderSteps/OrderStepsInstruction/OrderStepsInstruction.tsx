import './OrderStepsInstruction.css';
import SubmitBtn from '../../../SubmitBtn/SubmitBtn';

interface OrderStepsInstructionProps {
  title?: string;
  text?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export default function OrderStepsInstruction({
  title,
  text,
  backgroundColor,
  hoverBackgroundColor
}: OrderStepsInstructionProps) {
  return (
    <div className="steps-instruction__content">
      <SubmitBtn
        title={title}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
      />
      <p className="steps-instruction__text">{text}</p>
    </div>
  );
}
