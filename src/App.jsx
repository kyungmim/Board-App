import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import useThemeStore from "@zustand/themeStore.mjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-csspin/dist/style.css";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactCsspin } from "react-csspin";

// react-query 사용
const queryClient = new QueryClient();

function App() {
  const { isDarkMode } = useThemeStore();

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else document.documentElement.classList.remove("dark");

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<ReactCsspin />}>
          <RouterProvider router={router} />
        </Suspense>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
