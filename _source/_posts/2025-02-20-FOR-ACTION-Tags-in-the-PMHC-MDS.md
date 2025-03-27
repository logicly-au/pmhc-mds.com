---
title: FOR ACTION&#58; Tags in the PMHC MDS
---

The below circular was sent to PHN CEOs on Friday 20 February 2025.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

Dear PHN CEOs,

The Department of Health and Aged Care is writing to you to request that all PHNs and/or their Provider Organisations (POs) conduct a review of the tags they use in the Primary Mental Health Care Minimum Data Set (PMHC MDS) to ensure they have been entered correctly.

For your action:

* Ensure relevant staff receive and review the information provided in this circular regarding
  review of PMHC MDS tags by 31 March 2025.
* Amend any tags that have been entered incorrectly in the PMHC MDS by 30 June 2025.
* Ensure all tags, historically and new, are entered in accordance with the guidance provided 
  in this circular.
 
For any questions regarding this information please contact [mentalhealthdata@health.gov.au](mailto:mentalhealthdata@health.gov.au).

Kind regards,

Mental Health Data


**PHN CEO Circular – February 2025**

#### Tags in the PMHC MDS

##### Overview {#overview-2025x02x20}

The Department of Health and Aged Care (the department) is writing to you to request that all PHNs and/or their Provider Organisations (POs) conduct a review of the tags they use in the Primary Mental Health Care Minimum Data Set (PMHC MDS) to ensure they have been entered correctly.

To support the information in this circular, PHNs are asked to:

* Ensure relevant staff receive and review the information provided in this circular regarding
  review of PMHC MDS tags by 31 March 2025.
* Amend any tags that have been entered incorrectly in the PMHC MDS by 30 June 2025.
* Ensure all tags, historically and new, are entered in accordance with the guidance provided 
  in this circular.
 
For any questions regarding this information please contact [mentalhealthdata@health.gov.au](mailto:mentalhealthdata@health.gov.au).


##### Background

Some issues have been identified in relation to the tag field in the PMHC MDS. There are two types of tags available to users in the PMHC MDS; *system* tags that start with “!” and *user* tags that do not start with “!”. *System* tags beginning with an exclamation mark (!) are reserved for use by the department only. 

*System* tags have been used to implement extension data specifications such as Wayback (!wayback) and headspace (!headspace). They have also been used to record data where extra partitioning of data was needed for reporting purposes. An example of this was for the bushfire response in 2020. A !br20 tag was implemented to track episodes where one or more services were funded through the bushfire response. The current list of reserved system tags is available at [https://docs.pmhc-mds.com/projects/data-specification/en/v4/reserved-tags.html](https://docs.pmhc-mds.com/projects/data-specification/en/v4/reserved-tags.html){:target="_blank"}.

*User* tags can be used by PHNs/POs to tag records in order to partition data to accommodate local requirements as desired.  

##### Action required

PHNs and their POs are asked to review and audit their tags in the PMHC MDS to ensure they have been entered correctly (e.g., no missing commas between tags). Of particular note, multiple tags can be added to a record by separating them with commas. Some of the existing tags may have been meant to have been multiple tags, but they have not been comma separated, so instead one long tag has been added. For example a record may have a tag ‘!covid19 this is an example !br20’ whereas the intention was to have the three tags: 

* !covid19
* this is an example
* !br20

Tags can contain lower case letters (or will get lowercased), numbers, dashes, spaces, and “!”. Leading and trailing spaces will be stripped.

As of 1 May 2025 the PMHC MDS will only accept system tags that are in the reserved list.

For technical support, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com).
