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
Week 8 — Sleep Disorder % by Stress × Gender (Interactive Color Legend + Enhanced Interactivity)

Forked from my Week 7 version (interactive + tooltip baseline).

I added an interactive color legend where hovering highlights a single sleep-disorder category and clicking toggles it on/off, dynamically updating the 100 % stacked bar chart.
The visualization also features smooth transitions, a gender filter (All / Male / Female), and a consistent color palette (Gray = None, Blue = Insomnia, Orange = Sleep Apnea).

Result:
As stress levels rise, the share of “None” decreases while “Insomnia” increases, and “Sleep Apnea” varies slightly by gender.
Interactivity allows viewers to isolate patterns easily and compare across groups.

<img width="1266" height="709" alt="image" src="https://github.com/user-attachments/assets/65fc9e03-7cb7-470c-a39f-a3959fd67c0c" />
Link(VizHub): https://vizhub.com/Charan12-prog/54a4ebf03cd247b3bf30e7df666259ef





Week 7 — Sleep Disorder % by Stress × Gender (Interactive + Tooltip)
Forked from my Week 6B baseline (100% stacked bar).
I’ve created an interactive 100% stacked bar chart showing the share of None / Insomnia / Sleep Apnea across stress levels (Low 1–3, Medium 4–6, High 7–10) with a Gender filter (All / Male / Female).
New (Week 7): added hover tooltips (category, % and counts), a dynamic title with the selected gender and n, and moved the legend outside the plot for clarity.
Result: as stress increases, “None” decreases, “Insomnia” rises, and “Apnea” varies by gender.

<img width="1196" height="655" alt="image" src="https://github.com/user-attachments/assets/6142b480-6b9f-4f3a-b834-781b125006e4" />

Link(VizHub):https://vizhub.com/Charan12-prog/02e9c468ca0b483c869b84719a29d8fe


Previous Week Assignment 4: Sleep vs Stress (Scatter plot)

I’ve created a proof-of-concept visualization: a **scatter plot of Sleep Duration vs. Stress Level**, colored by **gender** with trend lines; it shows a clear negative relationship between sleep and stress (more sleep → lower stress) for both males and females.
<img width="885" height="602" alt="Scatter plot of assignment 4" src="https://github.com/user-attachments/assets/ab897531-883c-4472-9da5-64fcd9121cc7" />
Link(VizHub):https://vizhub.com/Charan12-prog/a7291ea6d81b4f33985fc7b7a0daee21


## Open Questions

-I’m happy with how the interactive legend works, but I’m exploring how to make the transitions smoother or faster.

-I’m also curious about how to design color palettes that remain clear for people with color-vision differences.

-In future weeks, I plan to test adding additional filters such as Age or Physical Activity Level to make the visualization more detailed.



## Milestones

September: Finish visualizations 1 and 2

October: Complete visualizations 3 and 4

November: Add interactivity and error bars

December: Finalize portfolio and polish everything up.
