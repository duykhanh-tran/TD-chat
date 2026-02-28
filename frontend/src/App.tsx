import { BrowserRouter, Route, Routes } from "react-router";
import SignInPage from "./pages/SignInPage";
import ChatAppPage from "./pages/ChatAppPage";
import HomePage from './pages/HomePage';
import FeaturesPage from "./pages/FeaturePage";
import GuidePage from "./pages/GuidePage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "sonner";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useThemeStore } from "./stores/useThemeStore";
import { useEffect } from "react";
import { useAuthStore } from "./stores/useAuthStore";
import { useSocketStore } from "./stores/useSocketStore";

function App() {
  const { isDark, setTheme } = useThemeStore();
  const { accessToken } = useAuthStore();
  const { connectSocket, disconnectSocket } = useSocketStore();

  useEffect(() => {
    setTheme(isDark);
  }, [isDark]);

  useEffect(() => {
    if (accessToken) {
      connectSocket();
    }

    return () => disconnectSocket();
  }, [accessToken]);

  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          {/* public routes */}
          <Route
            path="/signin"
            element={<SignInPage />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
          />

          {/* protectect routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/chat"
              element={<ChatAppPage />}
            />
          </Route>
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
