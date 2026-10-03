---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-10-03T07:50:26.199906+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "a6103916-86a6-4c95-82e7-70a3022628e7"


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
# PRJ003 — Presentation









## 003.P003- 2023 - 2024 - SensorCO2_S019_S020_S021

## Introduction

![](./img/img/image.jpg)

## 📢 OUR CO2 SENSOR IS THE RIGHT SOLUTION!

## Motivation and analysis

Our daily problem is hard to concentrate on work and think creatively. That is because our brain needs oxygen. To resolve this problem we analyzed how to do it and we came with the idea to measure the air quality in order to have enough amount of oxygen in the room. We decided that the best solution to measure the air quality was CO2 sensor which would inform us whether the air in the room is suitable for our brain.

Read more: [Knowledge contribution](./files/pdfs/STHOutcomes-02.Knowledge%20contribution%20%282023-2024-S019-S020-S021%29-300124-202817.pdf)

## Our work

Our work consists of 3 parts:

- to cooperate in the team
- to work on project
- to create the product

## Work with Lemontree:

Work with Lemontree was also part of the work on the project. During modeling, we used it to version our models, as can be seen in the pictures. No conflicts were created, and thus sadly we did not use the full potential of this tool. But also thanks to the versioning of models on the project via Gtihub, where there was no possibility to compare files at the level of entities and relationships, we perceive that this tool is really interesting. Therefore we take it away as something truly beneficial from this subject.

![img](./img/img/image%20%2812%29.png)

![img](./img/img/image%20%2813%29.png)

Read more: [Project summary](./files/pdfs/STHOutcomes-01.Project%20summary%20%282023-2024-S019-S020-S021%29-300124-202729.pdf)

## Business layer

![](./img/img/image%20%281%29.jpg)

Two possible solutions for air condition visualization:

![](./img/img/image%20%282%29.jpg)
![](./img/img/image%20%283%29.jpg)


Read more: [Business layer](./files/pdfs/STHOutcomes-03.Business%20layer%20%282023-2024-S019-S020-S021%29-300124-202824.pdf)

## System layer

System consists of a Micro:Bit with connected batteries and air quality sensor providing air quality data to the Micro:Bit, which utilizes its display and speakers to inform and notify the user about the air quality data.

![](./img/img/image%20%284%29.jpg)
![](./img/img/image%20%285%29.jpg)


The main use case of our sensor consists of observing the current CO2 concentration of the surrounding air. Other than that, the seonsor can be turned on or off.

![](./img/img/image%20%286%29.jpg)


Read more: [System Layer](./files/pdfs/STHOutcomes-04.System%20Layer%20%282023-2024-S019-S020-S021%29-300124-202828.pdf)

## Technology layer

![](./img/img/image%20%287%29.jpg)
![](./img/img/image%20%288%29.jpg)
![](./img/img/image%20%289%29.jpg)
![](./img/img/image%20%2810%29.jpg)
![](./img/img/image%20%2811%29.jpg)


**Assembling the Micro:Bit and CCS811**

1. Connect the Co2 Sensor with the Micro:Bit breakout pins as illustrated in the diagram. Make sure to solder the pins properly to the sensor.

2. Connect the Microbit to the PC with an USB cable. The Micro:Bit will turn on.

3. Open micro:bit Python Editor and paste the source code (available [here](https://systemthinking-in-it.atlassian.net/wiki/spaces/STHOutcomes/pages/46497799/05.Technical+documentation+2023-2024-S019-S020-S021#Code)) to the main.py file of your project.

4. Connect your microbit with the “Send to Micro:Bit“ button.

5. If everyting works, disconnect the USB cable and connect your batteries. At this point, you can assemble the solution in the case.

Read more: [Technical documentation](./files/pdfs/STHOutcomes-05.Technical%20documentation%20%282023-2024-S019-S020-S021%29-300124-202830.pdf)

## Future work and possible improvemnent

1. Calibration and Accuracy Improvement:
    * Sensor can be calibrated to enhance the accuracy of the CO2 measurements. This could involve comparing sensor readings with a certified reference standard and making necessary adjustments.
2. Sensor Sensitivity:
    * Experiment with the sensor's sensitivity to CO2 levels. Sensor parameters can be adjusted to ensure it can detect a wide range of concentrations accurately.
3. Power Consumption and Battery Life:
    * We can think about optimizing power consumption of the sensor, and adding a possibility to power it via USB connector. It will require design being remade and hardware parts changed, which will involve change in production price.
4. User Interface and User Experience (UI/UX):
    * Sensor can use a better display to display information in more understandable format (e.g displaying a whole number at once, change LED color based on the measured quality of air)
5. Miniaturization:
    * Since sensor prototype is quite big, we can consider making it smaller for better user expirience, but only if it will not lower quality of service it provice - accuracy and sensitivity of sensor. Also, price should be considered here, if this sensor will be used as a commercial product.


---

## CO2 sensor project worktree:

This folder contains all files connected with the project **CO2 sensor** in subject System Thinking in IT (SMVIT) WS 2023/2024.

**Files and folders:**

* *CO2sensor_project.qea* - Enterprise Architect file with all diagrams and images in EA folder hierarachy

* *CO2sensor_presentation.pdf* - final presentation exported from Confluence

* *assets* - folder where are stored all 3D models (all versions)

## Podporné súbory

- [CO2sensor_presentation](./files/CO2sensor_presentation.pdf)
- [STHOutcomes-003.P003-2023-2024-SensorCO2_S019_S020_S021-300124-202643](./files/pdfs/STHOutcomes-003.P003-2023-2024-SensorCO2_S019_S020_S021-300124-202643.pdf)
- [STHOutcomes-01.Project summary (2023-2024-S019-S020-S021)-300124-202729](./files/pdfs/STHOutcomes-01.Project%20summary%20%282023-2024-S019-S020-S021%29-300124-202729.pdf)
- [STHOutcomes-02.Knowledge contribution (2023-2024-S019-S020-S021)-300124-202817](./files/pdfs/STHOutcomes-02.Knowledge%20contribution%20%282023-2024-S019-S020-S021%29-300124-202817.pdf)
- [STHOutcomes-03.Business layer (2023-2024-S019-S020-S021)-300124-202824](./files/pdfs/STHOutcomes-03.Business%20layer%20%282023-2024-S019-S020-S021%29-300124-202824.pdf)
- [STHOutcomes-04.System Layer (2023-2024-S019-S020-S021)-300124-202828](./files/pdfs/STHOutcomes-04.System%20Layer%20%282023-2024-S019-S020-S021%29-300124-202828.pdf)
- [STHOutcomes-05.Technical documentation (2023-2024-S019-S020-S021)-300124-202830](./files/pdfs/STHOutcomes-05.Technical%20documentation%20%282023-2024-S019-S020-S021%29-300124-202830.pdf)
