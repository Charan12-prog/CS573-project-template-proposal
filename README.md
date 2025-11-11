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
Week 11 — Sleep Disorder % by Stress × Gender (Final Polished Version)

Forked from my Week 10 version.

This week focused on finalizing and polishing the visualization to make it presentation-ready. I improved the layout spacing, added the Poppins Google Font, and refined the title, subtitle, and caption hierarchy. I also enhanced the tooltip styling, axis readability, and legend alignment for a clean professional look. Rounded corners and subtle shadows were added to give the chart a polished, modern appearance.

Result:
The final version feels cohesive, self-explanatory, and visually refined. All interactions — hover labels, legend toggling, and gender filtering — now work smoothly. It clearly shows that higher stress levels are linked to more Insomnia and Sleep Apnea, while low-stress groups have mostly “None.”

<img width="1296" height="750" alt="image" src="https://github.com/user-attachments/assets/54e93c56-1520-47d4-a126-7eee8c98c615" />


https://vizhub.com/Charan12-prog/4536c808b181428b9b2029806cf89ea6


## Prototypes
Week 10 — Sleep Disorder % by Stress × Gender (Advanced Interaction + Hover Labels)

Forked from my Week 9 version (interactive legend + gender filter).

I added new hover effects that make other bars fade while the one you hover stays highlighted with a black outline. It also now shows an on-bar number label with the exact percentage and count (like 78.1 % (143)) and a redesigned tooltip that follows the cursor showing the category, stress level, and participant counts. The legend is still interactive but now in black for clarity, and the transitions look smoother when toggling disorders or switching gender.

Result:
The chart feels more interactive and clear. As stress levels increase, “None” goes down while “Insomnia” and “Sleep Apnea” go up, making it easy to see patterns and compare between groups.

<img width="1324" height="706" alt="image" src="https://github.com/user-attachments/assets/3dd17f34-0273-46b8-906f-29ac5cac5c58" />
Link(VizHub):https://vizhub.com/Charan12-prog/b54b961ef0344a91814a3b031ec726e2


## Prototypes
Week 9 — Sleep Disorder % by Stress × Gender (Interactive Color Legend + Enhanced Interactivity)

Forked from my Week 7 version (interactive + tooltip baseline).

I added an interactive color legend where hovering highlights a single sleep-disorder category and clicking toggles it on/off, dynamically updating the 100 % stacked bar chart.
The visualization also features smooth transitions, a gender filter (All / Male / Female), and a consistent color palette (Gray = None, Blue = Insomnia, Orange = Sleep Apnea).

Result:
As stress levels rise, the share of “None” decreases while “Insomnia” increases, and “Sleep Apnea” varies slightly by gender.
Interactivity allows viewers to isolate patterns easily and compare across groups.

<img width="1266" height="709" alt="image" src="https://github.com/user-attachments/assets/65fc9e03-7cb7-470c-a39f-a3959fd67c0c" />
Link(VizHub):https://vizhub.com/Charan12-prog/54a4ebf03cd247b3bf30e7df666259ef


Previous Week Assignment 4: Sleep vs Stress (Scatter plot)

I’ve created a proof-of-concept visualization: a **scatter plot of Sleep Duration vs. Stress Level**, colored by **gender** with trend lines; it shows a clear negative relationship between sleep and stress (more sleep → lower stress) for both males and females.
<img width="885" height="602" alt="Scatter plot of assignment 4" src="https://github.com/user-attachments/assets/ab897531-883c-4472-9da5-64fcd9121cc7" />
Link(VizHub):https://vizhub.com/Charan12-prog/a7291ea6d81b4f33985fc7b7a0daee21


## Open Questions

- How can I further optimize **transition speed** and **tooltip timing** for smoother feedback?  
- What are the most accessible **color palettes** for color-blind users?  
- Would adding **Age or Activity filters** reveal deeper patterns?


## Milestones

- September: Completed initial visualizations (Sleep vs Stress and baseline stacked bar).  
- October: Built interactive versions and refined tooltips and transitions.  
- November: Added advanced interactions (hover labels, fade effects, smooth transitions).  
- December: Polished visualization with typography and layout enhancements, finalized for presentation and portfolio.

