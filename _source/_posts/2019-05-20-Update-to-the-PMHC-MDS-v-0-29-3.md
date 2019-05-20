---
title: Update to the PMHC MDS - 20/5/2019
---

#### PMHC MDS Update v0.29.3 ####

We are pleased to announce that PMHC MDS Update v0.29.3 was released on May 20, 2019.

The following updates have been implemented across the interface:
* In order to improve the responsiveness of the system, all tables except 
  View Collection Occasions and View Service Contacts have had pagination 
  implemented. Pagination of View Collection Occasions and View Service 
  Contacts will be implemented in a future release.

The following bugfixes have been implemented in the reporting interface:
* Fixed a bug in reports A7/A8/A9 where rows with zero results were missing.

The following bugfixes have been implemented in the upload interface:
* Fixed a bug where you could not upload to an organisation if it was within 
  its grace period if you did not supply an organisations file/worksheet in 
  the upload.

The following bugfixes have been implemented in the data extract interface:
* Fixed a bug where if multiple episodes for different Provider Organisations 
  within the same PHN had the same episode key where extracted, episodes for 
  the wrong Provider Organisation could get extracted erroneously - this 
  would only occur when a PHN was extracting data.

The following bugfixes have been implemented in the Provider Organisation and Practitioners interfaces:
* Fixed a bug where it was not possible to remove the OMSSS email address

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/){:target="_blank"}.
