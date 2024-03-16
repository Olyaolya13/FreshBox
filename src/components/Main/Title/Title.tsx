import './Title.css';

interface TitleProps {
  title?: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <section className="title">
      <h2 className="title__text">{title}</h2>
    </section>
  );
}
