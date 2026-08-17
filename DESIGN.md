---
name: Максим Герасименко
description: Портфолио frontend developer как живая рабочая консоль.
colors:
  ink: "#12141C"
  ink-2: "#1A1C26"
  fog: "#E8EEF6"
  fog-2: "#D5DDE8"
  volt: "#D2FF3A"
  cobalt: "#2B5BFF"
  coral: "#FF5A36"
  mist: "#C5CDDB"
  ok: "#7DFFB3"
  warn: "#FFC44D"
typography:
  display:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  panel: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fog}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  badge:
    backgroundColor: "rgba(232,238,246,0.08)"
    textColor: "{colors.fog}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    typography: "{typography.label}"
---

# Design System: Рабочая консоль

## Overview

**Creative North Star: "Рабочая консоль"**

Сайт не описывает frontend-навык рядом с превью. Он сам является рабочей поверхностью: метрики, графики, фильтры, состояния. Посетитель (клиент или агентство) должен запомнить прибор, а не визитку.

Плотность средняя. Цвет идёт полями секций (Ink, Fog, Volt), не конфетти по нейтральному фону. Volt единственный interactive accent. Cobalt и Coral живут в данных.

Отвергнуто: центрированный greeting-hero, три одинаковые карточки, Inter, фиолетово-синий glow, glass как стиль, mockup ноутбука.

**Key Characteristics:**

- Split hero: тезис слева, живой instrument cluster справа
- Цветовые поля, не смена «темы»
- Панели 12px, контролы 8px, badges pill
- Motion точечный: reveal, отрисовка графика, hover

## Colors

Полная палитра из четырёх ролей плюс data-series.

### Primary
- **Volt** (#D2FF3A): кнопки, focus, точки данных, hover-акцент. Текст на Volt всегда Ink.

### Secondary
- **Cobalt** (#2B5BFF): серии графиков и одно цветовое поле (Analytics). Не используется как кнопка.

### Tertiary
- **Coral** (#FF5A36): только series/alert внутри графиков. Не chrome.

### Neutral
- **Ink** (#12141C): база страницы
- **Ink 2** (#1A1C26): панели
- **Fog** (#E8EEF6): светлое поле (Capabilities, SaaS project)
- **Mist** (#C5CDDB): вторичный текст на Ink

### Named Rules
**The Volt-Only Chrome Rule.** Interactive chrome красит только Volt. Cobalt и Coral не становятся кнопками.

**The Field Rule.** Цвет занимает секцию или ячейку целиком. Не размазывать акценты по нейтральному фону.

## Typography

**Display Font:** Unbounded  
**Body Font:** Golos Text  
**Label/Mono Font:** JetBrains Mono

Широкий display для тезиса, UI-гротеск для чтения на русском, моно для метрик и путей.

### Hierarchy
- **Display** (500, clamp 40-56px, 1.08, -0.03em): hero
- **Headline** (500, 40-48px): заголовки секций
- **Title** (500, 24-32px): карточки и проекты
- **Body** (400, 16-18px, max ~52ch)
- **Label** (mono 11px): метки приборов, не section eyebrows

### Named Rules
**The No-Kicker Rule.** Над заголовком секции нет uppercase-лейбла. Заголовок несёт смысл сам.

## Layout

Контейнер `max-w-[1400px]`, горизонтальный padding 16/24. Секции чередуют семьи лейаута: split hero, fog bento, graph, четыре разных project surfaces, volt contact. Breakpoints 640 / 768 / 1024 / 1280. Hero `min-h-[100dvh]`. На mobile кластер уходит под CTA, CTA остаются в первом экране.

## Elevation & Depth

Гибрид: панели на Ink отделяются тоном (ink-2) и 1px divider `white/6`. Тень только у плавающего hero-кластера.

### Shadow Vocabulary
- **Instrument lift** (`0 18px 50px rgba(8,10,18,0.55)`): только hero cluster

### Named Rules
**One Elevation Device.** Панель: либо бордер/тон, либо тень. Не оба.

## Shapes

Панели 12px, контролы 8px, фильтры и badges 999px. Это документированная смесь, не случайный mix.

## Components

### Buttons
- **Shape:** 8px
- **Primary:** Volt фон, Ink текст, padding 12x20
- **Hover:** `-translate-y-1px`; **active:** `scale(0.98)`
- **Ghost:** 1px fog/20, hover Volt border

### Chips
- **Style:** pill, mono 11px, fog/8 на Ink; Volt когда выбран фильтр
- **State:** selected = Volt/Ink

### Cards / Containers
- **Corner:** 12px
- **Background:** ink-2 на тёмном, white на Fog, cobalt/volt как поля
- **Internal padding:** 20-32px

### Navigation
- Sticky 72px, scroll-driven уплотнение фона
- Одна строка на desktop, кнопка-меню на mobile

## Do's and Don'ts

**Do**
- Показывать UI в работе (виджеты, фильтры, графики)
- Подписывать синтетику словом «синтетика»
- Держать один label на intent: «Смотреть проекты», «Написать мне»

**Don't**
- Центрировать hero и писать «Привет, я…»
- Ставить одинаковые project cards
- Использовать Inter, purple glow, glass everywhere
- Ставить eyebrow над каждым H2
- Выдумывать клиентские метрики без пометки
