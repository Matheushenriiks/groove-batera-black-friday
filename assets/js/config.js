/* ==========================================================
   config.js — ÚNICO arquivo que você precisa editar
   ========================================================== */
window.OFFER_CONFIG = {
  // Link do checkout (Hotmart, Kiwify, Eduzz, Cakto, etc.).
  // Enquanto estiver vazio, os botões apenas rolam até a oferta.
  checkoutUrl: "",

  // Fim da oferta (formato AAAA-MM-DDTHH:MM:SS-03:00, horário de Brasília).
  deadline: "2026-11-30T23:59:59-03:00",

  // Preço único da oferta (os 3 produtos juntos).
  offerPrice: 29.9,

  // Preço individual de cada produto (aparece riscado).
  products: {
    "drum-pads": { name: "Drum Pads Sample Pro", price: 27.9 },
    "drum-tracks": { name: "15 Drum Tracks Exclusivas", price: 19.9 },
    "trap-kit": { name: "Trap Sound Elite Kit", price: 27.9 },
  },

  // Prévia sonora do hero (4 pads por pack).
  // mode "oneshot": toca o som ao tocar no pad.
  // mode "preview": toca um trecho da música (parar/trocar ao tocar em outro pad).
  // Para trocar um som: troque o arquivo em assets/audio/ e ajuste "file" e "label".
  banks: [
    {
      id: "drum-pads",
      tab: "Drum Pads",
      title: "Drum Pads Sample Pro",
      mode: "oneshot",
      pads: [
        { label: "Kick 2", file: "assets/audio/drum-pads/kick-2.mp3" },
        {
          label: "Kick High Reverb",
          file: "assets/audio/drum-pads/kick-high-reverb.mp3",
        },
        {
          label: "Clap High Reverb",
          file: "assets/audio/drum-pads/clap-high-reverb.mp3",
        },
        {
          label: "Clap Morada",
          file: "assets/audio/drum-pads/clap-morada.mp3",
        },
      ],
    },
    {
      id: "trap-kit",
      tab: "Trap Kit",
      title: "Trap Sound Elite Kit",
      mode: "oneshot",
      pads: [
        { label: "Kick 2", file: "assets/audio/trap-kit/kick_2.wav" },
        { label: "Clap 1", file: "assets/audio/trap-kit/clap_1.wav" },
        { label: "Open Hat 5", file: "assets/audio/trap-kit/open_hat_5.wav" },
        { label: "Perc 5", file: "assets/audio/trap-kit/perc_5.wav" },
      ],
    },
    {
      id: "drum-tracks",
      tab: "Drum Tracks",
      title: "15 Drum Tracks Exclusivas",
      mode: "preview",
      pads: [
        {
          label: "1000 Miles",
          file: "assets/audio/drum-tracks/1000-miles.mp3",
        },
        {
          label: "Life Is a Highway",
          file: "assets/audio/drum-tracks/life-is-a-highway.mp3",
        },
        { label: "Tension", file: "assets/audio/drum-tracks/tension.mp3" },
        {
          label: "TJ Fuller – Over U",
          file: "assets/audio/drum-tracks/over-u.mp3",
        },
      ],
    },
  ],
};
