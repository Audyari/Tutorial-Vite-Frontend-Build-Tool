
import "../style/CSS/style.css";

// getSayHello.js
export const getGreeting = (name) => {
  if (!name) return '';
  return `Hello ${name}`;
};

export const sayHello = (name) => {
  if (!name) {
    console.warn('Nama tidak boleh kosong');
    return;
  }
  console.info(`Hello ${name}`);
};