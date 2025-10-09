# Data Visualization Project

## Data

The data I propose to visualize for my project is Sleep Health and Lifestyle Dataset
- Here is the link of my Dataset:
https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset
This Dataset contains 13 attributes which are Person ID, Gender, Age, Occupation, Sleep Duration (hours/night), Quality of Sleep (1–10), Physical Activity Level, Stress Level (1–10), BMI Category, Blood Pressure (e.g., `126/83`), Heart Rate, Daily Steps, Sleep Disorder.


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

- How does average sleep duration differ between low, medium, and high stress levels?
- Do males and females differ in sleep at each stress level?
- What is the relationship between sleep disorders and both stress and sleep duration?
- Which features (BMI category, physical activity, daily steps, heart rate) are most correlated with sleep duration?


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

Week 7 — Sleep Disorder % by Stress × Gender (Interactive + Tooltip)
Forked from my Week 6B baseline (100% stacked bar).
I’ve created a proof-of-concept visualization: an **interactive 100% stacked bar** that shows the share of **None / Insomnia / Sleep Apnea** within each stress bin **(Low 1–3, Medium 4–6, High 7–10)**, with a **Gender filter** (All / Male / Female).
New (Week 7): added hover tooltips (category, % and counts), a dynamic title with the selected gender and n, moved the legend outside the plot, and refined margins/colors for readability.
Result: as stress rises, “None” decreases while “Insomnia” increases; “Apnea” varies by gender.

<img width="1164" height="594" alt="image" src="https://github.com/user-attachments/assets/f1d18210-5ad3-44bc-b809-ce1b785c0b20" />

Link(VizHub):https://vizhub.com/Charan12-prog/02e9c468ca0b483c869b84719a29d8fe


Week 6B — Sleep Disorder % by Stress (100% stacked) These is the new prototype of Week 6.

I’ve created a proof-of-concept visualization: A 100% stacked bar shows the share of None / Insomnia / Apnea in each stress bin.  
I moved the legend into its own panel and added % labels + hover (shows % and n).  
Result: “None” drops as stress rises; “Insomnia” increases; “Apnea” varies by bin.
<img width="1013" height="527" alt="image" src="https://github.com/user-attachments/assets/4bd7c75c-65a0-4ea8-9145-a3e60dca1580" />
Link(VizHub): https://vizhub.com/Charan12-prog/d492ae05bbfa4fffab7e92755e2f8541



Previous Week Assignment 4: Sleep vs Stress (Scatter plot)

I’ve created a proof-of-concept visualization: a **scatter plot of Sleep Duration vs. Stress Level**, colored by **gender** with trend lines; it shows a clear negative relationship between sleep and stress (more sleep → lower stress) for both males and females.
<img width="885" height="602" alt="Scatter plot of assignment 4" src="https://github.com/user-attachments/assets/ab897531-883c-4472-9da5-64fcd9121cc7" />
Link(VizHub):https://vizhub.com/Charan12-prog/a7291ea6d81b4f33985fc7b7a0daee21


## Open Questions

I still wonder if the bar chart may be too simple, since the male–female gaps are quite small.  
The stress bins (1–3, 4–6, 7–10) are arbitrary; I’ll double-check later with error bars and filters (age, BMI, activity).  
Overall I’m not worried — the new disorder view plus a scatter with trend lines should make the story clearer.



## Milestones

September: finish vizzes 1 & 2  
- October: finish vizzes 3 & 4  
- November: add interactivity + error bars  
- December: finalize portfolio & polish
