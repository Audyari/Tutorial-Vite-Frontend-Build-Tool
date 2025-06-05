/**
 * Fungsi untuk mengucapkan selamat tinggal
 * @param name - Nama yang akan diucapkan selamat tinggal
 * @returns Pesan selamat tinggal
 */
export function getSayGoodbye(name: string): string {
  if (!name.trim()) {
    throw new Error('Nama tidak boleh kosong');
  }
  return `Selamat tinggal, ${name}! Sampai jumpa lagi!`;
}

// Contoh penggunaan
// console.log(getSayGoodbye('John')); // "Selamat tinggal, John! Sampai jumpa lagi!"