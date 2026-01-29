# 💳 Pricing Page – Frontend Practice Project

This project was a **pure design-focused frontend exercise** that I picked up out of personal interest.
After a long gap without building anything, I wanted to get my hands dirty again by creating a **modern pricing page UI**, focusing mainly on layout, visuals, and practical CSS problem-solving.

The goal was not complexity or heavy JavaScript — it was about **building something clean, usable, and realistic**, like what you’d see on an actual product website.

## ![Page Working demo](working_demo.gif)

## 🧠 What I Learned & Mistakes I Made

### 1. Background Image Not Loading (Folder Structure Issue)

**Mistake:**
I initially placed my background image inside a `resources` folder that was **outside the `public` folder**.

Because of that, the image URL worked in my editor but was **not being served by the browser**, so the background didn’t show up.

**What I learned:**

- Only files inside the `public` folder are directly accessible by the browser
- Background images used in CSS must point to files that are publicly served

**Fix:**

- Moved the `resources` folder inside `public`
- Updated the `background-image: url(...)` path accordingly

This reinforced the importance of **project structure**, not just CSS correctness.

---

### 2. Blurred White Edges While Scrolling (Background Handling Issue)

This was the most interesting issue in the project.

**Problem:**
When scrolling the page, the background image showed **blurred white edges** at the top and bottom.
This completely broke the immersive look I was trying to achieve.

At first, I assumed it was a browser bug — but it wasn’t.

---

### 3. Separating Background From Content (Correct Architecture)

**Initial approach (wrong):**
I applied the background image directly to the `body`.

This caused problems because:

- the body height changes as content grows
- blur effects don’t scale well with dynamic resizing
- scrolling exposed areas where the background didn’t fully cover

**Correct approach:**
Create a **separate background div**.

**Structure idea:**

- One fixed background layer
- One content layer on top of it

**Key CSS concepts used:**

- `position: fixed` → background stays locked while scrolling
- `z-index` → background stays behind content
- separate DOM responsibility → background ≠ content

This immediately improved stability.

---

### 4. Final Fix: Scaling the Background to Remove White Edges

Even after separating the background, the blurred edges still appeared slightly.

After further research, I learned an important detail:

> **Blurred backgrounds need to be scaled slightly larger than the viewport.**

Why?

- Blur effects expand pixels outward
- Without scaling, edges become visible during scroll

**Fix:**
Scale the background container slightly.

Example idea (conceptual):

```css
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.1); /* prevents white edges */
  z-index: -1;
}
```

This ensured:

- no white gaps
- smooth blur across the entire page
- consistent visuals during scroll

---

## 📌 Key Takeaways

- Folder structure matters as much as code
- Backgrounds should often live in **separate layers**
- `position: fixed` is powerful when used correctly
- Blur effects require **extra space** to look clean
- Real-world UI bugs are often **CSS architecture problems**, not syntax issues
