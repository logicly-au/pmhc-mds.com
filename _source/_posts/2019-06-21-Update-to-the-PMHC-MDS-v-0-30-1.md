---
title: Update to the PMHC MDS - 21/6/2019
---

#### PMHC MDS Update v0.30.1 ####

We are pleased to announce that PMHC MDS Update v0.30.1 was released on June 21, 2019.

The following features have been implemented in the data entry interface:
* Item scores can now be entered for all versions of the SDQ.

The following features have been implemented in the upload interface:
* Subscale and total difficulties scores are now calculated/validated against
  item scores provided.
* A warning is now returned if an optional file/worksheet is not contained or
  is ignored in an upload.

The following bugfixes have been implemented in the organisations interface:
* Fixed a bug where the applied filter was not being shown on the View Provider
  Organisations tab.

The following bugfixes have been implemented in the users interface:
* Fixed a bug where the roles of assigned users column was not showing in the
  Role of Assigned Users tab.

The following bugfixes have been implemented in the data entry interface:
* Fixed a bug where the Organisation Path filter was not working on the
  Practitioners table.
* Fixed a bug where the Organisation Path was not showing on the Add Client
  form for a PHN that only has one Provider Organisation.

The following bugfixes have been implemented in the reporting interface:
* Language grouping has been added to report B1 (Client Characteristics by
  Language spoken at home)
* Definition of Age fixed in all reports to be age at start of episode.
  Affected reports include: App-1, B1 and C1
* Fixed a bug in B1 where if the total clients to be reported was 0, 1 was
  actually being reported.


The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/){:target="_blank"}.
