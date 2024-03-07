import Breadcrumb from '../atoms/Breadcrumb';
import Title from '../atoms/Title';

type Props = {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
};

export default function PageTitle({ title, breadcrumbItems }: Props) {
  return (
    <div className="flex flex-col">
      <Title title={title} />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
