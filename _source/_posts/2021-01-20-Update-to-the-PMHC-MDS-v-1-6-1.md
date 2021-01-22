---
title: Update to the PMHC MDS - 20/1/2021
---

#### PMHC MDS Update v1.6.1 ####

We are pleased to announce that PMHC MDS Update v1.6.1 was released on January 20, 2021.

The following features have been implemented:
* Help links have been added on all tabs.

The following improvements have been made in in data extracts:
* Optimisations have been made to improve the speed of creating data extracts.
* An extra option - Include all data associated with matched episodes - has
  been added to the data extract tab. Previously data extracts would select all
  service contacts between the two selected dates, get their episodes and other
  associated entities, but there could be service contacts on those episodes
  that are outside the selected dates. Those service contacts were not
  included in the data extract. This new option allows you to include these
  service contacts.

The following bug fixes have been implemented in the data entry interface:
* Fixed a bug where service contact tags could not be edited.

The following bug fixes have been implemented in the upload interface:
* Validation on the `!covid19` tag was relaxed so that it could continue to be
  used with PMHC MDS version 2 standard uploads.
* Fixed a bug causing an error in The Way Back Support Service version 3.0
  uploads where a TWB Plan or TWB NI was supplied without a matching TWB Episode record.

The user guides have been updated to reflect these updates. They are available at:

PMHC - [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}

HeadtoHelp - [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/){:target="_blank"}

The Way Back - [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/){:target="_blank"}
