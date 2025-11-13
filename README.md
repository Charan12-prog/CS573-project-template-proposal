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

Week 4: Sleep vs Stress (Scatter plot)

I’ve created a proof-of-concept visualization: a **scatter plot of Sleep Duration vs. Stress Level**, colored by **gender** with trend lines; it shows a clear negative relationship between sleep and stress (more sleep → lower stress) for both males and females.
<img width="885" height="602" alt="Scatter plot of assignment 4" src="https://github.com/user-attachments/assets/ab897531-883c-4472-9da5-64fcd9121cc7" />

Link(VizHub):https://vizhub.com/Charan12-prog/a7291ea6d81b4f33985fc7b7a0daee21

## Prototypes

Week 5 — First Prototype (Bar Chart)

This prototype compares the average sleep duration across three stress categories (Low, Medium, High) for both males and females. Each bar represents the average hours of sleep per night within that stress group.

Insights:
People with low stress sleep the most, averaging around 7.8–8.3 hours.
Sleep duration drops steadily as stress increases, falling to around 6.2 hours in the high-stress group.
Male and female patterns look similar, but females show slightly higher sleep in the low-stress group.
The chart clearly shows a negative relationship between stress and sleep duration.
<img width="928" height="543" alt="image" src="https://github.com/user-attachments/assets/17dce51e-27d5-4a97-8a47-3813ab5d2c0b" />




Link(VizHub):https://vizhub.com/Charan12-prog/d461d9675d6e40069b719c869c40aa39

Week 6 — Sleep vs Stress (Improved Bar Chart + Tooltip Interaction)

Forked from my Week 5 bar chart.
This week, I refined the bar chart by adding tooltips that appear when hovering over each bar, showing the exact sleep duration value for that gender and stress category. This makes the chart more interactive and easier to interpret. I also improved the color styling and added clearer labels for stress categories.

Result:
The updated chart makes the main pattern clearer: both males and females sleep more under low stress and significantly less under high stress. The tooltip interaction helps users compare values precisely and understand the negative relationship between stress and sleep duration.
<img width="898" height="520" alt="image" src="https://github.com/user-attachments/assets/5eeb3e2f-97e1-4a98-8a8e-8e42e82e428d" />

Link(VizHub):https://vizhub.com/Charan12-prog/8fa6ffe649914a42b51ad937e54c445d

Week 7 — Sleep Disorder % by Stress (Baseline 100% Stacked Bar + Tooltip Labels)

Forked from my Week 6 bar chart version of the project (Sleep vs Stress by Gender).
This prototype introduces the first 100% stacked bar chart for visualizing sleep disorders (None, Insomnia, Apnea) across Low, Medium, and High stress categories. I added clear percentage labels on each segment and tooltips that show the exact % and sample count when hovering over a bar.

Result:
The visualization reveals a strong trend:
Low stress groups are mostly “None” (healthy sleepers).
Medium stress shows a drop in healthy sleepers and a rise in Insomnia.
High stress has the highest Insomnia and Apnea rates, showing how sleep disorders worsen as stress increases.
This chart becomes the baseline that I later extend with color legends, filters, and richer interactivity.
<img width="1021" height="569" alt="image" src="https://github.com/user-attachments/assets/43b4e759-5c88-492f-9369-5f0a7c9c94c0" />


Link(VizHub):https://vizhub.com/Charan12-prog/d492ae05bbfa4fffab7e92755e2f8541

Week 8 — Sleep Disorder % by Stress × Gender (Dropdown Filter + Clean Layout)

Forked from my Week 7 baseline stacked bar chart.
This week, I introduced a gender filter dropdown (All / Male / Female) so the viewer can quickly compare sleep-disorder patterns across different demographics. I also improved the chart layout by adding a cleaner axis style, reorganizing the legend, and adjusting spacing to make the visualization easier to read.

Result:
The gender filter immediately shows how patterns shift:
For All, high stress has the highest rates of Insomnia and Sleep Apnea.
Filtering to Male or Female reveals subtle differences in how each group experiences sleep disorders under stress.
This marks the beginning of more interactive controls that help the viewer explore the dataset.
<img width="1187" height="646" alt="image" src="https://github.com/user-attachments/assets/9f0c21e5-3164-4fee-805f-e0041f36ba15" />

Link(VizHub):https://vizhub.com/Charan12-prog/02e9c468ca0b483c869b84719a29d8fe

Week 9 — Sleep Disorder % by Stress × Gender (Interactive Color Legend + Enhanced Interactivity)

Forked from my Week 8 version (interactive + tooltip baseline).
I added an interactive color legend where hovering highlights a single sleep-disorder category and clicking toggles it on/off, dynamically updating the 100 % stacked bar chart.
The visualization also features smooth transitions, a gender filter (All / Male / Female), and a consistent color palette (Gray = None, Blue = Insomnia, Orange = Sleep Apnea).

Result:
As stress levels rise, the share of “None” decreases while “Insomnia” increases, and “Sleep Apnea” varies slightly by gender.
Interactivity allows viewers to isolate patterns easily and compare across groups.

<img width="1266" height="709" alt="image" src="https://github.com/user-attachments/assets/65fc9e03-7cb7-470c-a39f-a3959fd67c0c" />

Link(VizHub):https://vizhub.com/Charan12-prog/54a4ebf03cd247b3bf30e7df666259ef

Week 10 — Sleep Disorder % by Stress × Gender (Advanced Interaction + Hover Labels)

Forked from my Week 9 version (interactive legend + gender filter).
I added new hover effects that make other bars fade while the one you hover stays highlighted with a black outline. It also now shows an on-bar number label with the exact percentage and count (like 78.1 % (143)) and a redesigned tooltip that follows the cursor showing the category, stress level, and participant counts. The legend is still interactive but now in black for clarity, and the transitions look smoother when toggling disorders or switching gender.

Result:
The chart feels more interactive and clear. As stress levels increase, “None” goes down while “Insomnia” and “Sleep Apnea” go up, making it easy to see patterns and compare between groups.

<img width="1324" height="706" alt="image" src="https://github.com/user-attachments/assets/3dd17f34-0273-46b8-906f-29ac5cac5c58" />

Link(VizHub):https://vizhub.com/Charan12-prog/b54b961ef0344a91814a3b031ec726e2

Week 11 — Sleep Disorder % by Stress × Gender (Final Polished Version)

Forked from my Week 10 version.
This week focused on finalizing and polishing the visualization to make it presentation-ready. I improved the layout spacing, added the Poppins Google Font, and refined the title, subtitle, and caption hierarchy. I also enhanced the tooltip styling, axis readability, and legend alignment for a clean professional look. Rounded corners and subtle shadows were added to give the chart a polished, modern appearance.

Result:
The final version feels cohesive, self-explanatory, and visually refined. All interactions — hover labels, legend toggling, and gender filtering — now work smoothly. It clearly shows that higher stress levels are linked to more Insomnia and Sleep Apnea, while low-stress groups have mostly “None.”

<img width="1296" height="750" alt="image" src="https://github.com/user-attachments/assets/54e93c56-1520-47d4-a126-7eee8c98c615" />

https://vizhub.com/Charan12-prog/4536c808b181428b9b2029806cf89ea6





## Open Questions

- How can I further optimize **transition speed** and **tooltip timing** for smoother feedback?  
- What are the most accessible **color palettes** for color-blind users?  
- Would adding **Age or Activity filters** reveal deeper patterns?


## Milestones

- Week 4 — First Prototype (Scatter Plot)
Built the initial Sleep vs Stress scatter plot with gender-based coloring and trend lines.
Confirmed the key dataset insight: higher stress → lower sleep duration.

- Week 5 — Avg Sleep by Stress × Gender (Static Bar Chart)
Created the first bar chart of average sleep hours across stress bins (Low/Medium/High).
Labeled bars with values; identified a clear downward sleep trend at higher stress levels.

- Week 6 — Tooltip + Basic Interaction Upgrade
Added hover tooltips showing exact sleep values for each gender–stress bin.
Improved readability with labeled averages and cleaner axis formatting.

- Week 7 — 100% Stacked Bar (Static)
Built the first Sleep Disorder % by Stress stacked bar chart (None / Insomnia / Apnea).
Insight: “None” decreases and sleep disorders increase as stress rises.

- Week 8 — Gender Filter + Dynamic Binning
Added Gender dropdown (All/Male/Female) to update the stacked bars interactively.
Chart now recalculates percentages for each selected group.

- Week 9 — Interactive Color Legend
Introduced interactive legend (hover highlight + click to toggle disorders).
Added smooth transitions, consistent colors, and improved interactivity.

- Week 10 — Hover Labels + Fade Effects
Added numeric labels directly on bars during hover.
Non-hovered bars fade out for clarity; tooltip redesigned to show category, percent, and count.

- Week 11 — Final Polished Version
Completed final layout polish: typography (Poppins), spacing, rounded corners, shadow card.
Enhanced readability, refined legend alignment, and made all interactions seamless.
