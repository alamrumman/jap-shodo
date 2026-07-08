# Phase 2 — Design System + Full Page Wireframe

## Japanese Shodō Culture Website

**Design Direction:**
**「静寂の中に宿る美」**
*"Beauty residing within silence."*

The website should feel like a digital Japanese art gallery — calm, premium, immersive, and highly intentional.

No excessive effects. Every movement should resemble:

* Ink flowing
* Paper moving
* A brush stroke appearing
* A traditional scroll opening

---

# 1. Global Design System

## 1.1 Layout Philosophy

The entire website follows:

### Japanese Ma (間) Principle

Meaning:

> The beauty of empty space.

Implementation:

* Large whitespace
* Few elements per section
* Strong typography
* Slow visual rhythm

Avoid:

❌ Crowded cards
❌ Too many gradients
❌ Modern SaaS layouts
❌ Excessive glassmorphism

---

# 2. Grid System

## Desktop

```
1440px viewport

------------------------------------------------

          120px margin

     |----------------------|
     |                      |
     |     Content Area     |
     |                      |
     |----------------------|

          120px margin

------------------------------------------------
```

Container:

```
max-width: 1280px
```

---

## Tablet

```
padding:

64px
```

---

## Mobile

```
padding:

24px
```

---

# 3. Color System

## Primary Background

### Washi Paper

```
#F5F1E8
```

Usage:

* Main backgrounds
* Content sections

---

## Ink

### Sumi Black

```
#161616
```

Usage:

* Text
* Dark sections

---

## Accent

### Shū Red

```
#9B2C2C
```

Usage:

* Seal marks
* Buttons
* Highlights

---

## Gold

```
#B89B5E
```

Usage:

* Premium details

---

# 4. Typography System

## Heading Font

Style:

Japanese Mincho

Example:

```
書道文化
```

Characteristics:

* Thin strokes
* Elegant
* Traditional

---

## Body Font

Japanese Sans:

Example:

```
Noto Sans JP
```

---

# Typography Scale

## Hero

Desktop:

```
120px
```

Mobile:

```
64px
```

---

## H2

Desktop:

```
64px
```

Mobile:

```
40px
```

---

## Body

```
18px
```

---

# 5. UI Components

---

# Navigation

## Desktop

Position:

Fixed

Layout:

```
------------------------------------------------

書道文化                 文化  歴史  技法  ギャラリー


------------------------------------------------
```

Style:

* Transparent initially
* Background appears after scroll

Animation:

```
opacity
background blur
transform
```

Duration:

500ms

---

# Mobile Navigation

Initial:

```
-----------------

       書

          ☰

-----------------
```

Opened:

```
-----------------

文化

歴史

技法

ギャラリー

お問い合わせ


-----------------
```

Animation:

CSS transform:

```
translateX(100%)
→
translateX(0)
```

---

# 6. Homepage Wireframe

---

# SECTION 01 — HERO

## Purpose

First emotional impact.

## Desktop Layout

```
================================================

                HERO IMAGE

        (Japanese studio atmosphere)


                    書


              日本の文字文化


          一筆に宿る精神


                  ↓


================================================
```

---

## Visual Elements

Background:

Generated image:

* Traditional Japanese room
* Hanging scroll
* Ink atmosphere
* Soft sunlight

Foreground:

Large Japanese character:

```
書
```

---

## Animation

Load:

1. Background fade
2. Character reveal
3. Subtitle appears
4. Scroll indicator

Timing:

```
0ms background

600ms character

1000ms text
```

---

# SECTION 02 — WHAT IS SHODŌ

## Layout

```
------------------------------------------------


        書道とは


       文字を書くことではなく

       心を表現する芸術


             


                 IMAGE

------------------------------------------------
```

Desktop:

Two columns.

Left:

Text.

Right:

Calligraphy artwork.

---

Animation:

Image:

```
opacity 0
scale .96

↓

opacity 1
scale 1
```

---

# SECTION 03 — PHILOSOPHY QUOTE

## Hero Quote Section

Full width dark section.

```
================================================


              墨色背景


                 「


              一筆一心



                 」



================================================
```

Meaning:

One stroke, one heart.

---

Design:

Minimal.

No cards.

Only:

* Text
* Ink texture
* Small seal

---

# SECTION 04 — HISTORY TIMELINE

## Layout

Vertical timeline.

```
        ●

      古代

      ↓


        ●

      平安時代

      ↓


        ●

      江戸時代

      ↓


        ●

      現代

```

---

Desktop:

Timeline centered.

Mobile:

Timeline left aligned.

---

Animation:

Each era:

```
translateY(40px)

opacity 0

↓

normal
```

---

# SECTION 05 — TOOLS OF SHODŌ

## Layout

Four interactive objects.

Desktop:

```
------------------------------------------------


 筆          墨          硯          和紙


IMAGE       IMAGE       IMAGE       IMAGE


説明        説明        説明        説明


------------------------------------------------

```

---

Card Style:

No heavy borders.

Only:

bottom line.

Hover:

```
image scale(1.05)

border movement
```

---

# SECTION 06 — THE FOUR PRINCIPLES

## Concept:

The soul of Shodō.

Cards:

```
静

Silence


集中

Focus


調和

Harmony


表現

Expression

```

---

Layout:

Circular arrangement.

Desktop:

```

             静


      集中          調和


             表現


```

---

# SECTION 07 — CALLIGRAPHY STYLES

## Layout

Three large panels.

```
---------------------------------


楷書

[image]


行書

[image]


草書

[image]


---------------------------------

```

---

Animation:

Panel reveals like opening a scroll.

---

# SECTION 08 — MODERN SHODŌ

## Split Layout

```
----------------------------------


IMAGE


                 現代の書道


                 Digital era

                 New expressions


----------------------------------

```

---

Purpose:

Connect tradition with modern world.

---

# SECTION 09 — GALLERY

## Full Screen Gallery

Masonry layout.

Desktop:

```
--------------------------------


IMAGE     IMAGE     IMAGE


     IMAGE


IMAGE     IMAGE


--------------------------------
```

---

Performance:

Images:

* lazy loaded
* optimized
* blurred placeholder

---

# SECTION 10 — ABOUT PREVIEW

Layout:

```
--------------------------------


       私たちについて


       日本の文字文化を

       次世代へ伝える


              →

--------------------------------
```

---

# SECTION 11 — CONTACT CTA

Dark section.

```
================================================


              お問い合わせ


       書道文化について
       お気軽にお問い合わせください


              BUTTON


================================================
```

---

# SECTION 12 — FOOTER

```
================================================


書道文化


文化
歴史
技法


Privacy Policy

Terms


© 2026


================================================
```

---

# 7. Inner Pages Design

---

# About Page

## Hero

```
私たちについて


文化を守り、
未来へ届ける
```

Background:

Japanese architecture.

---

Sections:

1. Story
2. Mission
3. Values
4. Vision

---

# Contact Page

Design:

Traditional letter style.

```
お問い合わせ


名前

----------------

メール

----------------

内容

----------------


送信

```

---

# Privacy / Terms Pages

Style:

Editorial document.

No fancy animations.

Layout:

```
--------------------------------


Privacy Policy


第1条

文章...


第2条

文章...


--------------------------------

```

---

# 8. Animation Blueprint

## Global

### Page Load

```
opacity
translateY

duration:
800ms
```

---

## Scroll Reveal

Used:

* headings
* images
* timeline

CSS:

```
.reveal {

opacity:0;
transform:translateY(40px);

}

.active{

opacity:1;
transform:none;

}
```

Triggered:

Intersection Observer.

---

## Ink Animation

Used:

Hero + Philosophy.

Technique:

SVG path animation.

---

## Hover Animation

Duration:

300ms

Properties:

Only:

* transform
* opacity
* border

---

# 9. Image Generation Plan

Before coding, generate:

## Hero Images

Need:

1. Traditional Shodō room
2. Hanging scroll
3. Ink atmosphere
4. Brush close-up

---

## Content Images

Need:

1. Brush tools
2. Ink stone
3. Japanese paper
4. Calligraphy practice
5. Traditional rooms

---

## Gallery

Need:

1. Different calligraphy styles
2. Modern Shodō artwork
3. Museum-like presentation

---

# 10. Component Architecture

Suggested components:

```
/components

Navbar

HeroSection

CultureIntro

QuoteSection

HistoryTimeline

ToolsGrid

PhilosophySection

StylesSection

GalleryGrid

AboutPreview

ContactCTA

Footer

RevealAnimation

```

---

# 11. Final Visual Identity Summary

The website should feel like:

**A Japanese museum exhibition translated into a modern digital experience.**

Reference emotions:

* Quiet luxury
* Traditional craftsmanship
* Artistic confidence
* Cultural depth

---

## Next Phase

**Phase 3 — Section-wise AI Generation Prompts**

I will create production-ready prompts for:

1. UI generation (Claude Code / Cursor)
2. Image generation prompts
3. Background generation prompts
4. Animation implementation prompts
5. Component-by-component coding prompts

Each prompt will be optimized so the AI produces the exact design direction instead of generic Japanese websites.
