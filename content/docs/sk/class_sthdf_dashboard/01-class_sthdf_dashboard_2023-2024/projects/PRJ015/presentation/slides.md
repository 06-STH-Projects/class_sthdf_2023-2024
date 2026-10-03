---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-10-03T07:50:26.246690+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "d44a27e9-0c31-44f0-b683-7614738cfcee"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "slides"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "{{DESCRIPTION}}"


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: ""

# Priorita (low/medium/high) – voliteľné
priority: ""

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: []


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2026-10-03 09:50"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2026-10-03 09:50"

# Stav dokumentu – default "backlog"
status: "backlog"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Roman Kazicka"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ""

# URL pôvodného repozitára
origin_repo_url: ""

# Commit pôvodu
origin_commit: ""

# Branch pôvodu
origin_branch: ""

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: "CAA"

# Pôvodný autor
origin_author: "Roman Kazicka"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2023-2024 -->

[🏠 Domov](../../../index.md) · [⬅️ Nahor](../)
# PRJ015 — Presentation








![Scheme](./img/smvitUvodnyObrazok.jpeg)

**Krabička na lieky**
Ako projekt sme si vybrali krabičku na lieky. Takáto krabička bude riadená arduinom. Bude mať senzor na kontrolu, či bola otvorená alebo nie. Ak nie, cez aplikáciu bude možné po sieti spustiť upozornenie. Toto upozornenie spočíva vo zvukovej signalizácii. Keď sa zapne upozornenie, krabička (bzučák ovládaný arduinom) začne vydávať zvuk. 

<a name="_p7ndkgrulc8x"></a>015.P015-2023-2024-S026\_S028
## <a name="_85o9vnvmlnb2"></a>Prehľad




| **Názov projektu** | Krabička na lieky |
| --- | --- |
| **Členovia tímu** | [Kevin Minárik](mailto:xminarikk@stuba.sk)- S026; Nina Nemčoková - S028 |
| **Bitbucket** |  |
| **Zámer** | Pomôcť ľuďom a ich rodinám, aby brali lieky pravidelne a na čas. |
| **Vízie členov** | Kevin: <br />- vytvoriť niečo s hlbším zmyslom<br />- skúsenosti s architektúrou softvéru (TOGAF, ArchiMate) |
| Nina: <br />- pomôcť rodinnému príslušníkov<br />- skúsenosť s arduinom |  |
| **Vízia tímu** | Vytvoriť riešenie automatického pripomenutia pomocou arduina. |
| **Misia** | Našou misiou je pomôcť chorým ľuďom a uľahčiť im život. |
| **Cieľová skupina** | Ľudia, ktorí zabúdajú na branie liekov. |
| **Technológie** | Arduino Nano; programovací jazyk C, Kotlin a Java; potrebný hardware |
| **Opis výrobku** | Krabička na lieky bude riadená arduinom. Bude mať senzor na kontrolu, či bola otvorená alebo nie. Ak nie, cez aplikáciu bude možné po sieti spustiť upozornenie. Toto upozornenie spočíva vo zvukovej signalizácii. Keď sa zapne upozornenie, krabička (bzučák ovládaný arduinom) začne vydávať zvuk. |
| **Výstup** | Krabička na lieky s arduinom |
| **Cesta** | W7   - plánovanie realizácie konštrukcie, objednanie súčiastok<br />W8   - preštudovanie podobných existujúcich riešení<br />W9   - Návrh schémy<br />W10 - Realizácia, vytvorenie diagramov<br />W11 - Realizácia, vytvorenie diagramov<br />W12 - Finalizácia, dokončenie dokumentácie |
| **Projektové zdroje** | <br /><br /> |
| **Dosiahnuté výsledky** | Vytvorená krabička s arduinom so spúšťačom alarmu |
| **Vylepšenia** | - Mobilná aplikácia<br />- Automatizovanie konštrukcie<br />- Prepojenie s databázou |
| **Cenové výdavky** | 25€ |




## <a name="_goeoxvsn2bs1"></a>Biznisová vrstva
Business layer je súčasťou architektonického rámca, ktorý sa zameriava na popis obchodných procesov, organizácie a stratégií. Jej účelom je poskytnúť prehľad o obchodných cieľoch a požiadavkách, čím umožňuje navrhovať informačné systémy, ktoré efektívne podporujú podnikovú stratégiu. Obchodná vrstva taktiež uľahčuje komunikáciu medzi obchodnými a IT profesionálmi, čo prispieva k lepšiemu zaradeniu technologických riešení do obchodných potrieb organizácie.

**Requirements view**

Requirements view je dôležitý v softvérovom vývoji na systematické a jasné zaznamenávanie funkčných a nefunkčných požiadaviek na systém. Pomáha vytvárať komplexný obraz o očakávaných vlastnostiach systému a jeho schopnostiach. Tento pohľad uľahčuje komunikáciu medzi členmi tímu a zainteresovanými stranami a slúži ako základ pre návrh a implementáciu softvérových riešení podľa stanovených požiadaviek.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.001.png)

**Motivation view**

Motivation view je užitočný na pochopenie a dokumentovanie motivácií a cieľov. Pomáha identifikovať a správne interpretovať potreby zainteresovaných strán a zabezpečuje, aby architektúrne riešenia boli v súlade s obchodnými cieľmi. Tento pohľad taktiež slúži ako nástroj pre lepšie riadenie komunikácie medzi zainteresovanými stranami a zabezpečuje, aby architektúra efektívne podporovala strategické rozhodnutia organizácie.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.002.png)

#
## <a name="_izefgfn3hqe9"></a><a name="_o50hs8fr4u7p"></a>
## <a name="_odb1sgdioi1c"></a>Systémová vrstva
V súvislosti s TOGAF (The Open Group Architecture Framework) sa pojem "System layer" vzťahuje na tretiu architektonickú vrstvu v rámci TOGAF Architecture Development Method (ADM). Zahŕňa vývoj a štruktúrovanie aplikácií a dát na podporu obchodných procesov a služieb, poskytujúc prepojenie medzi Technologickou a Business vrstvou. Vrstva systému pomáha zabezpečiť, aby technologická infraštruktúra efektívne podporovala Business požiadavky, uľahčujúc návrh a implementáciu systémov s cieľom dosiahnuť organizačné ciele.


**Use case diagram**

Use case (prípad použitia) je výborný nástroj v rámci softvérového vývoja na pochopenie a dokumentovanie funkčných požiadaviek systému. Pomáha analyzovať, ako konkrétni používatelia interagujú so systémom a aké scenáre využitia sú dôležité. Prípady použitia taktiež slúžia ako základ pre návrh, testovanie a validáciu systému, čím prispievajú k jeho úspešnej implementácii.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.003.png)



**Activity diagram**

Activity diagram je v softvérovom inžinierstve užitočný nástroj na modelovanie tokov práce a sekvencií činností v systéme. Pomáha vizualizovať postupnosť krokov v procesoch a identifikovať paralelné a súbežné aktivity. Activity diagramy podporujú lepšie porozumenie behu systému, čo zjednodušuje analýzu, návrh a implementáciu procesov v softvérových projektoch.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.004.png)




**Component view**

Component view je v softvérovom inžinierstve užitočný na modelovanie štruktúry a organizácie softvérových komponentov v systéme. Pomáha identifikovať jednotlivé časti systému a ich vzájomné vzťahy, čo zjednodušuje návrh, implementáciu a údržbu softvéru. Tento pohľad podporuje celkové porozumenie architektúry a usmerňuje vývojárov pri tvorbe a správe komponentov systému.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.005.png)
## <a name="_y1893mh2dvsb"></a>Technická vrstva
V rámci The Open Group Architecture Framework (TOGAF), technická dokumentácia predstavuje súčasť výstupu z procesu Enterprise Architecture (EA). TOGAF je štandardný rámec pre riadenie architektúry organizácie, ktorý poskytuje štruktúrovaný prístup k plánovaniu, navrhovaniu, implementácii a správe enterprise architektúry.

V technickej fáze TOGAF definuje technickú dokumentáciu, ktorá sa zaoberá vývojom architektúry v oblasti technológií. Táto dokumentácia zahŕňa špecifikácie infraštruktúry, hardvéru, softvéru a technologických štandardov.

**Technology Usage View**

Technology Usage View (pohľad na využitie technológií) je jedným z pohľadov, ktorý sa zameriava na popis, analýzu a vizualizáciu spôsobu, akým sú technológie využívané v rámci organizácie alebo v rámci konkrétnych systémov. Poskytuje detailný pohľad na to, ako sa technológie používajú na podporu obchodných procesov a cieľov organizácie. Pomáha identifikovať, ako rôzne technológie spolupracujú alebo sú vzájomne prepojené v rámci celkovej architektúry. Obsahuje detailné informácie o technológiách, ktoré sú používané v organizácii alebo systéme.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.006.png)


**Layer View**

Termín "Layer View" sa odvoláva na jednu z pohľadov (views) v rámci pohľadového rámca TOGAF. Tieto pohľady sú súčasťou Architektonického vývojového modelu (ADM - Architecture Development Method) a slúžia na organizovanie informácií o architektúre organizácie a poskytujú rôzne perspektívy na systémy, procesy a komponenty architektúry. Poskytuje pohľad na hierarchickú štruktúru vrstiev v architektúre organizácie alebo systému, umožňuje identifikovať vzťahy a závislosti medzi jednotlivými vrstvami. Tento pohľad tiež pomáha pri analýze a plánovaní zmien v jednotlivých vrstvách a ich dopadu na celkovú architektúru.

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.007.png)

## <a name="_bt95twwyqpic"></a>Technická dokumentácia
V tejto časti si opíšeme naše zariadenie. Následne uvedieme, ktoré súčiastky budeme používať a ukážeme schému zapojenia.

**Opis zariadenia**

Naše zariadeni je vytvárané so zameraním pozornosti na ľudí, ktorí pravidelne potrebujú brať lieky, no nedarí sa im to. Kvôli tomuto sa im môžu zhoršiť príznaky chorôb, čo môže mať kritické následky. 

Vďaka našemu zariadeniu bude možné pre rodinu ľahko a jednoducho pripomenúť chorým príbuzným, nech si včas zoberú tabletky, a taktiež ich skontrolovať, či ich zobrali.

**Súčiastky**

- Senzor zatvorenia dverí/okna MC-38A normálne zatvorený - Senzor zatvorenia dverí/okna MC38A. Balenie obsahuje 2 kusy. Jeden s káblikmi, ten sa umiestni na zárubňu a druhý protikus (magnet bez káblikov) sa umiestni na dvere alebo okno. V prípade, že sa okno priblíži sa senzor rozopne.
- Aktívny buzzer - pre alarm alebo signalizáciu. Pri napájaní buzzer “pípa” frekvenciou približne 2300 Hz.
- Box na batérie - na napájanie.
- WiFi modul ESP8266 - modul s integrovaným TCP/IP protokolom ktorý môže ponúknuť akémukoľvek mikrokontroléru prístup k WiFi sieti. Modul má v pamäti naprogramovaný firmware obsahujúci AT príkazy, pomocou ktorých je možné ESP8266 ovládať.
- Arduino Nano - je vhodný pre projekty, ktoré vyžadujú malú veľkosť dosky a zároveň zachovávajú flexibilitu a jednoduchosť vývoja charakteristickú pre platformu Arduino. Je široko využívaný v rôznych aplikáciách, vrátane robotiky, senzorických projektov, a ďalších elektronických experimentov.







**Schéma zapojenia**

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.008.png)

![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.009.png)
## <a name="_9hklykpt062q"></a>Výstupy
## <a name="_hxssshol3oyb"></a>**Prvý prototyp**
![](./img/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.010.png)

<a name="_69vyb8fmcn1l"></a>Ciele do budúcna

V rámci cieľov do budúcna by sme chceli náš projekt obohatiť o viaceré vlastnosti, či už z pohľadu softvéru alebo hardvéru. 

Prvým vylepšením by sme chceli vyriešiť konfiguráciu krabičky pomocou wifi modulu. Pre túto konfiguráciu by sme radi vyvinuli softvér s používateľským rozhraním vo forme mobilnej aplikácie. 

Pri vytvorení používateľského rozhrania by bolo možno užitočné prepojenie s databázou pre uchovávanie potrebných údajov.

Ďalším vylepšením by bola možná automatizovaná konštrukcia, ktorá krabičku p spustení otvorí a pri výbere lieku automaticky vypne alarm.

## Podporné súbory

- [KrabickaNaLieky-dokument](./files/Dokument/KrabickaNaLieky-dokument.pdf)
