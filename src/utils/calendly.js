export const openCalendlyPopup = () => {
  if (window.Calendly && process.env.REACT_APP_CALENDLY_URL) {
    window.Calendly.initPopupWidget({ url: process.env.REACT_APP_CALENDLY_URL })
  } else {
    console.error("Calendly script is not loaded.")
  }
}
