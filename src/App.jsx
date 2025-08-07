import reactLogo from "./assets/react.svg";

import "./App.css";
import { useToast } from "react-simple-notifications";

function App() {
  const toast = useToast();

  // Show a success toast
  const showSuccess = () => {
    toast.success("Operation completed successfully!", "Success");
  };

  // Show an error toast
  const showError = () => {
    toast.error("Something went wrong!", "Error");
  };

  // Show a warning toast
  const showWarning = () => {
    toast.warning("This is a warning!", "Warning");
  };

  // Show an info toast
  const showInfo = () => {
    toast.info("Here is some information.", "Info");
  };

  // Show a custom toast with options
  const showCustom = () => {
    const id = toast.addToast({
      type: "success",
      title: "Custom Toast",
      message: "This is a custom toast with options.",
      duration: 8000,
      closable: true,
    });
    // Remove this toast after 2 seconds (for demo)
    setTimeout(() => toast.removeToast(id), 2000);
  };

  // Remove all toasts
  const clearAll = () => {
    toast.removeAllToasts();
  };
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React Simple Notifications Example</h1>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
      <button onClick={showWarning}>Show Warning</button>
      <button onClick={showInfo}>Show Info</button>
      <button onClick={showCustom}>Show Custom Toast</button>
      <button onClick={clearAll}>Remove All Toasts</button>
    </>
  );
}

export default App;
