---
title: PMHC MDS notification of planned change to SIDAS outcome measures in uploads
---

#### PMHC MDS notification of planned change to SIDAS outcome measures in uploads ####

In the last week of October 2021, the PMHC MDS will be updated with a change
to SIDAS outcome measures in uploads.

The PMHC MDS has been changing SIDAS outcome measures, such that if item 1
has the value “0 – Never”, all other items are set to 0.

Between now and the end of October, the PMHC MDS will change all other items
to “98 - Not Required”, when item 1 has the value  “0 – Never”. In the last
week of October, the PMHC MDS will be changed to enforce the validation rule:

* When item 1 has the value “0 - Never” all other items must be set to “98 - Not Required”

Therefore, when item 1 has the value “0 - Never” if any item has a value
other than “98 - Not Required” an error will be generated and the upload will fail.
