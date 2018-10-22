---
title: Update to the PMHC MDS - 22/10/2018
---

#### PMHC MDS Update v0.24.2 ####

We are pleased to announce that PMHC MDS Update v0.24.2 was released on October 22, 2018.

The following features have been implemented in the reporting interface:
* System report C3 - Episode type by Service Contact Intensity.

The following updates and bug fixes have been implemented in the reporting interface:
* Column totals have been added to all reports where appropriate.
* The Y axis on the A2 report now starts at 0.
* Totals for the B series reports are reported as 100% not ‘-’, when appropriate.
* The B4 report is now only available to users who have the Reporting role at a PHN. It was not meaningful to users who only had a reporting role at a Provider Organisation.
* The C series reports now indicate whether counts or percentages are being displayed.
* The C1 report has been updated so that where the Client - Estimated Date of Birth Flag is set to code 8 (indicating that Date of Birth is a dummy date), records with this value will not have their Date of Birth converted to a valid age group but be mapped to 'Unknown'.
* The C2 reports has been optimised so that it runs faster
* The 7 major categories for diagnoses used in reporting have been changed so that there are now 8 categories for Principal Diagnosis and 9 for Additional Diagnosis. The updated categories are:
  * 000 - No additional diagnosis (Additional Dx only)
  * 1xx - Anxiety disorders
  * 2xx - Affective (Mood) disorders
  * 3xx - Substance use disorders
  * 4xx - Psychotic disorders
  * 5xx - Disorders with onset usually occurring in childhood and adolescence not listed elsewhere
  * 6xx - Other mental disorders
  * 9xx except 999 - No formal mental disorder but subsyndromal problems
  * 999 - Missing or unknown

The following updates and bug fixes have been implemented for uploads:
* Resolved a race condition when deleting data via uploads.
