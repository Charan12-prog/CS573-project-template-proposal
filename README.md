# Data Visualization Project

## Data

The data I visualize in this project is Sleep Health and Lifestyle Dataset.
-  Dataset Link:
https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset
This Dataset contains 13 attributes which are Person ID, Gender, Age, Occupation, Sleep Duration (hours/night), Quality of Sleep (1–10), Physical Activity Level, Stress Level (1–10), BMI Category, Blood Pressure (e.g., `126/83`), Heart Rate, Daily Steps, Sleep Disorder.

In this project I focus on stress, sleep duration, sleep disorders, and gender to explore how stress and lifestyle are connected to sleep quality and sleep disorders.

## Final Visualization – Sleep Disorder % by Stress × Gender

By the end of the project, I built an interactive **100% stacked bar chart** that shows:

- For each **stress level bin** (Low 1–3, Medium 4–6, High 7–10),
- The **percentage of people** with:
  - **None** (healthy sleep),
  - **Insomnia**, and
  - **Sleep Apnea**.

Key interactions in the final version:

- A Gender dropdown (All / Male / Female) that recalculates percentages.
- A View dropdown (All categories / Disorders only) that lets viewers focus on Insomnia and Sleep Apnea.
- An interactive color legend where hovering highlights a category and clicking toggles it on/off.
- Hover effects that fade other bars, outline the hovered segment, and show precise labels (percentage + count) along with a detailed tooltip.

Overall, the final visualization clearly shows that **as stress increases, healthy sleepers (“None”) decrease and sleep disorders (Insomnia and Sleep Apnea) increase**, for both males and females.

---

## Demo Video (2-minute Walkthrough)
🎥 **Watch here: https://youtu.be/dDaw52A6cho

This short video gives an overview of:
- What the dataset is about  
- How the visualizations work  
- Key insights from the analysis  


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

- How does average sleep duration differ between low, medium, and high stress levels?
- Do males and females differ in sleep at each stress level?
- What is the relationship between sleep disorders and both stress and sleep duration?
- Which features (BMI category, physical activity, daily steps, heart rate) are most correlated with sleep duration?

These questions shaped my sketches, prototypes, and final design.

---



## Sketches

Sketch 1 — Avg Sleep by Stress × Gender
Bar chart of average sleep for Low/Medium/High stress; Blue = Male, Black = Female.
Result: Higher stress → less sleep for both; male and female are almost the same.
<img width="946" height="784" alt="Sketch 1" src="https://github.com/user-attachments/assets/ffab3280-8b6a-4f38-a5ab-12575ce1fde1" />

Sketch 2 — Sleep Disorder % by Stress
Stacked bars show % with None, Insomnia (//), Apnea (xx) at each stress level.
Result: As stress goes up, “None” decreases and Insomnia/Apnea increase.
<img width="880" height="646" alt="Sketch 2" src="https://github.com/user-attachments/assets/3f841445-a9a6-40b0-afbf-4a403e1c73a0" />



## Prototypes


Here are the main stages of how this project evolved over the semester. Each image links to the live VizHub version so you can explore the interaction.

---

### Prototype 1 
Week 4: Sleep vs Stress (Scatter Plot)

The very first prototype was a **scatter plot of Sleep Duration vs Stress Level**, colored by gender with trend lines.  
This helped confirm the core relationship: **people with higher stress tend to sleep fewer hours**, for both males and females.

[<img width="885" height="602" alt="Scatter plot of assignment 4" src="https://github.com/user-attachments/assets/ab897531-883c-4472-9da5-64fcd9121cc7" />](https://vizhub.com/Charan12-prog/a7291ea6d81b4f33985fc7b7a0daee21)

---

### Prototype 2 
Week 7: Sleep Disorder % by Stress (Baseline 100% Stacked Bar)

Next, I moved from sleep duration to **sleep disorders (None, Insomnia, Apnea)** and built the first **100% stacked bar chart** across Low, Medium, and High stress.

Key idea: each bar represents **100% of people in that stress bin**, split into None vs Insomnia vs Apnea. I also added labels and basic tooltips.

**Result:**  
- Low stress groups are mostly “None” (healthy sleepers).  
- Medium and High stress groups show fewer healthy sleepers and more Insomnia/Apnea.

[<img width="1021" height="569" alt="Week 7 stacked bar" src="https://github.com/user-attachments/assets/43b4e759-5c88-492f-9369-5f0a7c9c94c0" />](https://vizhub.com/Charan12-prog/d492ae05bbfa4fffab7e92755e2f8541)

---

### Prototype 3 
Week 9: Interactive Legend + Gender Filter

After the baseline chart, I added more **interactivity**:

- A **Gender dropdown** (All / Male / Female).  
- An **interactive color legend** where hovering highlights a single disorder and clicking toggles it on/off.  
- Smoother transitions and a more consistent color scheme.

This version made it much easier to isolate patterns like “what happens to Insomnia only, across stress levels, for just females or just males?”

[<img width="1266" height="709" alt="Week 9 version" src="https://github.com/user-attachments/assets/65fc9e03-7cb7-470c-a39f-a3959fd67c0c" />](https://vizhub.com/Charan12-prog/54a4ebf03cd247b3bf30e7df666259ef)

---

### Prototype 4 
Week 12: Final Polished Version (Current)

The final version keeps the same core idea but **polishes the design and interaction**:

- Neutral **gray** for “None” (healthy sleep) and two related **blue** shades for Insomnia and Sleep Apnea (disordered sleep).  
- Clearer axis label and subtitle explaining that stress is measured on a 1–10 scale and then binned into Low / Medium / High.  
- A **View dropdown**: All categories vs Disorders only.  
- Legend subtitle: “Healthy: None · Disordered: Insomnia + Sleep Apnea”.  
- Refined spacing, typography, and hover effects to make everything feel cleaner and easier to read.

**Result:**  
The final chart clearly communicates that **higher stress is associated with more Insomnia and Sleep Apnea**, and lets viewers explore differences across genders with smooth, understandable interactions.

[<img width="1110" height="603" alt="Week 12 final version" src="https://github.com/user-attachments/assets/4151e118-ebd0-476d



## Open Questions

- How can transitions and tooltip timing be made smoother?

- Which color palettes are the most accessible for color-blind users?

- Would adding filters like Age or Activity reveal deeper trends?

- Should I add annotations to highlight key findings?


## Milestones
Week 4 — First Prototype (Scatter Plot)

Built the initial Sleep vs Stress scatter plot with gender-based coloring and trend lines.

Confirmed the key dataset insight: higher stress → lower sleep duration.

Week 5 — Avg Sleep by Stress × Gender (Static Bar Chart)

Created the first bar chart of average sleep hours across stress bins (Low/Medium/High).

Labeled bars with values; identified a clear downward sleep trend at higher stress levels.

Week 6 — Tooltip + Basic Interaction Upgrade

Added hover tooltips showing exact sleep values for each gender–stress bin.

Improved readability with labeled averages and cleaner axis formatting.

Week 7 — 100% Stacked Bar (Static)

Built the first Sleep Disorder % by Stress stacked bar chart (None / Insomnia / Apnea).

Insight: “None” decreases and sleep disorders increase as stress rises.

Week 8 — Gender Filter + Dynamic Binning

Added Gender dropdown (All/Male/Female) to update the stacked bars interactively.

Chart now recalculates percentages for each selected group.

Week 9 — Interactive Color Legend

Introduced interactive legend (hover highlight + click to toggle disorders).

Added smooth transitions, consistent colors, and improved interactivity.

Week 10 — Hover Labels + Fade Effects

Added numeric labels directly on bars during hover.

Non-hovered bars fade out for clarity; tooltip redesigned to show category, percent, and count.

Week 11 — Final Polished Version

Completed final layout polish: typography (Poppins), spacing, rounded corners, shadow card.

Enhanced readability, refined legend alignment, and made all interactions seamless.
