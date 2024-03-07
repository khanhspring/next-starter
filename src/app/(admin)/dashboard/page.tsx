import PageTitle from '@/components/molecules/PageTitle';
import FormEditor from '@/components/organisms/FormEditor';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-3 py-5">
      <PageTitle
        title="Dashboard"
        breadcrumbItems={[
          { title: 'Home', href: '/' },
          { title: 'Dashboard', href: '/' },
        ]}
      />
      <div className="h-full bg-white rounded-lg">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          eveniet fuga consectetur ratione hic quos saepe, deleniti doloremque
          aperiam repellendus quisquam architecto sequi illum quasi, quam
          possimus corrupti? Eveniet, fugit.
        </h1>
        <FormEditor />
      </div>
    </div>
  );
}