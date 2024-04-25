import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Navbar />

      <ToastContainer />
    </>
  );
}
