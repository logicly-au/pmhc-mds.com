---
title: Update to the PMHC MDS - 13/3/2018
---

#### PMHC MDS Update v0.22.1 ####

We are pleased to announce that PMHC MDS Update v0.22.1 was released on March 13, 2018.

The following features have been implemented in the reporting interface:

* System report A3-1 - Data Quality Report: Missing and invalid Client data - Summary, 
* System report A3-2 - Data Quality Report: Missing and invalid Client data - Detail,
* System report A4-1 - Data Quality Report: Missing and invalid Episode data - Summary,
* System report A4-2 - Data Quality Report: Missing and invalid Episode data - Detail,
* System report A5-1 - Data Quality Report: Missing and invalid Service Contact data - Summary,
* System report A5-2 - Data Quality Report: Missing and invalid Service Contact data - Detail,
* System report A6-1 - Data Quality Report: Missing and invalid Practitioner data - Summary, and
* System report A6-2 - Data Quality Report: Missing and invalid Practitioner data - Detail.

The following updates and bugfixes have been implemented in the Data Entry interface:

* Fixed a bug when editing Episodes where the Save button was not enabled and no error message was shown when the Episode End Date was set to 09/09/9999.
* Fixed a bug when editing Collection Occasions where an error would be shown when the Measure Date was set to 09/09/9999.
* Removed the age based validation on Client - Proficiency in Spoken English. This validation will be replaced with a future data quality report.
* Removed the age based validation on Episode - Source of Cash Income. This validation will be replaced with a future data quality report.

The following updates and bugfixes have been implemented in the Data Extract interface:

* Fixed a bug whereby the ‘Select Organisation’ drop down was not showing the correct organisations for users who only have roles at a Provider Organisation.

The following updates and bugfixes have been implemented in the Reports interface:

* The name of the A2 report has been changed from ‘A2: Volume Trends’ to ‘A2: Monthly Volume Trends’.

The following updates and bugfixes have been implemented in the Upload interface:

* Fixed a bug where files with an extremely large number of empty lines would cause the upload pipeline to hang.
* Removed the age based validation on Client - Proficiency in Spoken English. This validation will be replaced with a future data quality report.
* Removed the age based validation on Episode - Source of Cash Income. This validation will be replaced with a future data quality report.
* Added an Upload ID to the View Uploads table and the Upload Details page. This ID is unique to each upload. Reporting this ID when contacting the Helpdesk will allow support staff to locate problem uploads easily.
