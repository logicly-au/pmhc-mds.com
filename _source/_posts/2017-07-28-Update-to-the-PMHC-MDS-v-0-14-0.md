---
title: Update to the PMHC MDS - 28/7/2017
---

#### PMHC MDS Update v0.14.0

We are pleased to announce that PMHC MDS Update v0.14.0 was released on July 28, 2017.

The following features have been implemented:

* A ‘Reporting’ tab has been added. Users who have been granted the ‘Reporting’ role will be able to see this tab.
* Category E - Reports for data managers to monitor data supply - have been implemented.

The following updates and bugfixes have been implemented:

* The ‘Data Extract’ tab has been moved to be a sub tab of the ‘Reporting’ tab.
* Client - Client Key - no longer editable.
* Client - Organisation Path - no longer editable.
* Service Contact - Practitioner - Only practitioners associated with the Provider Organisation responsible for providing the service to the client will be listed.
* Users should no longer be unexpectedly timed out.

The following upload errors have been fixed:

* Episodes without a referral date that have collection occasions with a measure date will no longer generate an error.
* K10+ and K5 collection occasions can now have both item scores and a total recorded, provided the item scores match the total. An error will be generated where the item scores and total do not match.

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/).

#### ATAPS MDS to PMHC MDS data mapping

The ATAPS MDS to PMHC MDS data mapping documentation at [https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html](https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html) has been updated to show the mapping of ATAPS MDS diagnosis fields to PMHC Principal Diagnosis and Additional Diagnosis where two ATAPS diagnosis fields have been specified.
