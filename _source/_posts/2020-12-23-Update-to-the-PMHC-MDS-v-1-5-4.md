---
title: Update to the PMHC MDS - 23/12/2020
---

#### PMHC MDS Update v1.5.4 ####

We are pleased to announce that PMHC MDS Update v1.5.4 was released on December 23, 2020.

##### HeadtoHelp Hubs extension

The Primary Mental Health Care Minimum Data Set (PMHC MDS) has been extended to allow data collection for the HeadtoHelp Hubs programs. This extension is only to be used if your organisation is a HeadtoHelp Hubs intake or hub organisation.

The HeadtoHelp Hubs specification is available at [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/){:target="_blank"}.

The PMHC MDS has been extended to allow upload, data entry and report filtering against this specification.

PHNs and their HeadtoHelp Hubs intake and hub provider organisations are able to either export data from their client systems and upload to the PMHC MDS or manually create spreadsheets that can then be uploaded. Example upload files are available in the HeadtoHelp Hubs Upload Specification at
[https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/data-specification/upload-specification.html](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/data-specification/upload-specification.html){:target="_blank"}.

Data may be uploaded in either Excel or CSV format.

There is a Developers PMHC MDS website available for testing/training purposes
for PHNs, Provider Organisations and third-party developers. See:
[https://docs.pmhc-mds.com/projects/user-documentation/en/latest/faqs/system/access.html#can-i-have-an-account-to-test-adding-data-and-for-training-new-staff](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/faqs/system/access.html#can-i-have-an-account-to-test-adding-data-and-for-training-new-staff){:target="_blank"}.

The HeadtoHelp Hubs data entry interface is also available. It allows users to manually enter HeadtoHelp Hubs data through online forms as an alternative to uploading a spreadsheet or file. The HeadtoHelp Hubs User Guide is available at [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/user-documentation/](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/user-documentation/){:target="_blank"}. Information on adding HeadtoHelp data to an episode is available at [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/user-documentation/data-entry-user-guide.html#adding-a-client-s-headtohelp-episode-data](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/user-documentation/data-entry-user-guide.html#adding-a-client-s-headtohelp-episode-data){:target="_blank"}

Reports have been updated so that they can filter episodes using either the existing ``!br20`` tag or the HeadtoHelp Hubs ``!covid19`` episode tag that has been introduced in order to support the Australian Government Mental Health HeadtoHelp Hubs program. Please refer to [https://docs.pmhc-mds.com/projects/data-specification/en/v2/reserved-tags.html](https://docs.pmhc-mds.com/projects/data-specification/en/v2/reserved-tags.html){:target="_blank"} for full details of when and how to use these tags.

The following bug fixes been implemented in the reporting tab:

* Fixed a bug so that only ``!wayback`` tagged records are included in The Way Back
  quarterly reports.


The user guides have been updated to reflect these updates. They are available at:

PMHC - [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}

HeadtoHelp - [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/){:target="_blank"}

The Way Back - [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/){:target="_blank"}
