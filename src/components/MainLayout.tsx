import { PropsWithChildren, useContext } from "react";
import * as Style from "./MainLayout.styled";
import { ThemeContext } from "@/providers/ThemeProvider";
import Header from "./Header/Header";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const context = useContext(ThemeContext);
  return (
    <Style.App>
      <Style.Content>
        <Header switchTheme={() => context?.switchTheme()}></Header>
        {children}
      </Style.Content>
    </Style.App>
  );
};
