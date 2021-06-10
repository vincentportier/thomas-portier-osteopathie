module.exports = {
  navLinks: [
    { name: "Informations", url: "/#infos" },
    { name: "L'Ostéopathie", url: "/#osteo" },
    { name: "Le praticien", url: "/#praticien" },

    { name: "Le cabinet", url: "/#cabinet" },
  ],
  srConfig: (
    delay = 300,
    viewFactor = 0.25,
    origin = "bottom",
    distance = "100px"
  ) => ({
    delay,
    distance,
    duration: 500,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 0,
    opacity: 0,
    origin,
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: 0.1,
    cleanup: false,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
  }),
}
