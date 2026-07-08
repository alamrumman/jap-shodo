# Phase 2.5 — Animation & Interaction Specification

## Japanese Shodō Culture Website

## Core Animation Philosophy

The website animation system follows the principle:

> **「動きの中の静けさ」 — Serenity within movement**

Animations should feel like:

* A brush touching paper
* Ink spreading slowly
* A scroll unfolding
* Light passing through a traditional room

The website must **never feel like a motion-heavy portfolio**.

---

# Performance Rules (Mandatory)

To protect Lighthouse score:

## Allowed

✅ CSS transitions
✅ CSS keyframe animations
✅ Intersection Observer
✅ `transform`
✅ `opacity`
✅ `filter: blur()` (limited use)
✅ SVG stroke animations
✅ View Transition API (progressive enhancement)

## Avoid

❌ Lenis
❌ GSAP
❌ ScrollMagic
❌ Framer Motion
❌ Parallax libraries
❌ Continuous JS animation loops
❌ Scroll event listeners firing every frame
❌ Animating width/height/top/left

---

# Global Animation System

## 1. Page Entry Animation

Every page loads with a calm reveal.

### Initial State

```css
opacity:0;
transform:translateY(20px);
```

### Final State

```css
opacity:1;
transform:none;
```

Duration:

```
700ms
```

Easing:

```
cubic-bezier(.22,1,.36,1)
```

---

# 2. Scroll Reveal System

Used for:

* Headings
* Images
* Text blocks
* Timeline items

## Default Reveal

Initial:

```css
opacity:0;
transform:
translateY(35px);
```

Visible:

```css
opacity:1;
transform:none;
```

Duration:

```
900ms
```

Delay:

Maximum:

```
300ms
```

Never stagger more than this.

---

# 3. Reduced Motion Support

Mandatory:

```css
@media(prefers-reduced-motion:reduce){

*{
animation:none!important;
transition:none!important;
}

}
```

---

# Section-by-Section Animation Design

---

# SECTION 01 — HERO

## Goal

Create a cinematic first impression without hurting performance.

## Elements

* Background image
* Main character
* Heading
* Subtitle
* Scroll indicator

---

## Load Sequence

### 0ms

Background image appears.

No animation.

Reason:

Largest Contentful Paint protection.

---

### 300ms

Main Japanese character:

Before:

```css
opacity:0;
filter:blur(8px);
transform:scale(.96);
```

After:

```css
opacity:1;
filter:none;
transform:none;
```

Duration:

1200ms

---

### 700ms

Main heading:

Animation:

```css
translateY(30px)
opacity 0

↓

translateY(0)
opacity 1
```

Duration:

900ms

---

### 1100ms

Subtitle appears.

---

## Scroll Indicator

Small vertical line.

Animation:

NOT infinite.

Instead:

Only once:

```
height:0

↓

height:40px
```

Reason:

Infinite animations consume resources.

---

## Mobile

Disable:

* Background movement
* Blur animation

Keep:

* Text reveal only

---

# SECTION 02 — Introduction To Shodō

## Layout

Text + artwork.

---

## Text Animation

Heading:

Reveal by line.

Example:

```text
書道とは
```

appears first.

Then:

```text
心を表現する芸術
```

Implementation:

Separate spans.

Animation:

```
opacity
translateY
```

---

## Image Interaction

Initial:

```css
opacity:0;
transform:
translateX(40px);
```

Visible:

```css
opacity:1;
transform:none;
```

Duration:

1000ms

---

## Hover

Desktop only:

Image:

```css
scale(1.03)
```

Duration:

500ms

No shadow animation.

---

# SECTION 03 — Philosophy Quote

## Full Dark Section

This is the emotional centerpiece.

---

## Background

No animation.

Reason:

Large dark areas affect paint performance.

---

## Quote Reveal

Character by character.

Example:

```
一
筆
一
心
```

Each character:

Delay:

100ms

Animation:

```css
opacity
translateY
```

---

## Seal Stamp

Small red seal.

Animation:

Initial:

```
scale(0)
rotate(-20deg)
```

Final:

```
scale(1)
rotate(0)
```

Duration:

600ms

---

# SECTION 04 — History Timeline

## Timeline Line

Desktop only.

Animation:

When section enters:

Line:

```css
height:0
```

to

```css
height:100%
```

Duration:

1500ms

---

## Timeline Items

Each item:

Initial:

```
opacity:0
translateY(40px)
```

Visible:

```
opacity:1
translateY(0)
```

Delay:

100ms each.

---

## Mobile

No line drawing.

Use:

simple fade cards.

---

# SECTION 05 — Tools Of Shodō

Items:

* 筆
* 墨
* 硯
* 和紙

---

## Card Entrance

Cards appear sequentially.

Desktop:

Left → Right

Mobile:

Top → Bottom

Animation:

```css
opacity:0;
transform:
translateY(30px);
```

---

## Hover Interaction

Card:

Before:

```
translateY(0)
```

Hover:

```
translateY(-8px)
```

Image:

```
scale(1.05)
```

Duration:

300ms

---

## Important

No:

* rotating cards
* 3D transforms

Reason:

Mobile GPU cost.

---

# SECTION 06 — Four Principles

## Layout

Circular.

---

## Entrance

Center appears first.

Then surrounding concepts.

Sequence:

```
Center

↓

Top

↓

Sides

↓

Bottom
```

---

## Interaction

Hover:

Text changes:

Normal:

```
静
```

Hover:

```
Silence
```

Transition:

Opacity only.

---

# SECTION 07 — Calligraphy Styles

## Three Panels

---

## Scroll Opening Effect

Each panel:

Initial:

```
clip-path:
inset(0 0 100% 0)
```

Reveal:

```
clip-path:
inset(0)
```

Duration:

900ms

---

## Hover

Artwork:

```
scale(1.04)
```

Text:

```
translateY(-5px)
```

---

# SECTION 08 — Modern Shodō

## Split Layout

Image:

Reveal from left.

Text:

Reveal from right.

---

Animation:

Image:

```
translateX(-40px)
opacity:0
```

Text:

```
translateX(40px)
opacity:0
```

---

Mobile:

Both become vertical.

No horizontal movement.

---

# SECTION 09 — Gallery

## Important Performance Section

Images must NOT animate heavily.

---

## Image Loading

Use:

```
loading="lazy"
```

except hero.

---

## Placeholder

Blur-up:

Small image:

```
filter:blur(10px)
```

then:

```
filter:none
```

Duration:

500ms

---

## Gallery Hover

Desktop:

Only:

```
scale(1.03)
```

No:

* rotation
* movement
* overlays

---

# SECTION 10 — About Preview

## CTA Section

Text reveal.

Button:

Initial:

```
opacity:0
translateY(20px)
```

---

Hover:

Button:

Background:

Ink black

Text:

White

Transition:

300ms

---

# SECTION 11 — Contact CTA

## Dark Background

---

## Animation

Heading:

Fade upward.

Button:

Scale:

```
1 → 1.05
```

Only on hover.

---

# Navigation Animation

---

# Desktop Scroll Behavior

Initial:

Transparent.

After 80px:

Add:

```css
background:
rgba(245,241,232,.85)

backdrop-filter:
blur(10px)
```

Transition:

500ms

---

# Mobile Menu

Opening:

Initial:

```
transform:
translateX(100%)
```

Final:

```
translateX(0)
```

Duration:

400ms

---

# Footer Animation

Minimal.

Only:

Links fade in.

No scroll effects.

---

# Page Transition System

Use:

## View Transition API

For supported browsers:

Navigation:

Old page:

fade out

New page:

fade in

Duration:

300ms

Fallback:

Normal navigation.

---

# JavaScript Animation Architecture

Only one observer:

```javascript
IntersectionObserver
```

Example:

```javascript
const observer =
new IntersectionObserver(
entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active")
}
})
}
)
```

Observe:

```
.reveal
```

elements only.

---

# Lighthouse Protection Checklist

## Performance

✅ No scroll listeners
✅ No animation libraries
✅ No layout animations
✅ Images lazy loaded
✅ AVIF/WebP
✅ CSS animations only
✅ Minimal JS bundle

---

## Accessibility

✅ Reduced motion
✅ Keyboard navigation
✅ Proper contrast
✅ Semantic sections

---

## Expected Lighthouse

With proper implementation:

| Category       | Expected |
| -------------- | -------- |
| Performance    | 95–100   |
| Accessibility  | 100      |
| Best Practices | 100      |
| SEO            | 100      |

---

# Final Animation Identity

The user experience should feel like:

**Opening an ancient Japanese scroll digitally.**

The user should never think:

> "This website has animations."

They should feel:

> "The website is breathing."
