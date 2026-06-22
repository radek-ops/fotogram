# Fotogram – Mein persönliches Fotoalbum

Ein barrierefreies, responsives Web-Fotoalbum mit Lightbox-Dialog und Thumbnail-Galerie.

## 📸 Übersicht

Fotogram ist eine statische Webanwendung, die 20 Urlaubsbilder in einer Thumbnail-Galerie präsentiert. Per Klick auf ein Vorschaubild öffnet sich ein Lightbox-Dialog mit dem Bild in Großansicht. Innerhalb des Dialogs kann mit Pfeiltasten zwischen den Bildern navigiert werden.

## 🗂 Projektstruktur

```
fotogram/
├── index.html               # Hauptseite mit Thumbnail-Galerie
├── contact.html             # Kontaktseite
├── impressum.html           # Impressumsseite
├── README.md                # Projektdokumentation
├── .gitignore
├── fonts/                   # Webfonts (Linotte)
│   ├── License.txt
│   ├── Linotte-Bold.woff2
│   ├── Linotte-Heavy.woff2
│   ├── Linotte-Light.woff2
│   ├── Linotte-Regular.woff2
│   └── Linotte-SemiBold.woff2
├── img/                     # Bilder und Assets
│   ├── favicon.png
│   ├── favicon.svg
│   ├── Fotogram_Logo.svg
│   └── img_1.jpg … img_20.jpg  # Urlaubsfotos
├── pdf/                     # Coding Conventions & Checkliste (PDF)
├── script/                  # JavaScript-Dateien
│   ├── db.js                # Bilddatenbank
│   ├── template.js          # HTML-Template-Funktionen
│   └── script.js            # Hauptsteuerungslogik
└── style/                   # CSS-Dateien
    ├── style.css            # Hauptstylesheet
    ├── dialog.css           # Styles für den Lightbox-Dialog
    ├── contact.css          # Styles für die Kontaktseite
    └── impressum.css        # Styles für das Impressum
```

## 🚀 Verwendung

1. Repository klonen:
   ```bash
   git clone https://github.com/radek-ops/fotogram.git
   cd fotogram
   ```
2. `index.html` in einem modernen Browser öffnen (kein Webserver nötig).
3. Auf ein Thumbnail klicken, um die Großansicht zu öffnen.
4. Mit den Pfeiltasten ← → durch die Bilder navigieren.
5. Dialog schließen mit × oder Klick außerhalb des Bildes.

## 🛠 Technologien

- **HTML5** – semantisches Markup, `<dialog>`-Element für die Lightbox
- **CSS3** – Flexbox-Layout, responsive Design
- **JavaScript (Vanilla ES6+)** – DOM-Manipulation, Event-Handling, Templates
- **Webfonts** – Linotte (lokal eingebunden als WOFF2)
- **WCAG** – Barrierefreiheit durch Alt-Texte, `tabindex`, semantische Elemente

## 📚 JSDoc-Dokumentation

Alle JavaScript-Funktionen sind mit [JSDoc](https://jsdoc.app/) dokumentiert. Die Kommentare beschreiben:

- **`script/db.js`** – Die Bilddatenbank mit dem `holidayData`-Array und dem `HolidayImage`-Typ.
- **`script/script.js`** – Die Hauptlogik: Initialisierung, Thumbnail-Rendering, Dialogsteuerung und Bildnavigation.
- **`script/template.js`** – Die Template-Funktionen, die HTML-Strings für Dialog und Galerie erzeugen.

## 👤 Autor

**Radek Gnych**

- [GitHub](https://github.com/radek-ops)

## 📄 Lizenz

Dieses Projekt ist urheberrechtlich geschützt. Alle Bilder und das Fotogram-Logo sind Eigentum des Autors. Weitere Informationen siehe [Impressum](impressum.html).