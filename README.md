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
Previous Week Assignment 4: Sleep vs Stress (Scatter plot)

I’ve created a proof-of-concept visualization: a **scatter plot of Sleep Duration vs. Stress Level**, colored by **gender** with trend lines; it shows a clear negative relationship between sleep and stress (more sleep → lower stress) for both males and females.
<img width="885" height="602" alt="Scatter plot of assignment 4" src="https://github.com/user-attachments/assets/ab897531-883c-4472-9da5-64fcd9121cc7" />

Current Week 5: Sleep Duration vs Stess Level (Bar Chart)

I’ve created a proof-of-concept visualization: a **grouped bar chart** of average sleep by stress level (Low/Medium/High) split by gender;
This shows the Avg sleep (hrs/night) across stress bins **Low (1–3), Medium (4–6), High (7–10)**, split by gender.  
Here you can see Sleep drops with stress; small gender differences (Female higher at Low, Male higher at Medium; both **6.2 h** at High).  

<img width="922" height="514" alt="Week 5 Bar Chart" src="https://github.com/user-attachments/assets/a159dfc2-608e-4bfd-88c4-8edd6bc7baab" />



## Open Questions

I’m a bit worried the bar chart is too simple and the tiny male–female gaps could be over-read.  
The stress bins (1–3, 4–6, 7–10) are arbitrary, so I’ll verify with error bars and quick filters (age/BMI/activity).  
I’m not too worried overall—two more views (stacked disorders + scatter with trend lines) should make the story clearer.



## Milestones

September: finish viz 1 & 2 • October: finish viz 3 & 4 • November: add interactivity + error bars • December: finalize portfolio & polish
