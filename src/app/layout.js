import { CartProvider } from "@/context/CartContext";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}