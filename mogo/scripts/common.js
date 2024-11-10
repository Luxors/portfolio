import introSlider from "./intro-slider.js";
import { quoteSliderFirst, quoteSliderSecond } from "./quote-sliders.js";
import { initAccordion } from './accordion.js';
import { initContactsModal } from "./contacts.js";

window.addEventListener('DOMContentLoaded', () => {
	'use srrict';

  introSlider,
  quoteSliderFirst,
  quoteSliderSecond,
  initAccordion(),
  initContactsModal()
});