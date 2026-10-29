# 🚶 MoveMe

Osobný kouč na prestávky pri práci za počítačom: časovač prestávok s krátkymi cvičeniami,
pripomienky meetingov, pitný režim a denné ciele.

**Aplikácia:** https://lucia-ship-it.github.io/MoveMe/

Všetky dáta (ciele, meetingy, nastavenia) sa ukladajú len v prehliadači na tvojom počítači.
Na GitHub sa nič neposiela.

---

## 1. Zapnutie GitHub Pages (raz)

1. Na GitHube otvor repozitár **MoveMe** → **Settings** → vľavo **Pages**.
2. *Source*: **Deploy from a branch**, *Branch*: **main** a **/ (root)** → **Save**.
3. Po 1–2 minútach beží aplikácia na adrese vyššie.

## 2. Inštalácia na pracovnom počítači (Windows, Edge)

1. V Edge otvor https://lucia-ship-it.github.io/MoveMe/
2. Vpravo hore klikni na **⋯ → Aplikácie → Inštalovať MoveMe**
   (alebo na ikonu inštalácie priamo v adresnom riadku).
3. MoveMe sa otvorí vo vlastnom okne a pribudne v ponuke Štart.
   Pravým klikom na ikonu na lište ju môžeš **pripnúť na panel úloh**.
4. Pri prvom kliknutí do aplikácie povoľ **upozornenia**.
   Skontrolovať to vieš v ⚙️ Settings → *Test alert*.

## 3. Automatické spustenie po zapnutí počítača

1. V Edge otvor adresu `edge://apps`
2. Pri MoveMe klikni na **⋯ → Podrobnosti aplikácie** (App details).
3. Zapni **Spustiť automaticky pri prihlásení do zariadenia**
   (Auto-start on device login).

> Tip: MoveMe počas dňa nezatváraj, len minimalizuj – pripomienky fungujú,
> iba keď je aplikácia spustená.

## Aktualizácie

Keď sa na GitHube zmení `MoveMe.html`, nová verzia sa načíta pri ďalšom otvorení aplikácie.
Aplikácia funguje aj bez internetu (použije poslednú uloženú verziu).

---

## Záloha: spustenie zo súboru (bez internetu a bez GitHub Pages)

Ak by firma blokovala stránky `github.io`:

1. Stiahni `MoveMe.html` a `Spustit-MoveMe.bat` do jedného priečinka
   (na GitHube **Code → Download ZIP**, alebo vo VS Code *Clone Repository*).
2. Dvojklik na `Spustit-MoveMe.bat` otvorí MoveMe vo vlastnom okne.
3. Automatické spustenie: **Win + R** → `shell:startup` → vlož tam
   **odkaz** (zástupcu) na `Spustit-MoveMe.bat`.

Ak sú súbory `.bat` zablokované, vytvor na ploche odkaz s cieľom:

```
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --app="file:///C:/Users/TVOJE_MENO/Documents/MoveMe/MoveMe.html"
```

V tomto režime nefungujú systémové upozornenia Windowsu tak spoľahlivo –
pripomienky sa ohlásia zvukom a blikaním na lište.

## Súbory

| Súbor | Na čo je |
|---|---|
| `MoveMe.html` | celá aplikácia |
| `index.html` | presmeruje hlavnú adresu na aplikáciu |
| `manifest.webmanifest`, `icon*` | názov a ikona nainštalovanej aplikácie |
| `sw.js` | beh bez internetu a upozornenia |
| `Spustit-MoveMe.bat` | spustenie zo súboru vo Windows |
| `MoveMe-simple.html` | staršia jednoduchšia verzia |
