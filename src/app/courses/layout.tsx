import { Header } from "@/components/layout/Courses_header";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}