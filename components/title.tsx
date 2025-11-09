interface TitleProps {
  heading: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ heading, title, subtitle, className }: TitleProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="battle-box inline-block mb-6">
        <span className="text-sm opacity-70"> /| {heading} |\ </span>
      </div>

      <h2 className="text-(--omori-black) mb-4 pixel-text">{title}</h2>

      <p className="max-w-2xl mx-auto text-lg">{subtitle}</p>
    </div>
  );
};

export default Title;
