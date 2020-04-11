const ua = navigator.userAgent
const Android = !!ua.match(/Android/i)
const iOS = !!ua.match(/iPhone|iPad|iPod/i)
export const isMobile = Android || iOS
