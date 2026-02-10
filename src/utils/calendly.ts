export const openCalendlyPopup = () => {
  if (window.Calendly && import.meta.env.VITE_CALENDLY_URL) {
    window.Calendly.initPopupWidget({
      url: import.meta.env.VITE_CALENDLY_URL,
    });
  } else {
    console.error("Calendly script is not loaded.");
  }
};
