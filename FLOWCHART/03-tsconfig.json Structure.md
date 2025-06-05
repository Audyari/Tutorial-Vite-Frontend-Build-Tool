# tsconfig.json Structure

```mermaid
flowchart TD
    A[tsconfig.json] --> B[Compiler Options]
    A --> C[Include/Exclude]
    
    B --> B1[Target & Module]
    B --> B2[Module Resolution]
    B --> B3[Type Checking]
    B --> B4[Paths & Base URL]
    
    B1 --> B1a[target: ES2020]
    B1 --> B1b[module: ESNext]
    B1 --> B1c[lib: ES2020, DOM, DOM.Iterable]
    
    B2 --> B2a[moduleResolution: bundler]
    B2 --> B2b[allowImportingTsExtensions: true]
    B2 --> B2c[resolveJsonModule: true]
    
    B3 --> B3a[strict: true]
    B3 --> B3b[noImplicitAny: true]
    B3 --> B3c[strictNullChecks: true]
    
    B4 --> B4a[baseUrl: .]
    B4 --> B4b[paths: @/* -> src/*]
    
    C --> C1[Include: src/**/*.ts]
    C --> C2[Exclude: node_modules]    

   
```

## Keterangan Diagram

### Compiler Options
- **Target & Module**: Konfigurasi versi JavaScript dan sistem modul
- **Module Resolution**: Pengaturan cara TypeScript menyelesaikan modul
- **Type Checking**: Pengaturan strict type checking
- **Paths & Base URL**: Konfigurasi path aliases

### Include/Exclude
- File-file yang termasuk dan dikecualikan dari kompilasi

## Cara Membaca
- Setiap kotak mewakili bagian dari konfigurasi
- Panah menunjukkan hubungan parent-child
- Warna berbeda untuk membedakan kategori utama