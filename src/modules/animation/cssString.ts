export const shakeCSS = `
.kassiopeia-anim-shake {
  animation: kassiopeia-kf-shake 150ms ease-in-out infinite;
  transition: all 500ms ease-in-out;
}

@keyframes kassiopeia-kf-shake {
  from {
    transform: translateX(-10px);
  }
  to {
    transform: translateX(10px);
  }
}
`;
