type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <div className="opacity-85">
      <h2 className="font-bold text-lg">{title}</h2>
    </div>
  );
}
