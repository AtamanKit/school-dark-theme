import Dropdown from "@/components/elements/Dropdown";
import Theme from "@/components/system/Theme";
import useSystemTheme from "@/utils";

export default function Home() {
  // useSystemTheme();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Theme />
      <Dropdown />
    </main>
  );
}
