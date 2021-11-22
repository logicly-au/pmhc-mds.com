---
title: Update to the PMHC MDS - 15/11/2021
---

#### PMHC MDS Update v1.13.4 ####

We are pleased to announce that PMHC MDS Update v1.13.4 was released on
November 15, 2021.

The following functionality has been implemented:
* Data upload can now be automated via an Upload API. Please refer to the
  Upload API section below for additional information.
* Clients can now be sent invitations to complete a YES-PHN survey at the
  completion of an episode. Please refer to the User Guide documentation at
  [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/tools.html#yes-phn](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/tools.html#yes-phn){:target="_blank"}.

As previously announced, the following validation rules have now been
implemented:
* Change to K10+ scoring algorithm as announced on 30/8/2021
  [https://pmhc-mds.com/communications/#/2021/08/30/notification-of-planned-K10-scoring-change/](https://pmhc-mds.com/communications/#/2021/08/30/notification-of-planned-K10-scoring-change/){:target="_blank"}.
* Change to SIDAS outcome measures in uploads as announced on 17/9/2021
  [https://pmhc-mds.com/communications/#/2021/09/17/notification-of-planned-sidas-upload-change/](https://pmhc-mds.com/communications/#/2021/09/17/notification-of-planned-sidas-upload-change/){:target="_blank"}

#### Upload API ####

We are pleased to announce that the PMHC MDS now supports an API for uploading
files to the PMHC MDS. Developers of Client Information Management Systems
(CIMS) can use the API to allow users to upload data to the PMHC MDS directly
from the CIMS instead of exporting a file and then logging into the PMHC MDS
to upload it.

Documentation is available at [https://api.pmhc-mds.net/](https://api.pmhc-mds.net/){:target="_blank"}

Access to this service requires an API key. In order to obtain a key, please
contact support@pmhc-mds.com.

Each integrator will be provided with their own unique API key which is
associated with a PMHC MDS user account and an organisation based "scope".
The "scope" of the key and the roles the user is assigned in the PMHC MDS need
to match for the key to be valid. The scope is limited to one Provider
Organisation or PHN. An integrator will need to request multiple API keys if
they need access to upload across multiple Provider Organisations or multiple
PHNs.

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
